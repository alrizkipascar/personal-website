import { Link } from "@remix-run/react";

const MainImage = ({ data }) => {
  return (
    <img
      alt=""
      className="absolute object-fill object-center w-full h-full"
      src={
        data?.mainImage ??
        "https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    />
  );
};

const MainVideo = ({ data }) => {
  return (
    <video className="w-full h-full" loop autoPlay muted>
      <source src={data?.videoURL ?? "/car.mp4"} type="video/mp4" />
    </video>
  );
};

const ContentType = {
  video: MainVideo,
  image: MainImage,
};

export default function Top({ data }) {
  const CurrentContent = ContentType[data?.contentType];

  return (
    <div className="flex flex-wrap ">
      <section className="lg:w-[50%] lg:h-1/2">
        <CurrentContent data={data} />
      </section>
      <section className="lg:w-[50%]  lg:h-1/2 ">
        <div className="lg:ml-[40px]">
          <div>
            <h2 className="top-h2 ">{"Short Description"}</h2>
            <a
              href={data?.link ?? "#"}
              className="flex top-link dashboard-title-section fromLeft"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Web
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-[10px] h-[10px] lg:w-[30px] lg:h-[30px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
          <section className="paragraph-service">{data?.shortDesc}</section>
        </div>
      </section>
    </div>
  );
}
