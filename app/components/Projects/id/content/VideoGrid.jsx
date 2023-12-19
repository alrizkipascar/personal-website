export default function VideoGrid({ data, setShowModal }) {
  return (
    <button
      onClick={() =>
        setShowModal({
          modal: true,
          data: data,
          type: "video",
        })
      }
      className="w-[275px] h-[400px] grid justify-self-center"
    >
      <div className=" w-full h-full row-span-2 overflow-hidden">
        <video
          // src={data}
          // alt={"project"}

          onPause
          className="w-full h-full  transform duration-700  hover:scale-105 object-scale-down"
        >
          <source src={data ?? "/car.mp4"} type="video/mp4" />
        </video>
        {/* <video className="w-full h-full" loop autoPlay muted>
    </video> */}
      </div>{" "}
    </button>
  );
}
