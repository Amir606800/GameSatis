import React from "react";
import { quantum } from "ldrs";

const Loading = () => {
  quantum.register();

  // Default values shown

  return (
    <>
      <div
        className="background-loading top-0 start-0 position-fixed bg-black"
        style={{ width: "100vw", height: "100vh", opacity: "0.9",zIndex:"10000000000000" }}
      />
      <div className="position-fixed top-50 end-50 translate-middle fs-1 " style={{zIndex:"10000000000001"}}>
        <l-quantum size="50" speed="1.45" color="orange"></l-quantum>
      </div>
    </>
  );
};

export default Loading;
