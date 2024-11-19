import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center text-4xl mt-32 flex-col gap-3">
      <img
        src="/images/film-reel.png"
        alt="movie"
        width={250}
        height={250}
        className=""
      />
      Loading ...
    </div>
  );
};

export default Loading;
