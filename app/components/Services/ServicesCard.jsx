import { Link } from "@remix-run/react";

export default function ServicesCard({ Services }) {
  return (
    <section className="h1-hero grid lg:grid-cols-3 gap-3 pb-[100px] h-auto">
      {" "}
      {Services?.map((element, index) => (
        <div
          key={index}
          title={element?.title ?? "Landing"}
          className="w-full h-auto bg-slate-100 text-black shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl"
        >
          <Link to={element?.slug} className="grid grid-cols-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1-"
              stroke="currentColor"
              className="w-1/2 h-1/2 lg:w-full lg:h-full col-span-1 flex justify-self-center self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={element?.svg}
              />
            </svg>

            <div className="px-4 py-3 w-full col-span-3">
              {/* <span className="text-primary mr-3 uppercase text-xs"> Brand </span> */}
              <p className="text-xl lg:text-2xl font-bold text-textWhite truncate block capitalize">
                {element?.title ?? "Landing"}
              </p>
              <div className="flex items-center text-lg lg:text-xl">
                {element?.shortDesc}
              </div>
            </div>
          </Link>
        </div>
      ))}
      {/* <div
        title="This is your tooltip"
        className="w-full  bg-slate-400 text-black shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl"
      >
        <a href="#" className="grid grid-cols-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-full h-full col-span-1 flex justify-self-center self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>

          <div className="px-4 py-3 w-full col-span-3">
           
            <p className="text-2xl font-bold text-textWhite truncate block capitalize">
              Landing Page
            </p>
            <div className="flex items-center text-xl">
              Every company or business need establish their presence, let me
              help you build that presence into company profile on website.
            </div>
          </div>
        </a>
      </div>
      <div className="w-full bg-slate-400 text-black shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#" className="grid grid-cols-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-full h-full col-span-1 flex justify-self-center self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <div className="px-4 py-3 w-full col-span-3">
            <p className="text-lg font-bold text-textWhite truncate block capitalize">
              Landing Page
            </p>
            <div className="flex items-center">
              Every company or business need establish their presence, let me
              help you build that presence into company profile on website.
            </div>
          </div>
        </a>
      </div>
      <div className="w-full  bg-slate-400 text-black shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#" className="grid grid-cols-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full h-full col-span-1 flex justify-self-center self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>

          <div className="px-4 py-3 w-full col-span-3">
            <p className="text-lg font-bold text-textWhite truncate block capitalize">
              Landing Page
            </p>
            <div className="flex items-center">
              Every company or business need establish their presence, let me
              help you build that presence into company profile on website.
            </div>
          </div>
        </a>
      </div> */}
    </section>
  );
}
