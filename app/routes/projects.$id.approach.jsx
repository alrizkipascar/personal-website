import { Link, useLoaderData, useRouteError } from "@remix-run/react";
import { getProjectDevelopment } from "../sanity/sanity-utils";
import { json } from "@remix-run/node";

export const loader = async ({ params }) => {
  const projectId = params.id;
  let ProjectDev = await getProjectDevelopment(params?.id, "public").catch(
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
  const groups = {};
  let result;
  if (ProjectDev) {
    function groupBy(arr, property) {
      return arr.reduce(function (memo, x) {
        if (!memo[x[property]]) {
          memo[x[property]] = [];
        }
        memo[x[property]].push(x);
        return memo;
      }, {});
    }
    result = groupBy(ProjectDev?.tools, "position");

    ProjectDev?.tools.forEach((employee) => {
      const { position } = employee;
      if (!groups[position]) {
        groups[position] = [];
      }
      groups[position].push(employee);
    });
  }

  const obj = groups;
  return json({ projectId, ProjectDev, result, obj });
};

export default function ProjectStack() {
  const { ProjectDev, result, obj } = useLoaderData();
  // if (ProjectDev) {
  //   const result = Object.groupBy(ProjectDev, ({ position }) => position);
  // }

  // ProjectDev?.tools.groupBy(
  //   ProjectDev?.tools,
  //   ({ position }) => position
  // );
  // console.log(obj);

  // console.log(Object.keys(obj));
  return (
    <article>
      <section>
        <div className="section-title">
          <h2>Approach</h2>
        </div>
        <p className="paragraph-service">
          {ProjectDev?.description ??
            "Lorem minim nulla amet Lorem ad quis in fugiat. Fugiat Lorem velit nostrud fugiat tempor. Dolore laborum dolore nulla ipsum ad officia dolore. Id incididunt do dolor pariatur."}
        </p>
        <section>
          <div className="content-divider">
            <h2>Stack</h2>
          </div>
          {Object.keys(obj)?.map((element, index) => (
            <section key={index}>
              <div className="title-infra capitalize">
                <h2>{element ?? "Background"}</h2>
              </div>
              <div className="paragraph-service grid-service">
                {obj[element]?.map((data, i) => (
                  <div key={i} className="infra-place">
                    <span className="infra-place-imgholder">
                      <img
                        className="infra-place-image "
                        src={data?.icon ?? ""}
                        alt={data?.iconAlt ?? ""}
                      />
                    </span>
                    <span className="infra-place-name">{data?.name ?? ""}</span>
                  </div>
                ))}
                {/* {element?.description ??
                "Lorem minim nulla amet Lorem ad quis in fugiat. Fugiat Lorem velit nostrud fugiat tempor. Dolore laborum dolore nulla ipsum ad officia dolore. Id incididunt do dolor pariatur."} */}
              </div>
            </section>
          )) ?? null}
        </section>
        {/* <section>
          <div className="content-divider">
            <h2>Library Used</h2>
          </div>
          Overview create a new note.
        </section> */}
      </section>
    </article>
  );
}
