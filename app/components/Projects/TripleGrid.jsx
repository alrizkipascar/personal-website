import SmallHoverCard from "./cards/smallhovercard";

export default function TripleGrid() {
  return (
    <div className="grid grid-cols-3 gap-5 md:items-center w-full h-full lg:h-[190px]">
      <SmallHoverCard />
      <SmallHoverCard />

      <SmallHoverCard />
    </div>
  );
}
