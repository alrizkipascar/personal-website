import { json } from "@remix-run/node";
import ProjectSection from "~/components/Home/ProjectSection";
import ServiceSection from "~/components/Home/ServiceSection";
import BlogSection from "~/components/Home/BlogSection";

import MainHero from "~/components/Home/MainHero";
import { useLoaderData } from "@remix-run/react";
import {
  getDashboardBlog,
  getDashboardProject,
  getServices,
} from "../sanity/sanity-utils";
import AboutUs from "../components/Home/AboutSection";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader = async () => {
  // const ProjectId = params.id;
  const Blogs = await getDashboardBlog("public");
  const Projects = await getDashboardProject("public");
  const Services = await getServices("public");

  return json({ Blogs, Projects, Services });
};
export default function Index() {
  const { Blogs, Projects, Services } = useLoaderData();
  console.log("data", Blogs, Projects, Services);

  return (
    <section style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {/* <FAQ /> */}
      <section>
        {" "}
        <MainHero />
      </section>
      <section>
        <ProjectSection data={Projects} />
      </section>
      <section>
        <ServiceSection data={Services} />
      </section>
      <section>
        <BlogSection data={Blogs} />
      </section>
      <AboutUs />
      {/* <div className="we-are-block">
        <div id="about-us-section">
          <div className="about-us-image">
            <img
              src="https://digitalupgrade.com/images/lobbyimage_1.jpg"
              width="808"
              height="458"
              alt="Lobby Image"
            />
          </div>

          <div class="about-us-info">
            <h2>We are Digital Upgrade</h2>

            <p>
              Digital Upgrade, located in Evansville, IN, makes it easy for
              businesses to create and manage their digital presence and
              logistics, meaning we can make your business more efficient and
              profitable! We believe in our community and want to help our local
              business economy grow and expand. We believe in our clients, and
              want to assist in their digital success. The D-UP team grades
              ourselves on outcomes, not on sales.
            </p>

            <a className="about-button" href="#" title="About Us Button">
              ABOUT US
            </a>
          </div>
        </div>

        <div id="history-section">
          <div className="history-image">
            <img
              src="https://digitalupgrade.com/images/building_pic.jpg"
              width="951"
              height="471"
              alt="Building Pic"
            />
          </div>

          <div className="history-info">
            <h2>Preserving Local History</h2>

            <p>
              In 2018, technology companies, Desktop Doctors & Digital Upgrade
              found a new place to call home, at 816 N. 9th Ave. Since the
              takeover of the 118-year-old building (formally Stippler Tool &
              Supply and Crown Chair Company), there have been many renovations
              completed to preserve this local piece of Evansville, IN history.
            </p>

            <a className="about-button" href="#" title="History Button">
              HISTORY
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}
