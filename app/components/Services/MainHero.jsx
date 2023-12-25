export default function MainHero() {
  function mylinkfunction(e) {
    window.location.href = "#Footer";

    /* need to stop the form sending of the form

     UPDATE as comment: This may not be exactly correct syntax 
     for stopping a form , look up preventing form submission */

    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <section className="h1-hero section-pad flex flex-wrap md:items-center h-auto lg:h-[750px] pb-10">
      <div className=" w-full md:w-1/2 h-[50%] lg:h-[100%]">
        <div className="px-6 lg:px-[20px] h-[100%]  text-center grid content-center">
          <img
            src="https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="What do I do"
            className="bg-white rounded-2xl w-full h-full lg:h-auto lg:w-auto whitespace-pre-wrap   "
          ></img>
        </div>
      </div>
      <div className="bg-background w-full md:w-1/2 h-[50%] md:h-full  lg:grid lg:content-center">
        <div className="mx-2 lg:mx-8 ">
          <h2 className=" text-center text-3xl lg:text-[50px] font-semibold leading-relaxed">
            What do I build for you?
          </h2>

          {/* <!-- country region island --> */}
          <div className="grid grid-cols-3 gap-3 mb-5 font-light justify-center text-gray-500">
            <div className="hovertext-container w-full">
              <p className="hovertext-p1 w-full text-center">Landing Page</p>
              <p className="hovertext-p2 w-full text-center">Modern</p>
            </div>

            <div className="hovertext-container text-center ">
              <p className="hovertext-p1 w-full text-center">Redesign</p>
              <p className="hovertext-p2 w-full text-center">Web</p>
            </div>

            <div className="hovertext-container  ">
              <p className="hovertext-p1 w-full text-center ">CMS</p>
              <p className="hovertext-p2 w-full text-center">Tools</p>
            </div>
          </div>
          {/* 
        <!-- description --> */}
          <p className="description w-full font-sans text-base font-normal leading-relaxed text-primary antialiased text-[17px] lg:text-[20px]">
            With me let's unlock the full potential of your online presence with
            my modern website development services.
          </p>
          <div className="grid  justify-center mt-[30px]">
            <button
              onClick={mylinkfunction}
              className="button-fillup md:w-[200px] h-[50px] fill flex items-center"
              type="button"
            >
              Build your Website Now!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
