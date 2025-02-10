import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { BsFacebook, BsTwitch, BsYoutube } from "react-icons/bs";
import Path from "../components/Path";
import { StreamerContext } from "../Context/StreamerProvider";
import StreamerCard from "../components/CardCompon/StreamerCard";

const Donate = () => {
  const { streamData, searcInput, setSearchInput, filteredStreamer,setFilteredStream } =useContext(StreamerContext);
  const filterByPlatform = (platform) => {
    const platformFilteredStreamers = streamData.filter((item) =>
      item.platforms.includes(platform)
    );
    setFilteredStream(platformFilteredStreamers); // Apply the platform filter on the searched results
  };
  return (
    <div className="container-fluid my-4">
      <Path />
      <div className="image">
        <img
          className="w-100"
          src="https://img.gamesatis.com/assets/category-default-image.webp"
          alt="toop-banner"
        />
      </div>
      <div className="heading h5">Donate</div>
      <div
        className="content w-100 bg-dark rounded-3 my-3"
        style={{ height: "3.5em" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-100 h-100 p-2 d-flex justify-content-between align-items-center "
        >
          <div
            className="search-strm position-relative "
            style={{ width: "33%" }}
          >
            <input
              type="text"
              className="border-0 bg-body-teritary w-100  px-5 rounded-3"
              style={{ padding: "7px" }}
              placeholder="Yayinci Ara"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <FaSearch
              style={{ left: "10px" }}
              className=" position-absolute top-50 translate-middle-y"
            />
          </div>
          <div className="right-filter d-flex flex-row gap-2 align-items-center justify-content-center">
            <button
              className="btn py-1 fw-bold d-flex justify-content-center align-items-center gap-1"
              style={{ backgroundColor: "#9146FF" }}
              onClick={()=>{filterByPlatform("Twitch")}}

            >
              <BsTwitch />
              Twitch
            </button>
            <button
              className="py-1 btn fw-bold d-flex justify-content-center align-items-center gap-1"
              style={{ backgroundColor: "#FF0000" }}
              onClick={()=>{filterByPlatform("YouTube")}}


            >
              <BsYoutube />
              YouTube
            </button>
            <button
              className="btn py-1 fw-bold d-flex justify-content-center align-items-center gap-1"
              style={{ backgroundColor: "#1877F2" }}
              onClick={()=>{filterByPlatform("Facebook")}}
            >
              <BsFacebook /> Facebook
            </button>
          </div>
        </form>
      </div>
      <div className="stream-list row g-4 gap-0">
        {!filteredStreamer
          ? "Loading..."
          : filteredStreamer.map((item, i) => (
              <StreamerCard
                key={i}
                img={item.photo}
                names={item.name}
                platform={item.platforms}
              />
            ))}{" "}
      </div>
    </div>
  );
};

export default Donate;
