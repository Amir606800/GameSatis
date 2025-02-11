import React from "react";

const Path = () => {
  const locationWindow = window.location.pathname.split("/");
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  return (
    <div className="container-fluid">
      <div
        className="path d-flex align-items-center justify-content-start gap-2"
        style={{ fontSize: "11px" }}
      >
        {locationWindow.map((item, index) => {
          if (item == "") {
            return <span key={index}>Ana sayfa</span>;
          } else {
            if (index == locationWindow.length - 1) {
              return (
                <>
                  {">"}{" "}
                  <span key={index} className="active-path">
                    {capitalize(item)}
                  </span>
                </>
              );
            } else {
              return (
                <>
                  {">"} <span key={index}>{capitalize(item)}</span>
                </>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default Path;
