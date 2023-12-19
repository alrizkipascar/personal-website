export default function HoverCard({ data }) {
  return (
    <div className="relative group w-full h-full  overflow-hidden">
      <img
        alt=""
        className="absolute object-fill object-center w-full h-full transform duration-1000 backdrop-opacity-100"
        src={
          data?.mainImage ??
          "https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      {/* <video
        className="absolute object-fill object-center w-full h-full transform duration-1000 backdrop-opacity-100"
        loop
        autoPlay
        muted
      >
        <source src="/car.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-200  group-hover:opacity-100"></div>
      {/* <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-full group-hover:-inset-y-0"> */}
      <div className="absolute bg-black w-full h-full transform duration-200 opacity-0 group-hover:opacity-100">
        <div className="absolute w-full flex place-content-center">
          <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
            {data?.title ?? "Team work"}
          </p>
        </div>
        <div className="absolute w-full flex place-content-center mt-20">
          <p className="font-sans text-center w-4/5 text-white mt-5">
            {data?.shortDesct ??
              "Collaborative effort of a group to achieve a common goal the most effective and efficient way!"}
          </p>
        </div>
        {/* <button className="absolute left-1/2 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
          Contact Us
        </button> */}
      </div>
    </div>
  );
}
