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
  main: "/hang-labor-2/hl_feleves.mp4",
  banana: "/hang-labor-2/hl_banan.mp4",
};

export default function HangLabor2Page() {
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
          <div className="grid max-w-[820px] grid-cols-2 gap-20">
            <div>
              <h1
                className={`${specialGothicExpanded.className} text-[30px] uppercase leading-none`}
              >
                HANG LABOR 2.
              </h1>

              <p className="mt-2 text-[15px] text-white">
                Oktató: Kováts Jázon
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
                FOLEY
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20 grid max-w-[1320px] grid-cols-[2.2fr_0.8fr] items-center gap-12">
          <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <video
              controls
              preload="metadata"
              className="h-full w-full object-cover"
              src={videos.main}
            />
          </div>

          <div>
            <h3
              className={`${specialGothicExpanded.className} mb-3 text-[18px] uppercase`}
            >
              Ready or Not (2019)
            </h3>

            <p className="text-[16px] leading-[1.45] text-white">
              A filmet azért választottam, mert tetszett, és a foleyzása
              érdekes feladatnak tűnt. A lépések hangjain kívül kevés
              hétköznapi hang szerepel benne, ezért több egyedi hanghatást
              kellett elkészíteni, ami kihívást jelentett a munka során.
            </p>
          </div>
        </section>

        <section className="max-w-[760px]">
          <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <video
              controls
              preload="metadata"
              className="h-full w-full object-cover"
              src={videos.banana}
            />
          </div>
        </section>
      </div>
    </main>
  );
}