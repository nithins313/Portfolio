import React from "react";
import loadingGif from "./assets/loading.gif";

const Loading = () => {
  return (
    <div className="loading-screen">
      <img
        src={loadingGif}
        alt="Loading..."
        className="flex 100vh justify-center bg-[#f0f0f0] justify-items-center min-w-[100%] min-h-[95%]"
      />
    </div>
  );
};

export default Loading;
