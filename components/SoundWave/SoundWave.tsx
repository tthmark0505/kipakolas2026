"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type SoundWaveProps = {
  title: string;
  videoSrc: string;
  large?: boolean;
};

export default function SoundWave({
  title,
  videoSrc,
  large = false,
}: SoundWaveProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div>
      <h3 className="mb-2 text-[17px] font-black">{title}</h3>

      <button
        onClick={togglePlay}
        className={[
          "flex w-full items-center gap-3 rounded-[5px] bg-[#3152ff] px-2 text-white",
          large ? "h-[62px]" : "h-[34px]",
        ].join(" ")}
      >
        <span className="flex shrink-0 items-center justify-center">
          {playing ? (
            <Pause size={large ? 34 : 20} fill="white" />
          ) : (
            <Play size={large ? 38 : 22} fill="white" />
          )}
        </span>

        <div className="flex h-full flex-1 items-center gap-[3px] overflow-hidden">
          {Array.from({ length: large ? 48 : 42 }).map((_, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-white/80"
              style={{
                height: `${10 + ((i * 7) % (large ? 34 : 18))}px`,
              }}
            />
          ))}
        </div>
      </button>

      <div
        className={[
          "mt-2 overflow-hidden rounded-[5px] bg-[#3152ff]",
          large ? "aspect-video" : "aspect-video",
        ].join(" ")}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="h-full w-full object-cover opacity-0"
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
        />
      </div>
    </div>
  );
}