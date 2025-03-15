import React from "react";
import { useNavigate } from "react-router-dom";

const Path = () => {
  const locationWindow = window.location.pathname.split("/");
  
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  const navigate = useNavigate();
  const navHandle = (locat) => {
    if (locat=="") navigate("/")
    else navigate(locationWindow.slice(0,locationWindow.indexOf(locat)+1).join("/"), { replace: true });
  };
  return (
    <div className="container-fluid">
      <div
        className="path d-flex align-items-center justify-content-start gap-2"
        style={{ fontSize: "11px" }}
      >
        {locationWindow.map((item, index) => {
          if (item == "") {
            return (
              <span
                key={index}
                onClick={() => {
                  navHandle(item);
                }}
              >
                Ana sayfa
              </span>
            );
          } else {
            if (index == locationWindow.length - 1) {
              return (
                <div key={index}>
                  {">"}{" "}
                  <span
                    key={index}
                    className="active-path"
                    onClick={() => {
                      navHandle(item);
                    }}
                  >
                    {capitalize(item)}
                  </span>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  {">"}{" "}
                  <span
                    
                    onClick={() => {
                      navHandle(item);
                    }}
                  >
                    {capitalize(item)}
                  </span>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default Path;
