import { NextResponse } from "next/server";

/**
 * Demo form submissions are forwarded to a Google Apps Script Web App
 * bound to a Google Sheet. The script appends each submission as a row.
 * The Web App URL is stored server-side only (GOOGLE_SHEETS_WEBHOOK_URL)
 * so it never reaches the client bundle.
 */
export async function POST(request: Request) {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) {
    return NextResponse.json(
      { ok: false, error: "Sheet webhook not configured" },
      { status: 500 },
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  try {
    // Google Apps Script web apps return a 302 redirect on POST to a
    // different domain — fetch follows redirects by default. We pass
    // the JSON straight through; the script handles parsing/appending.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Apps Script can occasionally be slow on cold-starts.
      signal: AbortSignal.timeout(12_000),
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: `Sheet write failed (${res.status})` },
        { status: 502 },
      );
    }

    const result = (await res.json().catch(() => null)) as
      | { ok?: boolean; error?: string }
      | null;
    if (result && result.ok === false) {
      return NextResponse.json(
        { ok: false, error: result.error || "Sheet returned an error" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : String(err) },
      { status: 500 },
    );
  }
}
