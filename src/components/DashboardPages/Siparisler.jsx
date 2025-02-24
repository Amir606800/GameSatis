import React from "react";
import { Accordion } from "react-bootstrap";
import { FaCheck, FaSearch } from "react-icons/fa";

const Siparisler = () => {
  return (
    <div className="Siparisler-profile p-2">
      <div
        className="search-bar bg-dark w-100 p-3 rounded-3"
        style={{ height: "fit-content" }}
      >
        <div className="w-100 h-100 position-relative">
          <input
            placeholder="Sipariş İD veya ilan başlığı ile ara..."
            style={{ padding: "10px", backgroundColor: "#161820" }}
            className="w-100 border-0 h-100 px-5 bg-dark-subtle rounded-3"
            type="text"
          />
          <FaSearch
            className="position-absolute top-50 translate-middle-y"
            style={{ left: "15px" }}
          />
        </div>
      </div>
      <div className="list-siparisler  my-3">
        <Accordion
          className="d-flex flex-column gap-3"
          style={{ background: "none", borderRadius: "0px !important" }}
          defaultActiveKey={1}
          flush
        >
          <Accordion.Item eventKey="1" className="siparis-accordion-item">
            <Accordion.Header>
              <div className="siparisler-accordion-head w-100 pe-3">
                <div
                  style={{ color: "whitesmoke" }}
                  className="d-flex gap-3 align-items-center fw-bold"
                >
                  <span className="check-icon">
                    <FaCheck className="check-icon-itself" />
                  </span>
                  <span>#1341245</span>
                  <span>-</span>
                  <span>Name Of the Product</span>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body
              style={{ backgroundColor: "#171a21" }}
              className=" border-0"
            >
              <div className="siparisler-accordion-body bg-dark-subtle py-2">
                <div className="top bg-black p-2 rounded-2 d-flex align-items-center gap-2">
                  <img
                    className="rounded-2"
                    src="https://img.gamesatis.com/images/2198464/istediginiz-1-oyun-garanti-destek-thumb.jpg"
                    alt="image"
                  />
                  <div className="content h-100 d-flex justify-content-between align-items-center px-3 bg-dark w-100">
                    <div
                      className="left d-flex flex-column align-items-start justify-content-center "
                      style={{ fontSize: "13px" }}
                    >
                      <span>Tarih: 19/02/2025 - 00:11</span>
                      <span>Satici: GLOBAL GAME</span>
                      <span>Birim Fiyati: 120,00TL</span>
                      <span>Adet: 1,00</span>
                    </div>
                    <div className="right">
                      <h4>Tutar: 120,00TL</h4>
                      <div className="bg-success rounded-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Hello guys</Accordion.Header>
            <Accordion.Body>This is accordioinsss</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Hello guys</Accordion.Header>
            <Accordion.Body>This is accordioinsss</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Siparisler;
