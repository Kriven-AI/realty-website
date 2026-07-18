"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Streams from S3 (public, video/mp4, range-enabled). preload="none" + click-to-play
// means zero bytes load until the visitor clicks — the page stays fast (Core Web Vitals).
const VIDEO_SRC =
  "https://kriven-ai-real-estate-intelligence.s3.us-east-1.amazonaws.com/kriven-launch-v11.mp4";
const POSTER = "/kriven-launch-poster.jpg";

export function LaunchFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section
      id="see-it-in-action"
      className="relative overflow-hidden border-t border-border-subtle py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            Watch &middot; 2 min
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Watch a lead become</span>{" "}
            <span className="text-muted-foreground">a site visit.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            See how Kriven AI turns every late-night call, WhatsApp ping, and
            website visit into a booked site visit &mdash; in your buyer&rsquo;s
            own language, 24/7.
          </p>
        </div>

        {/* Player */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto mt-12 aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-border-subtle bg-card shadow-[0_24px_70px_-24px_rgba(26,24,23,0.28)]"
        >
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            poster={POSTER}
            preload="none"
            playsInline
            controls={playing}
            onEnded={() => setPlaying(false)}
            className="h-full w-full object-cover"
          />

          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play the Kriven AI launch film"
              className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/25 via-transparent to-transparent transition-colors hover:from-black/15"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform duration-200 group-hover:scale-105">
                <Play className="ml-1 h-8 w-8 fill-current" />
              </span>
              <span className="absolute bottom-4 right-4 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                2:43
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
