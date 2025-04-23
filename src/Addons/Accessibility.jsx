import React, { useContext, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { SettingsContext } from "../Context/SettingsProvider";

const Accessibility = () => {
  const [show, setShow] = useState(false);

  const { theme, setTheme, lang, setLang, currency, setCurrency, currencyObj } =
    useContext(SettingsContext);
  const objectKeys = Object.keys(currencyObj);

  return (
    <div
      className="position-fixed"
      style={{
        left: "20px",
        bottom: "10px",
        zIndex: "1000",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Settings Button */}
      <button
        className="btn border-1 border-white rounded-circle bg-custom shadow-lg d-flex justify-content-center align-items-center"
        onClick={() => setShow(!show)}
        style={{
          width: "50px",
          height: "50px",
          background: "#3498db",
          color: "#fff",
          transition: "transform 0.3s ease",
          cursor: "pointer",
        }}
      >
        <IoIosSettings style={{ fontSize: "24px" }} />
      </button>

      {/* Settings Panel */}
      <div
        className={`${
          show ? "d-block" : "d-none"
        } position-absolute bottom-0 start-0 rounded-4 bg-custom shadow-lg overflow-hidden`}
        style={{
          width: "350px",
          height: "auto",
          border: "1px solid #ddd",
          transform: "translateY(-100%)",
          transition: "transform 0.3s ease",
          ...(show && { transform: "translateY(0)" }),
        }}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-4 d-flex flex-column gap-3"
          style={{
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
          }}
        >
          {/* Theme Selector */}
          <div className="d-flex flex-row gap-3 justify-content-between align-items-center">
            <label htmlFor="theme" className="fw-bold text-muted">
              Site Teması:
            </label>
            <select
              defaultValue={theme}
              name="theme"
              id="theme"
              onChange={(e) => setTheme(e.target.value)}
              className="form-select  w-50"
              style={{
                border: "1px solid #ddd",
                borderRadius: "6px",
                padding: "0.375rem 0.75rem",
                fontSize: "14px",
              }}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>

          {/* Language Selector */}
          <div className="d-flex flex-row gap-3 justify-content-between align-items-center">
            <label htmlFor="lang" className="fw-bold text-muted">
              Site Dili:
            </label>
            <select
              defaultValue={lang}
              name="lang"
              id="lang"
              onChange={(e) => setLang(e.target.value)}
              className="form-select w-50"
              style={{
                border: "1px solid #ddd",
                borderRadius: "6px",
                padding: "0.375rem 0.75rem",
                fontSize: "14px",
              }}
            >
              <option value="tr">Türkçe</option>
              <option value="eng">English</option>
              <option value="aze">Azərbaycan</option>
            </select>
          </div>

          {/* Currency Selector */}
          <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
            <label htmlFor="curr" className="fw-bold text-muted">
              Para Birimi:
            </label>
            <select
              defaultValue={currency}
              name="curr"
              id="curr"
              onChange={(e) => setCurrency(e.target.value)}
              className="form-select w-50"
              style={{
                border: "1px solid #ddd",
                borderRadius: "6px",
                padding: "0.375rem 0.75rem",
                fontSize: "14px",
              }}
            >
              {objectKeys.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Close Button */}
          <button
            type="button"
            className="btn btn-danger mt-3"
            onClick={() => setShow(false)}
            style={{
              alignSelf: "flex-start",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          >
            Kapat
          </button>
        </form>
      </div>
    </div>
  );
};

export default Accessibility;