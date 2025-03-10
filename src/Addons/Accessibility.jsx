import React, { useContext, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { SettingsContext } from "../Context/SettingsProvider";

const Accessibility = () => {
  const [show, setShow] = useState(false);

  const { theme, setTheme, lang, setLang, currency, setCurrency } =
    useContext(SettingsContext);

  return (
    <div
      className="position-fixed "
      style={{ left: "20px", bottom: "10px", zIndex: "1000" }}
    >
      <button
        className="btn border-2 border bg-custom text-light border-2 rounded-5 btn-light position-relative p-1 d-flex justify-content-center align-items-center"
        onClick={() => {
          show == false ? setShow(true) : setShow(false);
        }}
        style={{ width: "2.5em", height: "2.5em" }}
      >
        <IoIosSettings style={{ fontSize: "50px" }} />
      </button>

      <div
        className={`${
          show ? "" : "d-none"
        } position-absolute bottom-0 bg-custom left-0 rounded-4 border border-2`}
        style={{ width: "20em", height: "15em", zIndex: "-1" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="p-4 d-flex flex-column gap-3 justify-content-evenly h-100 list_of_inputs"
        >
          <div className="d-flex flex-row gap-3 align-items-center justify-content-around">
            <label htmlFor="theme">Site teması:</label>
            <select
              defaultValue={theme}
              name="theme"
              id="theme"
              onChange={(e) => {
                setTheme(e.target.value);
              }}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
          <div className="d-flex flex-row gap-3 align-items-center justify-content-around">
            <label htmlFor="lang">Site dili:</label>
            <select
              defaultValue={lang}
              name="lang"
              id="lang"
              onChange={(e) => {
                setLang(e.target.value);
              }}
            >
              <option value="tr">Türk</option>
              <option value="eng">İngilis</option>
              <option value="aze">Azerbaycan</option>
            </select>
          </div>
          <div className="d-flex flex-row gap-3 align-items-center justify-content-around">
            <label htmlFor="curr">Para birimi:</label>
            <select
              defaultValue={currency}
              name="curr"
              id="curr"
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            >
              <option value="TL">TL</option>
              <option value="USD">USD</option>
              <option value="AZN">AZN</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Accessibility;
