import { Link } from "@remix-run/react";
import HoverCard from "./cards/hovercard";
import SmallHoverCard from "./cards/smallhovercard";

export default function BigLeft() {
  return (
    <div className="grid grid-cols-3 gap-5 h-auto ">
      <Link to="#" className="col-span-2 ">
        <HoverCard />
      </Link>
      <div className="col-span-1 grid grid-rows-2 gap-3 w-full h-full lg:h-[450px]">
        <SmallHoverCard />
        <SmallHoverCard />

        {/* <div class="relative group lg:w-[650px] lg:h-[400px] overflow-hidden">
          <img
            alt=""
            className="absolute object-fill object-center w-full h-full transform duration-1000 backdrop-opacity-100"
            src="https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-full group-hover:-inset-y-0">
            <div className="absolute w-full flex place-content-center">
              <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
                Team work
              </p>
            </div>
            <div className="absolute w-full flex place-content-center mt-20">
              <p className="font-sans text-center w-4/5 text-white mt-5">
                Collaborative effort of a group to achieve a common goal the
                most effective and efficient way!
              </p>
            </div>
            <button className="absolute left-1/2 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
              Contact Us
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
