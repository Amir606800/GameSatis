import React from "react";
import { Accordion } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

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
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hello guys</Accordion.Header>
            <Accordion.Body>This is accordioinsss</Accordion.Body>
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
