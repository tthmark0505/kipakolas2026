"use client";

import { useEffect, useRef } from "react";
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

const videos = {
  gofri: "/3d-labor-2/3d-gofri.mp4",
  procedural: "/3d-labor-2/3d-procedural.mp4",
  labda: "/3d-labor-2/3d-labda-pattogas.mp4",
  kacsa: "/3d-labor-2/3d-kacsa-vagy-tojas.mp4",
  gyumolcs: "/3d-labor-2/3d-gyumolcs.mp4",
  final: "/3d-labor-2/3d-final.mp4",
  mocap: "/3d-labor-2/3d-mocap.mp4",
  blockout: "/3d-labor-2/3d-blockout.mp4",
};

const images = {
  inspiration1: "/3d-labor-2/3d-inspo-1.jpg",
  inspiration2: "/3d-labor-2/3d-inspo-2.avif",
};

function VideoCard({
  title,
  src,
  className = "",
}: {
  title: string;
  src: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;


video.play().catch(() => {});
  }, []);

  return (
    <div className={className}>
      <div className="h-full overflow-hidden rounded-md border border-white/10 bg-white/5 backdrop-blur-sm">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          src={src}
        />
      </div>

      <p
        className={`${specialGothicExpanded.className} mt-3 text-[18px] uppercase leading-none text-white`}
      >
        {title}
      </p>
    </div>
  );
}

function FinalVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    video.play().catch(() => {});
  }, []);

  return (
    <div className="mt-12 overflow-hidden rounded-md border border-white/10 bg-white/5 backdrop-blur-sm">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full object-cover"
        style={{
          aspectRatio: "1920 / 810",
        }}
        src={src}
      />
    </div>
  );
}

export default function Labor3DPage() {
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
          <div className="grid max-w-[1180px] grid-cols-3 gap-20">
            <div>
              <h1
                className={`${specialGothicExpanded.className} text-[30px] uppercase leading-none`}
              >
                3D LABOR 2.
              </h1>

              <p className="mt-2 text-[15px] text-white">
                Oktató: Berkes Bálint
              </p>
            </div>

            <div>
              <h2
                className={`${specialGothicExpanded.className} text-[30px] uppercase leading-none`}
              >
                HÁZI FELADAT
              </h2>

              <p
                className={`${specialGothicExpanded.className} mt-2 text-[18px] uppercase text-white`}
              >
                MOTION DESIGN C4D-BEN
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
                CSÁBÍTÓ MÉLYSÉG
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-[1200px]">
          <h2
            className={`${specialGothicExpanded.className} text-[30px] uppercase leading-none`}
          >
            HÁZI FELADAT
          </h2>

          <p
            className={`${specialGothicExpanded.className} mt-2 text-[18px] uppercase text-white`}
          >
            VÉGSŐ RENDEREK
          </p>

          <div className="mt-12 grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-16">
            <VideoCard title="Gofri" src={videos.gofri} className="h-[218px]" />
            <VideoCard
              title="Procedural"
              src={videos.procedural}
              className="h-[218px]"
            />
            <VideoCard
              title="Gyümölcs klónozás"
              src={videos.gyumolcs}
              className="row-span-2 h-full"
            />
            <VideoCard
              title="Labda pattogás"
              src={videos.labda}
              className="h-[218px]"
            />
            <VideoCard
              title="Kacsa vagy tojás?"
              src={videos.kacsa}
              className="h-[218px]"
            />
          </div>
        </section>

        <section className="mt-32 max-w-[1200px]">
          <h2
            className={`${specialGothicExpanded.className} text-[30px] uppercase leading-none`}
          >
            FÉLÉVES FELADAT
          </h2>

          <p
            className={`${specialGothicExpanded.className} mt-2 text-[18px] uppercase text-white`}
          >
            VÉGSŐ RENDER
          </p>

          <FinalVideo src={videos.final} />

  <div className="mt-12">
  <div className="max-w-[700px]">
    <p className="text-[16px] leading-[1.55] text-white">
      A féléves feladatom inspirációját a Forza Horizon 5 Hot Wheels kiegészítője adta. Bár a game design világa távol áll tőlem, a célom nem egy fotórealisztikus jelenet létrehozása volt, hanem egy olyan render elkészítése, amely hangulatában és vizuális megjelenésében inkább egy modern videójáték világát idézi.
    </p>
  </div>

  <div className="mt-10 grid grid-cols-2 gap-4">
    <div className="aspect-video overflow-hidden rounded-md border border-white/10 bg-white/5 backdrop-blur-sm">
      <img
        src={images.inspiration1}
        alt="Inspiráció 1"
        className="h-full w-full object-cover"
      />
    </div>

    <div className="aspect-video overflow-hidden rounded-md border border-white/10 bg-white/5 backdrop-blur-sm">
      <img
        src={images.inspiration2}
        alt="Inspiráció 2"
        className="h-full w-full object-cover"
      />
    </div>
  </div>

  <p
    className={`${specialGothicExpanded.className} mt-3 text-[18px] uppercase leading-none text-white`}
  >
    INSPIRÁCIÓ
  </p>
</div>


<section className="mt-32 max-w-[1200px]">

  <div className="mt-12 grid grid-cols-[2fr_1fr] gap-8 items-start">
    <div className="overflow-hidden rounded-md border border-white/10 bg-white/5 backdrop-blur-sm">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full object-cover"
        style={{
          aspectRatio: "2 / 1",
        }}
        src={videos.blockout}
      />
    </div>

    <div>
      <h3
        className={`${specialGothicExpanded.className} text-[22px] uppercase leading-none`}
      >
        Blockout
      </h3>

      <p className="mt-6 text-[16px] leading-[1.55] text-white">
        A munka legelső lépése a blockout jelenet létrehozása volt.
        Önállóan ekkor használtam először a Cinema 4D-t és a Redshiftet, ami látványban és igényességben is látszik.
      </p>
    </div>
  </div>
</section>


<section className="mt-32 max-w-[1200px]">

  <div className="mt-12 grid grid-cols-[2fr_1fr] gap-8 items-start">
    <div className="overflow-hidden rounded-md border border-white/10 bg-white/5 backdrop-blur-sm">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full object-cover"
        style={{
          aspectRatio: "2 / 1",
        }}
        src={videos.mocap}
      />
    </div>

    <div>
      <h3
        className={`${specialGothicExpanded.className} text-[22px] uppercase leading-none`}
      >
        Motion Capture
      </h3>

      <p className="mt-6 text-[16px] leading-[1.55] text-white">
        A központi, zászló lengető karakter mozgását a Rokoko Smartsuit mocap ruhával vettük fel.
        <br />
        <br />
        Külön köszönet: Fedorov Eszter &lt;3
      </p>
    </div>
  </div>
</section>

        </section>
      </div>
    </main>
  );
}