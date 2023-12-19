export default function PhotoGrid({ data, setShowModal }) {
  return (
    <button
      onClick={() =>
        setShowModal({
          modal: true,
          data: data,

          type: "image",
        })
      }
      className="w-[275px] h-[400px] grid justify-self-center"
    >
      <div className=" w-full h-full row-span-2 overflow-hidden">
        <img
          src={data?.url}
          alt={"project"}
          loading="auto"
          className="w-full h-full  transform duration-700  hover:scale-105 object-scale-down"
        ></img>
      </div>{" "}
    </button>
  );
}
