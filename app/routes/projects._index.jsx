// import ProjectCard from "~/components/Home/ProjectSection/ProjectCard";
// import BigLeft from "~/components/Projects/BigLeft";
// import TripleGrid from "~/components/Projects/TripleGrid";
// import BigRight from "~/components/Projects/BigRight";
import { json } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import { getProjects } from "../sanity/sanity-utils";
import Card from "../components/Projects/Card";

export const loader = async ({ params }) => {
  const ProjectId = params.id;
  const Projects = await getProjects("public");

  const noteListItems = [
    {
      id: "overview",
      title: "Overview",
    },
    {
      id: "approach",
      title: "Development Approach",
    },
    {
      id: "gallery",
      title: "Gallery",
    },
  ];
  return json({ ProjectId, Projects, noteListItems });
};

export const meta = ({ data }) => {
  return [
    { title: "Alrizki Pasca | Projects" },
    {
      property: "og:title",
      content: "Alrizki Pasca | Projects",
    },
    {
      name: "description",
      content:
        "All of the projects by Alrizki that considered 'serious' projects.",
    },
  ];
};

export default function Projects() {
  const location = useLocation();
  const data = useLoaderData();
  console.log("location", data);
  return (
    <section className="section-structure">
      <h1 className="dashboard-title-section fromCenter text-textWhite  mt-20 mb-10 ml-6 lg:ml-20 text-[30px] lg:text-[60px]">
        All Projects
      </h1>
      {/* <ProjectCard />
          <ProjectCard /> */}
      <div className="grid lg:grid-cols-2 gap-5 pt-10">
        {data?.Projects?.map((element, index) => (
          <Card key={index} data={element} />
        ))}
        {/* <BigLeft />
        <TripleGrid />
        <BigRight />
        <TripleGrid /> */}
      </div>
      {/* <BigLeft /> */}
      {/* <div className="grid grid-flow-row lg:grid-cols-2 gap-5 md:items-center h-full pb-10">
         
          <BigLeft />
          <BigLeft />
        </div> */}
      <div className="grid grid-flow-row lg:grid-cols-2 gap-5 md:items-center h-full pb-10">
        {/* <BigLeft /> */}
        {/* <BigLeft /> */}
      </div>
    </section>
  );
}
