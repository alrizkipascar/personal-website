import about from "../styles/about.css";

// export const links = () => [
//   { rel: "stylesheet", href: about },
//   // { rel: "stylesheet", href: tailwindstyle },
//   // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
// ];

export default function About() {
  const aboutContent = [];
  // await getAbout();
  return (
    <section className="section-structure pt-[200px] lg:pt-[200px]">
      <section className="snap-start h-auto  lg:h-screen bg-babyBlue shrink-0 min-w-full flex  flex-col items-center justify-between pb-6">
        <div className="grid grid-cols-1 gap-[40px] lg:grid-cols-2 h-auto w-3/4 lg:w-[1000px] lg:h-[700px] transition-all duration-300">
          <div className="rounded-2xl">
            <img
              src="https://alrizkipersonal.s3.ap-southeast-3.amazonaws.com/IMG_2229.jpeg"
              alt="about"
              loading="lazy"
              className="w-full h-full  object-cover sm:rounded-2xl transition-all duration-300"
            ></img>
          </div>
          <div className=" flex-1 gap-4 w-full lg:w-full h-full transition-all duration-300">
            <h1
              className={` text-left w-full h-auto text-[35px] lg:text-[65px] text-slate-600 transition-all duration-300`}
            >
              About Me
            </h1>
            <div className="text-justify h-auto ">
              <p className="text-[15px] lg:text-[20px] text-slate-800">
                My name is Alrizki Pasca Ramadhani, I am a software developer
                from Indonesia, my current activity is learning a LOT of SEO,
                web design for company, and aws services like s3 bucket and EC2,
                because I wanted to build some projects on aws.
              </p>
              <p className="text-[15px] lg:text-[20px] text-slate-800">
                Other than that I looking for a potential client that might be
                need some help with building their online presence, especially
                with company landing pages.
              </p>
            </div>
          </div>
        </div>
      </section>
      <h2 className="section-title text-textWhite  mt-20 mb-10  text-[40px] lg:text-[60px]">
        Current Stack
      </h2>
      <li className="paragraph-service list-item">
        Wordpress and Sanity for CMS.
      </li>
      <li className="paragraph-service list-item">
        React, Next JS, Remix js for Frontend.
      </li>
      <li className="paragraph-service list-item">
        Vercel, Hostinger, Firebase, for hosting,server,etc.
      </li>
      <li className="paragraph-service list-item">
        Php and Node JS for Backend.
      </li>
      <li className="paragraph-service list-item">
        Python for AI hobby projects with tensorflow and pytorch.
      </li>
      <li className="paragraph-service list-item">SQL,Postgre for database</li>

      <h2 className="section-title text-textWhite  mt-20 mb-10  text-[40px] lg:text-[60px]">
        Current tech that I explore
      </h2>
      <li className="paragraph-service list-item">AWS services</li>
      <li className="paragraph-service list-item">Golang</li>
      <li className="paragraph-service list-item">Vue js and Solid JS</li>
      <li className="paragraph-service list-item">
        Wordpress (diving into the ecosystem like woocomers.)
      </li>
      <li className="paragraph-service list-item">
        Postgre (diving into rule and concurrency? or something like that)
      </li>
      <h2 className="section-title text-textWhite  mt-20 mb-10  text-[40px] lg:text-[60px]">
        What I don't like:
      </h2>
      <li className="paragraph-service list-item">Framework cult behavior</li>
      <p className="text-[15px] lg:text-[20px] text-slate-800 mb-6">
        I am going to be honest, most of the time there is people that whining
        about this "X" tech because their framework is good (in their mind), are
        the most closed minded people I've ever seen, because most of the time I
        see they never touch other language or framework, I think they are just
        scared to learn a new thing, other than that yapping some nonsense
        online is just their hobby I guess.
      </p>
      <li className="paragraph-service list-item">
        A company that limit their employee to learn something new.
      </li>
      <li className="paragraph-service list-item">
        Some funny question at interview
      </li>
      <p className="text-[15px] lg:text-[20px] text-slate-800 mb-6">
        I experiencing some funny stuff at interview a few months ago that made
        me questioning myself like "Do I really want to work with these guy and
        girl?", "Should I be a freelancer?", or "are they really serious don't
        understand the stack I explained?", before you jump to conclusion they
        test me with that question, like NAH, they don't understand at all and
        that company is tech company, like let's be for real.
      </p>
      <li className="paragraph-service list-item">Remix js lol.</li>
      {/* <div className="w-full md:w-6/12 px-4 lg:mr-auto">
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
                <h6 className="text-xl mb-1 font-semibold">
                  {aboutContent?.contenTitle1 ?? "none"}
                </h6>
                <p className="mb-4 text-blueGray-500">
                  {aboutContent?.content1 ?? "none"}
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
                  {aboutContent?.contenTitle3 ?? "none"}
                </h6>
                <p className="mb-4 text-blueGray-500">
                  {aboutContent?.content3 ?? "none"}
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
                  {aboutContent?.contenTitle2 ?? "none"}
                </h6>
                <p className="mb-4 text-blueGray-500">
                  {aboutContent?.content2 ?? "none"}
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
                  {aboutContent?.contenTitle4 ?? "none"}
                </h6>
                <p className="mb-4 text-blueGray-500">
                  {aboutContent?.content4 ?? "none"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
