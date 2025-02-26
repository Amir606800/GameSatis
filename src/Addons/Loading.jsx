import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
    
  return (
    <>
    <div className="background-loading top-0 z-2 position-absolute bg-black" style={{width:"100vw",height:"100vh",opacity:"0.9"}}  />
    <div className="position-absolute z-3 top-50 end-50 translate-middle fs-1 ">
      <Spinner variant="warning" label="Loading..." />{" "}
    </div>
    </>
  );
};

export default Loading;
