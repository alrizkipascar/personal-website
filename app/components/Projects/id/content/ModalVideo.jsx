import { useState } from "react";

export default function ModalVideo({ data, showModal, setShowModal }) {
  const [cssModal, setCssModal] = useState(
    "opacity-0 transition-all ease-out duration-1000"
    // "translate-x-full transition-all ease-out duration-1000  "
  );

  const ModalOut = "opacity-100 transition-all ease-out duration-1000";
  // "translate-x-2/4 transition-all ease-out duration-1000 ";
  if (showModal?.modal != true || null) {
    setTimeout(() => {
      setCssModal(ModalOut);
    }, 100);
  }
  return (
    <>
      {showModal ? (
        <div
          onClick={() => setShowModal({ modal: false, data: null })}
          className="bg-black bg-opacity-70 overflow-y-auto  fixed inset-0 z-50 w-full h-full"
        >
          <div
            className={`${cssModal} bg-black border h-auto shadow md:w-3/4 mx-auto lg:w-4/5`}
          >
            <div className="h-auto border-b-2 mb-10 border-white flex  items-center justify-start  border-solid border-blueGray-200 rounded-b">
              <button
                className="text-white  text-2xl background-transparent font-bold uppercase px-6 py-2  outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal({ modal: false, data: null })}
              >
                {"<"}
              </button>
            </div>
            <div className=" w-full h-auto row-span-2 overflow-hidden">
              <video
                // src={data}
                // alt={"project"}
                controls
                className="w-full h-full  "
              >
                <source src={data ?? "/car.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
