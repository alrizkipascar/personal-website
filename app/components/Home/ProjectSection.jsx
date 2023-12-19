import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectSection/ProjectCard";
import { Link } from "@remix-run/react";
export default function ProjectSection({ data }) {
  const ref = useRef(null);
  useEffect(() => {
    // setTimeout(() => {
    //   ref.current.click();
    //   ref.current.click();
    // }, 200); //miliseconds

    // const section = document.querySelectorAll(".section-pad section");
    // section.addEventListener("mouseenter",)

    const video = document.querySelectorAll(".video-container video");
    // const hoverText = document.querySelectorAll(".video-container ");
    // .hover-text
    for (let i = 0; i < video.length; i++) {
      ref.current.click();
      video[i].addEventListener("mouseenter", () => {
        video[i].play();
        // hoverText[i].classList.remove("active");
      });

      video[i].addEventListener("mouseleave", () => {
        video[i].pause();
        video[i].currentTime = "0";
        // hoverText[i].classList.add("active");
      });
    }
  }, []);
  // if (typeof document !== "undefined") {

  // }
  if (typeof document == "undefined") {
    return <p>loading...</p>;
  }
  return (
    <section ref={ref} className="section-pad section mt-[100px]">
      <Link
        to="/projects"
        className="dashboard-title-section fromCenter text-textWhite  mt-20 mb-10 ml-6 lg:ml-20 text-[30px] lg:text-[60px]"
      >
        Latest Projects
      </Link>
      <div className="grid lg:grid-cols-2 gap-5 md:items-center h-full pb-10">
        {/* <ProjectCard />
        <ProjectCard /> */}
        {data?.map((element, index) => (
          <ProjectCard data={element} key={index} />
        ))}
        {/* <div className="main-container">
          <div className="video-container">
            <video src="car.mp4"></video>
            <img
              alt="lol"
              className="hover-text active bg-cover"
              src="https://images.unsplash.com/profile-1676320214445-e3fec6f7b87cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            />
          </div>
          <div className="video-description">
            Experience the graceful elegance of supercars in slow motion as they
            glide like works of art on wheels.
          </div>
        </div> */}
      </div>
    </section>
  );
}
