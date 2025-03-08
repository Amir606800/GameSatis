import React from "react";
import { quantum } from "ldrs";

const Loading = () => {
  quantum.register();

  // Default values shown

  return (
    <>
      <div
        className="background-loading top-0 z-3 position-absolute bg-black"
        style={{ width: "100vw", height: "100vh", opacity: "0.9" }}
      />
      <div className="position-absolute z-3 top-50 end-50 translate-middle fs-1 ">
        <l-quantum size="50" speed="1.45" color="orange"></l-quantum>
      </div>
    </>
  );
};

export default Loading;
