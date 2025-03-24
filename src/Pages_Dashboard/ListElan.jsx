import React, { useContext, useEffect, useState } from "react";
import { Accordion, Button, Modal } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { UserAuth } from "../Context/AuthContext";
import {
  deleteProduct,
  fetchUserProducts,
} from "../tools/Slices/UserProductSlice";
import Loading from "../Addons/Loading";
import { BsFillHddStackFill } from "react-icons/bs";
import slugify from "slugify";
import { Link } from "react-router-dom";
import { HiViewGrid } from "react-icons/hi";
import ListCard from "../components/CardCompon/ListCard";
import { BiTrash } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import EditModal from "./EditModal";
import { SettingsContext } from "../Context/SettingsProvider";
import { useTranslate } from "../helpers/Language/Translator";

const ListElan = () => {
  const dispatch = useDispatch();
  const { userProducts } = useSelector((state) => state.products);
  const { session } = UserAuth();
  const [search, setSearch] = useState("");
  const t = useTranslate();
  const [listStyle, setListStyle] = useState("stack");
  useEffect(() => {
    dispatch(fetchUserProducts(session.user.id));
  }, [session]);
  const { currency, currencyObj } = useContext(SettingsContext);
  const handlesListStyle = () => {
    if (listStyle == "grid") {
      setListStyle("stack");
    } else {
      setListStyle("grid");
    }
  };
  const searchedProducts = userProducts.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  if (!userProducts) return <Loading />;

  return (
    <div className="Siparisler-profile px-2 pb-2">
      <div
        className="search-bar bg-custom w-100 p-3 rounded-3"
        style={{ height: "fit-content" }}
      >
        <div className="w-100 h-100 position-relative d-flex gap-2">
          <input
            placeholder={t("myOrders.searchPlaceholder")}
            style={{ padding: "10px", backgroundColor: "#161820" }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-100 border-0 h-100 px-5 bg-custom-subtle rounded-3"
            type="text"
          />
          <FaSearch
            className="position-absolute top-50 translate-middle-y"
            style={{ left: "15px" }}
          />
          <div
            className="grid-or-stack align-content-center text-center cur-pointer"
            style={{ width: "3em" }}
          >
            <HiViewGrid
              onClick={handlesListStyle}
              className={`fs-2 ${listStyle == "grid" ? "d-block" : "d-none"}`}
            />
            <BsFillHddStackFill
              onClick={handlesListStyle}
              className={`fs-4 ms-1 ${
                listStyle == "stack" ? "d-block" : "d-none"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="list-siparisler  my-3 " style={{ height: "fit-content" }}>
        {listStyle == "stack" ? (
          <div className="row g-3">
            {searchedProducts.map((item, index) => (
              <ListCard main={item} key={index} />
            ))}
          </div>
        ) : (
          <Accordion
            className="d-flex flex-column gap-3"
            style={{ background: "none", borderRadius: "0px !important" }}
            defaultActiveKey={0}
            flush
          >
            {searchedProducts.map((item, index) => (
              <Accordion.Item
                key={index}
                eventKey={index}
                className="siparis-accordion-item bg-custom"
              >
                <Accordion.Header>
                  <div className="siparisler-accordion-head bg-custom w-100 pe-3">
                    <div
                      
                      className="d-flex gap-3 align-items-center fw-bold"
                    >
                      <span className="check-icon">
                        <FaCheck className="check-icon-itself text-white" />
                      </span>
                      <span>#{item.id}</span>
                      <span>-</span>
                      <span>{item.title}</span>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body
                  className=" border-0 bg-custom"
                >
                  <div className="siparisler-accordion-body  py-2">
                    <div
                      className="top image-cont p-2 rounded-2 d-flex flex-xl-nowrap flex-wrap align-items-center justify-content-center w-100 gap-2 bg-dark-custom"
                      style={{ minHeight: "7em" }}
                    >
                      <img
                        className="rounded-2"
                        width={140}
                        src={item.image_url}
                        alt={item.title}
                      />
                      <div className="content h-100 d-flex gap-3 flex-wrap justify-content-between align-items-center px-3 py-3 bg-custom w-100 rounded-3">
                        <div
                          className="left d-flex flex-row flex-lg-column gap-2 align-items-start justify-content-between justify-content-lg-center  h-100 "
                          style={{ fontSize: "12px" }}
                        >
                          <span>
                            {t("myOrders.date")}
                            <span className="fw-bold">
                              {" "}
                              {item.last_modified.substring(0, 10)} -{" "}
                              {item.last_modified.substring(11, 16)}
                            </span>
                          </span>
                          <span>
                            {t("listings.deliverTime")}
                            <span className="fw-bold">
                              {" "}
                              {item.deliver_time} {t("listings.hour")}
                            </span>
                          </span>
                          <span>
                            {t("myOrders.seller")}{" "}
                            <span className="fw-bold">
                              {" "}
                              {item.profiles.display_name}
                            </span>
                          </span>
                        </div>
                        <div
                          className="left d-flex flex-row flex-lg-column gap-2 align-items-start justify-content-between justify-content-lg-center  h-100 "
                          style={{ fontSize: "12px" }}
                        >
                          <span>
                            {t("myOrders.priceOne")}{" "}
                            <span className="fw-bold">
                              {" "}
                              {(item.price * currencyObj[currency].value).toFixed(2)}
                              {currencyObj[currency].symbol}
                            </span>
                          </span>
                          <span>
                            {t("myOrders.count")} <span className="fw-bold"> {item.stock}</span>
                          </span>
                        </div>
                        <div className="right d-flex flex-wrap justify-content-center align-items-center gap-3">
                          <div className="d-flex flex-column align-items-center justify-content-center gap-3  text-white">
                            <Link
                              to={`/${slugify(item.title).toLowerCase()}`}
                              className="rounded-2 d-flex gap-2 fw-bold  text-white justify-content-center align-items-center py-1 px-1"
                              style={{
                                width: "9em",
                                fontSize: "13px",
                                backgroundColor: "#00008F",
                              }}
                            >
                              <IoEye style={{ fontSize: " 13px" }} />
                              {t("listings.display")}
                            </Link>
                            <EditModal listed={true} mainItem={item} />
                            <DeleteModal name={item.title} item_id={item.id} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="description-order p-2 rounded-2 d-flex align-items-center mt-3 gap-2"
                      style={{

                        height: "fit-content",
                      }}
                    >
                      {item.description}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
};

const DeleteModal = React.memo(({ name, item_id }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const t = useTranslate()
  console.log(item_id);

  const handleDelete = () => {
    dispatch(deleteProduct(item_id));
    window.location.reload();
  };
  return (
    <>
      <div
        variant="primary"
        onClick={handleShow}
        className="cur-pointer bg-danger fw-bold rounded-2 d-flex gap-2 justify-content-center align-items-center py-1 px-3"
        style={{
          fontSize: "12px",

          width: "9.5em",
        }}
      >
        <BiTrash style={{ fontSize: "14px" }} />
        {t("listings.delete")}
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>İtem Silme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="fw-bolder">{name} </span>{" "}
          <span>
            {" "}
            İsimli iteminiz ilanlardan{" "}
            <span className="fw-bold text-decoration-underline">
              silinecektir
            </span>
            ! İşlem devam edilsinmi?
          </span>
        </Modal.Body>
        <Modal.Footer className="justify-content-around">
          <Button className="fw-bold" variant="danger" onClick={handleClose}>
            {t("cancel")}
          </Button>
          <Button
            className="fw-bold"
            variant="success"
            onClick={() => {
              handleDelete();
              handleClose();
            }}
          >
            {t("continue")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});
export default ListElan;
