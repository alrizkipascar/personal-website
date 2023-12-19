import { Link, useLoaderData } from "@remix-run/react";
import { getProjectOverview } from "../sanity/sanity-utils";
import { json } from "@remix-run/node";

export const loader = async ({ params }) => {
  const projectId = params.id;
  const ProjectOverview = await getProjectOverview(params?.id, "public");
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
  return json({ projectId, ProjectOverview, noteListItems });
};
export default function ProjectOverview() {
  const data = useLoaderData();
  console.log(data);
  const Overview = data?.ProjectOverview;
  return (
    <article>
      <section>
        <div className="section-title mb-8">
          <h2>Overview</h2>
        </div>

        {/* <section>
          <div className="content-divider">
            <h2>Problem Solved</h2>
          </div>
          <p className="paragraph-service">
            {Overview?.problem ??
              "Lorem minim nulla amet Lorem ad quis in fugiat. Fugiat Lorem velit nostrud fugiat tempor. Dolore laborum dolore nulla ipsum ad officia dolore. Id incididunt do dolor pariatur."}
          </p>
        </section> */}
        <section>
          <div className="content-divider">
            <h2>Solved Problem</h2>
          </div>{" "}
          <p className="paragraph-service">
            {Overview?.problem ??
              "Lorem minim nulla amet Lorem ad quis in fugiat. Fugiat Lorem velit nostrud fugiat tempor. Dolore laborum dolore nulla ipsum ad officia dolore. Id incididunt do dolor pariatur."}
          </p>
        </section>
        <section>
          <div className="content-divider">
            <h2>Color</h2>
          </div>
          {/* <div key={i} className="infra-place">
                    <span className="infra-place-imgholder">
                      <img
                        className="infra-place-image "
                        src={data?.icon ?? ""}
                        alt={data?.iconAlt ?? ""}
                      />
                    </span>
                    <span className="infra-place-name">{data?.name ?? ""}</span>
                  </div> */}
          <div className="paragraph-service grid-service">
            {Overview?.projectColor?.map((element, index) => (
              <div
                key={index}
                style={{
                  color: element?.textcolor,
                  backgroundColor: element?.color,
                }}
                className="color-place"
              >
                <p>{element?.color ?? "None"}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="content-divider">
            <h2>Font</h2>
          </div>
          {Overview?.font?.map((element, index) => (
            <li key={index} className="paragraph-service list-item">
              {element}
            </li>
          ))}
        </section>
      </section>
    </article>
  );
}
