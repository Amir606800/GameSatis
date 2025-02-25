import React from "react";
import { Accordion } from "react-bootstrap";
import { FaCheck, FaSearch } from "react-icons/fa";

const Siparisler = () => {
  return (
    <div className="Siparisler-profile px-2 pb-2">
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
              <div className="siparisler-accordion-body  py-2">
                <div
                  className="top  p-2 rounded-2 d-flex flex-xl-nowrap flex-wrap align-items-center gap-2"
                  style={{ backgroundColor: "#121318",minHeight:"7em" }}
                >
                  <img
                    className="rounded-2"
                    width={140}
                    src="https://img.gamesatis.com/images/2547148/kick-100-takipci-86041.webp"
                    alt="image"
                  />
                  <div className="content h-100 d-flex gap-3 flex-wrap justify-content-between align-items-center px-3 py-3 bg-dark w-100 rounded-3">
                    <div
                      className="left d-flex flex-row flex-lg-column gap-2 align-items-start justify-content-between justify-content-lg-center  h-100 "
                      style={{ fontSize: "12px" }}
                    >
                      <span>
                        Tarih:{" "}
                        <span className="fw-bold">19/02/2025 - 00:11</span>
                      </span>
                      <span>
                        Satici: <span className="fw-bold">GLOBAL GAME</span>
                      </span>
                      <span>
                        Birim Fiyati: <span className="fw-bold">120,00TL</span>
                      </span>
                      <span>
                        Adet: <span className="fw-bold">1,00</span>
                      </span>
                    </div>
                    <div className="right d-flex flex-wrap justify-content-center align-items-center gap-3">
                      <span className="h5 p-0 m-0">Tutar: 120,00TL</span>
                      <div className=" rounded-2 d-flex justify-content-center align-items-center py-1 px-4" style={{backgroundColor:"green"}}>
                        <span className="check-icon">
                          <FaCheck className="check-icon-itself" />
                        </span>
                        Tamamlandi
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description-order p-2 rounded-2 d-flex align-items-center mt-3 gap-2"
                  style={{ backgroundColor: "#121318",height:"3em" }}>
                    This is a description for purchased product
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="siparis-accordion-item">
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
              <div className="siparisler-accordion-body  py-2">
                <div
                  className="top  p-2 rounded-2 d-flex align-items-center gap-2"
                  style={{ backgroundColor: "#121318",height:"7em" }}
                >
                  <img
                    className="rounded-2"
                    width={140}
                    src="https://img.gamesatis.com/images/2198464/istediginiz-1-oyun-garanti-destek-thumb.jpg"
                    alt="image"
                  />
                  <div className="content h-100 d-flex justify-content-between align-items-center px-3 bg-dark w-100 rounded-3">
                    <div
                      className="left d-flex flex-column align-items-start justify-content-center  h-100 "
                      style={{ fontSize: "12px" }}
                    >
                      <span>
                        Tarih:{" "}
                        <span className="fw-bold">19/02/2025 - 00:11</span>
                      </span>
                      <span>
                        Satici: <span className="fw-bold">GLOBAL GAME</span>
                      </span>
                      <span>
                        Birim Fiyati: <span className="fw-bold">120,00TL</span>
                      </span>
                      <span>
                        Adet: <span className="fw-bold">1,00</span>
                      </span>
                    </div>
                    <div className="right d-flex justify-content-center align-items-center gap-3">
                      <span className="h5 p-0 m-0">Tutar: 120,00TL</span>
                      <div className=" rounded-2 d-flex justify-content-center align-items-center py-1 px-4" style={{backgroundColor:"green"}}>
                        <span className="check-icon">
                          <FaCheck className="check-icon-itself" />
                        </span>
                        Tamamlandi
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description-order p-2 rounded-2 d-flex align-items-center mt-3 gap-2"
                  style={{ backgroundColor: "#121318",height:"3em" }}>
                    This is a description for purchased product
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="siparis-accordion-item">
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
              <div className="siparisler-accordion-body  py-2">
                <div
                  className="top  p-2 rounded-2 d-flex align-items-center gap-2"
                  style={{ backgroundColor: "#121318",height:"7em" }}
                >
                  <img
                    className="rounded-2"
                    width={140}
                    src="https://img.gamesatis.com/images/2198464/istediginiz-1-oyun-garanti-destek-thumb.jpg"
                    alt="image"
                  />
                  <div className="content h-100 d-flex justify-content-between align-items-center px-3 bg-dark w-100 rounded-3">
                    <div
                      className="left d-flex flex-column align-items-start justify-content-center  h-100 "
                      style={{ fontSize: "12px" }}
                    >
                      <span>
                        Tarih:{" "}
                        <span className="fw-bold">19/02/2025 - 00:11</span>
                      </span>
                      <span>
                        Satici: <span className="fw-bold">GLOBAL GAME</span>
                      </span>
                      <span>
                        Birim Fiyati: <span className="fw-bold">120,00TL</span>
                      </span>
                      <span>
                        Adet: <span className="fw-bold">1,00</span>
                      </span>
                    </div>
                    <div className="right d-flex justify-content-center align-items-center gap-3">
                      <span className="h5 p-0 m-0">Tutar: 120,00TL</span>
                      <div className=" rounded-2 d-flex justify-content-center align-items-center py-1 px-4" style={{backgroundColor:"green"}}>
                        <span className="check-icon">
                          <FaCheck className="check-icon-itself" />
                        </span>
                        Tamamlandi
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description-order p-2 rounded-2 d-flex align-items-center mt-3 gap-2"
                  style={{ backgroundColor: "#121318",height:"3em" }}>
                    This is a description for purchased product
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="siparis-accordion-item">
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
              <div className="siparisler-accordion-body  py-2">
                <div
                  className="top  p-2 rounded-2 d-flex align-items-center gap-2"
                  style={{ backgroundColor: "#121318",height:"7em" }}
                >
                  <img
                    className="rounded-2"
                    width={140}
                    src="https://img.gamesatis.com/images/2198464/istediginiz-1-oyun-garanti-destek-thumb.jpg"
                    alt="image"
                  />
                  <div className="content h-100 d-flex justify-content-between align-items-center px-3 bg-dark w-100 rounded-3">
                    <div
                      className="left d-flex flex-column align-items-start justify-content-center  h-100 "
                      style={{ fontSize: "12px" }}
                    >
                      <span>
                        Tarih:{" "}
                        <span className="fw-bold">19/02/2025 - 00:11</span>
                      </span>
                      <span>
                        Satici: <span className="fw-bold">GLOBAL GAME</span>
                      </span>
                      <span>
                        Birim Fiyati: <span className="fw-bold">120,00TL</span>
                      </span>
                      <span>
                        Adet: <span className="fw-bold">1,00</span>
                      </span>
                    </div>
                    <div className="right d-flex justify-content-center align-items-center gap-3">
                      <span className="h5 p-0 m-0">Tutar: 120,00TL</span>
                      <div className=" rounded-2 d-flex justify-content-center align-items-center py-1 px-4" style={{backgroundColor:"green"}}>
                        <span className="check-icon">
                          <FaCheck className="check-icon-itself" />
                        </span>
                        Tamamlandi
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description-order p-2 rounded-2 d-flex align-items-center mt-3 gap-2"
                  style={{ backgroundColor: "#121318",height:"3em" }}>
                    This is a description for purchased product
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="siparis-accordion-item">
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
              <div className="siparisler-accordion-body  py-2">
                <div
                  className="top  p-2 rounded-2 d-flex align-items-center gap-2"
                  style={{ backgroundColor: "#121318",height:"7em" }}
                >
                  <img
                    className="rounded-2"
                    width={140}
                    src="https://img.gamesatis.com/images/2198464/istediginiz-1-oyun-garanti-destek-thumb.jpg"
                    alt="image"
                  />
                  <div className="content h-100 d-flex justify-content-between align-items-center px-3 bg-dark w-100 rounded-3">
                    <div
                      className="left d-flex flex-column align-items-start justify-content-center  h-100 "
                      style={{ fontSize: "12px" }}
                    >
                      <span>
                        Tarih:{" "}
                        <span className="fw-bold">19/02/2025 - 00:11</span>
                      </span>
                      <span>
                        Satici: <span className="fw-bold">GLOBAL GAME</span>
                      </span>
                      <span>
                        Birim Fiyati: <span className="fw-bold">120,00TL</span>
                      </span>
                      <span>
                        Adet: <span className="fw-bold">1,00</span>
                      </span>
                    </div>
                    <div className="right d-flex justify-content-center align-items-center gap-3">
                      <span className="h5 p-0 m-0">Tutar: 120,00TL</span>
                      <div className=" rounded-2 d-flex justify-content-center align-items-center py-1 px-4" style={{backgroundColor:"green"}}>
                        <span className="check-icon">
                          <FaCheck className="check-icon-itself" />
                        </span>
                        Tamamlandi
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description-order p-2 rounded-2 d-flex align-items-center mt-3 gap-2"
                  style={{ backgroundColor: "#121318",height:"3em" }}>
                    This is a description for purchased product
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          
        </Accordion>
      </div>
    </div>
  );
};

export default Siparisler;
