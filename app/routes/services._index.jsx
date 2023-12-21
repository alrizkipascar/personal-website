import { json } from "@remix-run/node";
import MainHero from "../components/Services/MainHero";
import ServicesCard from "../components/Services/ServicesCard";
// import ServicesOverview from "../components/Services/ServicesOverview";
import FAQ from "~/components/Home/Faq";
import { getServices } from "../sanity/sanity-utils";
import { useLoaderData } from "@remix-run/react";
import HireMe from "../components/Services/HireMe";

// import {  } from "react";
export const meta = () => {
  return [
    { title: "About Alrizki" },
    { name: "description", content: "About Alrizki Pasca" },
  ];
};

// export const links = () => [
//   { rel: "stylesheet", href: services },
//   { rel: "stylesheet", href: tailwindstyle },
//   ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
// ];
export const loader = async ({ params }) => {
  const serviceId = params.id;
  const Services = await getServices("public");

  return json({ serviceId, Services });
};
export default function Services() {
  const data = useLoaderData();
  return (
    <section className="section-structure pt-[200px] lg:pt-0">
      {" "}
      <MainHero />
      <h2 className="section-title text-textWhite  mt-20 mb-10  text-[40px] lg:text-[60px]">
        Available Service
      </h2>
      <ServicesCard Services={data?.Services ?? null} />
      <h2 className="section-title text-textWhite  mt-20 mb-10  text-[40px] lg:text-[60px]">
        Standard Benefit
      </h2>
      <div className="w-full md:w-full px-4 ">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 px-4">
            <div className="relative flex flex-col mt-4">
              <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h6 className="text-xl mb-1 font-semibold">{"Fast Website"}</h6>
                <p className="mb-4 text-blueGray-500">
                  {"I promise you fast website if you bought my services"}
                </p>
              </div>
            </div>
            <div className="relative flex flex-col min-w-0">
              <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                    />
                  </svg>
                </div>
                <h6 className="text-xl mb-1 font-semibold">
                  {"Engaging Visuals"}
                </h6>
                <p className="mb-4 text-blueGray-500">
                  {
                    "I will gives your website the best practice and well made visuals for your company."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 mt-4">
              <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                    />
                  </svg>
                </div>
                <h6 className="text-xl mb-1 font-semibold">
                  {"The source code & documentation"}
                </h6>
                <p className="mb-4 text-blueGray-500">
                  {
                    "I will give the source code & the documentation for you, I will give you detailed documentation for your future programmer."
                  }
                </p>
              </div>
            </div>
            <div className="relative flex flex-col min-w-0">
              <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <h6 className="text-xl mb-1 font-semibold">
                  {"Friendly Phone Display"}
                </h6>
                <p className="mb-4 text-blueGray-500">
                  {
                    "It should be standard for a website at this point for having display for a mobile, because a lot of user or visitor often use phone to check on your business."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HireMe />
      {/* <FAQ /> */}
      {/* <ServicesOverview /> */}
      {/* <a
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
      </a> */}
    </section>
  );
}
