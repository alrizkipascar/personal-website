import { json } from "@remix-run/node";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useLocation,
  useParams,
  useRouteError,
} from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import Top from "../components/Projects/id/Top";
import { getProject } from "../sanity/sanity-utils";

export const loader = async ({ params }) => {
  const projectId = params.id;
  const projectTop = await getProject(params?.id, "public").catch((_) => []);
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
  return json({ projectId, projectTop, noteListItems });
};

export const meta = ({ data }) => {
  return [
    { title: data?.projectTop?.title ?? "No project found" },
    {
      property: "og:title",
      content: data?.projectTop?.title ?? "No project found",
    },
    { name: "description", content: data?.shortDesc ?? "No project found" },
  ];
};

export default function ProjectId() {
  const data = useLoaderData();
  const location = useLocation();
  const pathname = location?.pathname;
  if (data?.projectTop == []) {
    return <p>No data found</p>;
  }
  return (
    // <AnimatePresence>
    <article className="section-structure w-full project-base ">
      <h1 className="text-[40px] lg:text-[100px]">
        Project {data?.projectTop?.title ?? "No project found"}
      </h1>
      <main className="flex-row h-full ">
        <div className="h-auto w-full  ">
          <Top data={data?.projectTop ?? []} />
          <ol className="flex w-full  gap-4 mt-[20px] justify-center ">
            {data.noteListItems.map((note) => (
              <li key={note.id}>
                <NavLink
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-black" : "text-black"
                    } relative w-full h-full text-xl rounded-full lg:px-3 lg:py-3  `
                  }
                  to={note.id}
                >
                  {pathname.includes(note.id) ? (
                    <motion.div
                      layoutId="bg-projects-state"
                      className={`absolute inset-0 rounded-full bg-white
                          `}
                      transition={{ type: "spring", duration: 1 }}
                    ></motion.div>
                  ) : null}
                  <span className="relative">{note.title}</span>
                </NavLink>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex-1 ">
          <Outlet />
        </div>
      </main>
    </article>
    // </AnimatePresence>
  );
}
