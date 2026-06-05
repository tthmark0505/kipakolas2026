"use client";

import Link from "next/link";
import {
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

import { useTimer } from "./TimerContext";

export default function Header() {
  const {
    time,
    running,
    startTimer,
    stopTimer,
    resetTimer,
  } = useTimer();

  const minutes = Math.floor(time / 60);
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <header
      className="absolute top-14 left-0 right-0 z-50"
      style={{ fontFamily: "var(--font-special-gothic)" }}
    >
      <div className="mx-auto max-w-[1600px] px-12 lg:px-24">
        <div className="flex items-center gap-16 text-[14px] uppercase tracking-[0.08em]">
          <span>TMB</span>

          <Link href="/">
            Kezdőlap
          </Link>

          <div className="flex items-center gap-3">
            {running ? (
              <button
                onClick={stopTimer}
                className="
                  h-8 w-8
                  rounded-lg
                  border border-white/20
                  flex items-center justify-center
                  hover:border-white/60
                  transition-all
                "
              >
                <Pause
                  size={14}
                  strokeWidth={3.5}
                />
              </button>
            ) : (
              <button
                onClick={startTimer}
                className="
                  h-8 w-8
                  rounded-lg
                  border border-white/20
                  flex items-center justify-center
                  hover:border-white/60
                  transition-all
                "
              >
                <Play
                  size={13}
                  fill="currentColor"
                />
              </button>
            )}

            {running && (
              <button
                onClick={resetTimer}
                className="
                  h-8 w-8
                  rounded-lg
                  border border-white/20
                  flex items-center justify-center
                  hover:border-white/60
                  transition-all
                "
              >
                <RotateCcw
                  size={14}
                  strokeWidth={2.5}
                />
              </button>
            )}
          </div>

          <span>
            {minutes}:{seconds}
          </span>
        </div>
      </div>
    </header>
  );
}