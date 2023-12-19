export default function HireMe({ Services }) {
  return (
    <section className="h1-hero  pb-[100px] h-auto">
      <h2 className="section-title text-textWhite mt-20 mb-10 text-[40px] lg:text-[60px]">
        Hire Me At
      </h2>

      <a
        href="https://www.upwork.com/freelancers/~0193378a54ca557817"
        className="grid lg:grid-cols-3 gap-3"
        target="_blank"
        rel="noreferrer"
      >
        <div
          title={"Upwork"}
          className="w-full h-auto bg-slate-100 text-black shadow-md rounded-lg  hover:shadow-xl"
        >
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1-"
              stroke="currentColor"
              className="w-full h-full col-span-1 flex justify-self-center self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={""}
              />
            </svg> */}

          <div className="px-4 py-3 w-full col-span-3">
            {/* <span className="text-primary mr-3 uppercase text-xs"> Brand </span> */}
            <p className="text-2xl font-bold text-textWhite truncate block capitalize">
              {"Upwrok"}
            </p>
            <div className="flex items-center text-xl">
              {"Upwork is one of freelance website with secure payment method."}
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
