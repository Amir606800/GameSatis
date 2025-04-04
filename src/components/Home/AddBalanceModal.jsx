import React, { useContext, useState } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { Button, Modal } from "react-bootstrap";
import { useTranslate } from "../../helpers/Language/Translator";
import { SettingsContext } from "../../Context/SettingsProvider";
import supabase from "../../helpers/supabaseClient";

const AddBalanceModal = ({mode,settingShow}) => {
  const [show, setShow] = useState(false);
  const { userProfile } = UserAuth();
  const {currencyObj,currency} = useContext(SettingsContext)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [price, setPrice] = useState(0);
  const t = useTranslate();
  const handleSubmit = async () => {
    const {error} = await supabase.from("profiles").update({balance:(Number(price)+Number(userProfile.balance))}).eq("id",userProfile.id)
    if(!error) alert("Balance Successfuly added!")
    console.error(error)
  };
  return (
    <>
    {mode === "header"
    ?
    <div
    onClick={handleShow}
    style={{ color: "#75ba15" }}
    className="nav-element fw-bolder"
    >
        <span className="fs-6">+</span> {t("header.navigation.balance")}
      </div>
    :<div

    style={{
      color: "#75ba15",
      border: "2px solid #75ba15",
      background: "none",
    }}
    onClick={() =>{  handleShow()}}
    className="nav-element rounded-3 w-100 fw-bolder"
  >
    <span className="fs-6">+</span>
    {t("header.navigation.balance")}
  </div>}

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Bakiye Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Lütfen hesabınıza eklemek istediğiniz miktarı giriniz ({currencyObj[currency].symbol}):</span>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
            className="d-flex justify-content-center w-100 my-3"
          >
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="balance"
              className="rounded-2 p-1"
              name="balance"
              type="text"
              placeholder="Miktar"
            />
          </form>
        </Modal.Body>
        <Modal.Footer className=" justify-content-around">
          <Button variant="secondary" onClick={handleClose}>
            {t("cancel")}
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
          {t("continue")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddBalanceModal;
