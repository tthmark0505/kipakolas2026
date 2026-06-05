import Link from "next/link";
import SideRays from "@/components/SideRays/SideRays";
import Masonry from "@/components/Masonry/Masonry";

const subjects = [
  { name: "Hang labor 2.", href: "/hang-labor-2" },
  { name: "Mozgógrafika 2.", href: "/mozgografika-2" },
  { name: "3D Labor 2.", href: "/3d-labor-2" },
  { name: "Multimédia design 2.", href: "/multimedia-design-2" },
];

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#08070d] text-white"
      style={{
        fontFamily: "var(--font-special-gothic)",
      }}
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

      <section className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-20 px-12 pt-32 lg:grid-cols-[0.85fr_1.15fr] lg:px-24">
        <div>
          <div className="mb-8">
            <h2 className="text-[22px] leading-none">
              Tóth Márk Benjámin
            </h2>

            <p
              className="mt-2 text-[18px]"
              style={{
                fontFamily: "sans-serif",
              }}
            >
              média design BA2
            </p>
          </div>

          <h1 className="mb-16 text-[28px] uppercase lg:text-[34px]">
            KIPAKOLÁS \ 2026 TAVASZ
          </h1>

          <nav className="flex flex-col gap-4">
            {subjects.map((subject) => (
              <Link
                key={subject.href}
                href={subject.href}
                className="group w-fit"
              >
                <span
                  className="
                    inline-block
                    text-[28px]
                    lg:text-[32px]
                    transition-all
                    duration-300
                    ease-out
                    opacity-70
                    group-hover:opacity-100
                    group-hover:tracking-[0.08em]
                    group-hover:scale-[1.03]
                  "
                >
                  {subject.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <Masonry />
      </section>
    </main>
  );
}