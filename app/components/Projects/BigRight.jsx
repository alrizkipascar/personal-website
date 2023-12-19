import HoverCard from "./cards/hovercard";
import SmallHoverCard from "./cards/smallhovercard";

export default function BigRight() {
  return (
    <div className="grid grid-cols-3 gap-5   h-auto ">
      <div className="col-span-1 grid grid-rows-2 gap-3 w-full h-full lg:h-[450px]">
        <SmallHoverCard />
        <SmallHoverCard />
      </div>
      <div className="col-span-2 ">
        <HoverCard />
      </div>
    </div>
  );
}
