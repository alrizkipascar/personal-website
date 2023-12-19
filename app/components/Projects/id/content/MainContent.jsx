import { Link } from "@remix-run/react";
import HoverCard from "./cards/hovercard";
import HoverCardVideo from "./cards/hovercardvideo";

const CardType = {
  video: HoverCardVideo,
  image: HoverCard,
};

export default function MainContent({ data }) {
  const CurrentCard = CardType[data?.contentType];
  return (
    <div className="h-[200px] lg:h-[400px] w-full ">
      <CurrentCard data={data} />
    </div>
  );
}
