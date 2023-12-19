export default function MainHero() {
  return (
    <section className="h-3/4 mt-[100px] md:mt-[200px] md:pt-[175px] page-center">
      {/* <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"> */}
      {/* <div className="mr-auto place-self-center lg:col-span-7"> */}
      {/* dark:text-[#0a090b] */}
      <h1 className="introText text-center max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
        Hey My Name is Alrizki
      </h1>
      <h1
        className="
        text-center max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl "
      >
        Software Developer
      </h1>
      {/* <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        I .
      </p> */}
      {/* <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        Get started
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a> */}
      <button
        href={`#`}
        className="button-fillup fill flex items-center"
        type="button"
      >
        Learn More
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
      {/* </div> */}
      {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div> */}
      {/* </div> */}
    </section>
  );
}
