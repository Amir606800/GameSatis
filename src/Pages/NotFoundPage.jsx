import React from "react";
import Path from "../Addons/Path";
import IlgiCard from "../components/CardCompon/IlgiCard";

const NotFoundPage = () => {
  return (
    <>
      <div className="w-100 ">
        <img
          className="w-100"
          src="https://www.gamesatis.com/assets/404-not-found-ccf7b84ea585a162b584582c61f498aea55b3c9398b3ed39d198312be5e23c14.jpg"
          alt="404 Not found"
        />
      </div>
      <IlgiCard />
    </>
  );
};

export default NotFoundPage;
