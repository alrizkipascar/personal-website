import BlogCard from "./BlogSection/BlogCard";
export default function BlogSection({ data }) {
  return (
    <section className="section-structure ">
      <h2 className="dashboard-title-section fromCenter text-textWhite  mt-20 mb-10 ml-6 lg:ml-20 text-[30px] lg:text-[60px]">
        Latest Blog
      </h2>
      <div className="grid mt-[40px] pb-10 lg:pb-[100px] lg:grid-cols-3 gap-3 justify-items-center h-full">
        {data?.map((element, index) => (
          <BlogCard data={element} key={index} />
        ))}
        {/* <BlogCard />
        <BlogCard />
        <BlogCard /> */}

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
