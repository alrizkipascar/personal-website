export default function ProjectCardImage({ data }) {
  return (
    <div className="main-container">
      <div className="video-container">
        {/* <video muted loop src={data?.videoURL ?? "car.mp4"}></video> */}
        <img
          alt="lol"
          className="w-full h-full bg-cover"
          src={
            data?.mainImage ??
            "https://images.unsplash.com/profile-1676320214445-e3fec6f7b87cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
          }
        />
        {/* Hover to play video</div> */}
      </div>
      {/* <div className="video-description flex-row">
            <div className="flex gap-1 items-center ">
              <div
                className={`rounded-full w-2 h-2 
                       
                        `}
                style={{
                  backgroundColor: "black",
                }}
              ></div>
              <p>Title 1</p>
            </div>
            <div className="flex  gap-1 items-center ">
              <div
                className={`rounded-full w-2 h-2 
                       
                        `}
                style={{
                  backgroundColor: "black",
                }}
              ></div>
              <div>{"tags"}</div>
            </div>
          </div> */}
    </div>
  );
}
