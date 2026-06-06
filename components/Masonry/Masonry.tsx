const blocks = [
  "row-span-2",
  "row-span-3",
  "row-span-1",
  "row-span-2",
  "row-span-2",
  "row-span-3",
  "row-span-2",
  "row-span-1",
];

const images = [
  "/masonry-1.png",
  "/masonry-2.png",
  "/masonry-3.png",
  "/masonry-4.png",
  "/masonry-5.png",
  "/masonry-6.png",
  "/masonry-7.png",
  "/masonry-8.png",
];

export default function Masonry() {
  return (
    <div className="grid h-[680px] grid-cols-3 grid-rows-6 gap-3">
      {blocks.map((size, index) => (
        <div
          key={index}
          className={`${size} group relative overflow-hidden rounded-xl`}
        >
          <img
            src={images[index]}
            alt={`Masonry ${index + 1}`}
            className="
              h-full
              w-full
              object-cover
              transition-all
              duration-500
              ease-out
              group-hover:scale-105
            "
          />

          {/* Kékes színezés */}
          <div
            className="
              absolute
              inset-0
              bg-[#5d9dff]
              mix-blend-soft-light
              opacity-40
              transition-all
              duration-300
              group-hover:opacity-20
            "
          />

          {/* Sötétítés */}
          <div
            className="
              absolute
              inset-0
              bg-black/25
              transition-all
              duration-300
              group-hover:bg-black/10
            "
          />
        </div>
      ))}
    </div>
  );
}