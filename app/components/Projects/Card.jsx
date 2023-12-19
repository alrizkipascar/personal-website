import { Link } from "@remix-run/react";
import HoverCard from "./cards/hovercard";
import HoverCardVideo from "./cards/hovercardvideo";

const CardType = {
  video: HoverCardVideo,
  image: HoverCard,
};

export default function Card({ data }) {
  const CurrentCard = CardType[data?.contentType];
  return (
    <Link to={data?.slug} className="h-[200px] lg:h-[400px] w-full ">
      <CurrentCard data={data} />
    </Link>
  );
}
