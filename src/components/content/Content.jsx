import "../../styles/_header.scss";

function Content() {
  return (
    <>
      <div className="flex flex-col ml-10 header courier-normal-600">
        <div>
          <h1 className="pal2 w-auto mt-8">La Tapera Invisible </h1>
        </div>
        <div>
          <p className="text-xs md:text-2xl lg:text-4xl pal3">The never-ending, redundant and cyclic, recursive buggy code</p>
        </div>
      </div>
      <div className="content">
        <h1 className="pal2 text-2xl font-bold">La tapera invisible</h1>
        <p className="pal3 mt-7 font-semibold">
          El eterno, redundante y cíclico, código recursivo defectuoso.
        </p>
      </div>
    </>
  );
}

export default Content;
