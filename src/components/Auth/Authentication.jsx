import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import AuthContent from "./AuthContent";
import { useTranslate } from "../../helpers/Language/Translator";




const Authentication = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const t = useTranslate()
  return (
    <>
      <Button
        onClick={handleShow}
        style={{ fontSize: "13px" }}
        className="btn btn-info d-flex align-items-center justify-content-center gap-1 fw-bold text-white sell"
      >
        <FaUser />
        <span>{t("auth.title")}</span>
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        animation={false}
        centered
      >
        <AuthContent modalmi={true} handleClose={handleClose} />
      </Modal>
    </>
  );
};

export default Authentication;
