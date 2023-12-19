import { Link, useLoaderData } from "@remix-run/react";
import Empty from "../components/Error/Empty";
import { getProjectGallery } from "../sanity/sanity-utils";
import { json } from "@remix-run/node";
import PhotoGrid from "../components/Projects/id/content/PhotoGrid";
import ModalImage from "../components/Projects/id/content/ModalImage";
import { useState } from "react";
import VideoGrid from "../components/Projects/id/content/VideoGrid";
import ModalVideo from "../components/Projects/id/content/ModalVideo";

export const loader = async ({ params }) => {
  const projectId = params.id;
  let ProjectGallery = await getProjectGallery(params?.id, "public").catch(
    (_) => []
  );

  // try {
  //   ProjectDev = await getProjectDevelopment(params?.id, "public").catch(_ => []);;

  //   console.log(ProjectDev);
  //   // business logic goes here
  // } catch (error) {
  //   ProjectDev = [];
  //   console.error(error); // from creation or business logic
  // }

  // const groups = {};
  // let result;
  // if (ProjectDev) {
  //   function groupBy(arr, property) {
  //     return arr.reduce(function (memo, x) {
  //       if (!memo[x[property]]) {
  //         memo[x[property]] = [];
  //       }
  //       memo[x[property]].push(x);
  //       return memo;
  //     }, {});
  //   }
  //   result = groupBy(ProjectDev?.tools, "position");

  //   ProjectDev?.tools.forEach((employee) => {
  //     const { position } = employee;
  //     if (!groups[position]) {
  //       groups[position] = [];
  //     }
  //     groups[position].push(employee);
  //   });
  // }

  // const obj = groups;
  return json({ projectId, ProjectGallery });
};

export default function ProjectOverview() {
  const [showModal, setShowModal] = useState({});

  const Modals = ({ dataBarang, showModal, type, setShowModal }) => {
    // setTimeout(() => {
    if (type == "image") {
      return (
        <ModalImage
          data={dataBarang}
          showModal={showModal}
          setShowModal={setShowModal}
        ></ModalImage>
      );
    }
    if (type == "video") {
      return (
        <ModalVideo
          data={dataBarang}
          showModal={showModal}
          setShowModal={setShowModal}
        ></ModalVideo>
      );
    }

    // });
  };
  const { projectId, ProjectGallery } = useLoaderData();
  console.log(ProjectGallery);
  if (
    (ProjectGallery?.imagesGallery == null) &
    (ProjectGallery?.videoGallery == null)
  ) {
    return (
      <article>
        <section>
          <div className="section-title">
            <h2>Gallery Empty</h2>
          </div>
          <Empty />
        </section>
      </article>
    );
  }
  return (
    <article>
      <Modals
        dataBarang={showModal["data"]}
        showModal={showModal["modal"]}
        type={showModal["type"]}
        setShowModal={setShowModal}
      ></Modals>
      <section>
        <div className="section-title">
          <h2>Gallery</h2>
        </div>
        <div className="content-divider">
          <h2>Images</h2>
        </div>
        <div className="grid grid-cols-1 pt-6 md:grid-cols-4 w-full h-full gap-3 border-t-2 border-secondary">
          {ProjectGallery?.imagesGallery?.map((index, i) => {
            return (
              <PhotoGrid data={index} setShowModal={setShowModal} key={i} />
            );
          })}
        </div>
        <div className="content-divider">
          <h2>Videos</h2>
        </div>
        <div className="grid grid-cols-1 pt-6 md:grid-cols-4 w-full h-full gap-3 border-t-2 border-secondary">
          {ProjectGallery?.videoGallery?.map((index, i) => {
            return (
              <VideoGrid data={index} setShowModal={setShowModal} key={i} />
            );
          })}
        </div>
      </section>
    </article>
  );
}
