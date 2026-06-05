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

export default function Masonry() {
  return (
    <div className="grid h-[680px] grid-cols-3 grid-rows-6 gap-3">
      {blocks.map((size, index) => (
        <div
          key={index}
          className={`${size} group relative overflow-hidden rounded-md`}
        >
          <img
            src={`https://picsum.photos/600/800?random=${index + 1}`}
            alt=""
            className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        </div>
      ))}
    </div>
  );
}