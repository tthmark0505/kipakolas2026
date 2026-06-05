"use client";

import SideRays from "@/components/SideRays/SideRays";

import {
  Special_Gothic,
  Special_Gothic_Expanded_One,
} from "next/font/google";

const specialGothic = Special_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const specialGothicExpanded = Special_Gothic_Expanded_One({
  weight: "400",
  subsets: ["latin"],
});

const media = {
  breakdown: "/mozgografika-2/breakdown.mp4",
  nodeTree: "/mozgografika-2/node_tree.png",
  viewer: "/mozgografika-2/viewer.png",
};

function VideoCard({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="h-full overflow-hidden rounded-md border border-white/10 bg-white/5 backdrop-blur-sm">
        <video
          controls
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          src={src}
        />
      </div>
    </div>
  );
}

function ImageCard({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="h-full overflow-hidden rounded-md border border-white/10 bg-white/5 backdrop-blur-sm">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export default function Mozgografika2Page() {
  return (
    <main
      className={`${specialGothic.className} relative min-h-screen overflow-hidden bg-[#08070d] text-white`}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <SideRays
          speed={1}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={3}
          origin="top-right"
          tilt={0}
          saturation={1.9}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-12 pb-24 pt-32 lg:px-24">
        <section className="mb-28">
          <div className="grid max-w-[760px] grid-cols-2 gap-20">
            <div>
              <h1
                className={`${specialGothicExpanded.className} text-[30px] uppercase leading-none`}
              >
                MOZGÓGRAFIKA 2.
              </h1>

              <p className="mt-2 text-[15px] text-white">
                Oktató: Madácsi Blanka
              </p>
            </div>

            <div>
              <h2
                className={`${specialGothicExpanded.className} text-[30px] uppercase leading-none`}
              >
                FÉLÉVES FELADAT
              </h2>

              <p
                className={`${specialGothicExpanded.className} mt-2 text-[18px] uppercase text-white`}
              >
                COMPOSITOR REEL
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-[980px]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-12">
            <VideoCard
              src={media.breakdown}
              className="col-span-2 h-[430px] max-w-[760px]"
            />

            <ImageCard
              src={media.nodeTree}
              alt="Node tree"
              className="h-[220px]"
            />

            <ImageCard
              src={media.viewer}
              alt="Viewer"
              className="h-[220px]"
            />
          </div>
        </section>
      </div>
    </main>
  );
}