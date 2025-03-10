import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { IoEye } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { deleteProduct } from "../../tools/Slices/UserProductSlice";
import EditModal from "../../Pages_Dashboard/EditModal";
import { SettingsContext } from "../../Context/SettingsProvider";

const ListCard = ({ main }) => {
    const {currency,currencyObj} = useContext(SettingsContext)
  return (
    <div className="col-6 col-md-4 col-lg-3 " style={{height:"fit-content"}}>
      {/* <a href={`/${slugify(main.title).toLowerCase()}`}> */}
      <div className="card  rounded-3 overflow-hidden " style={{height:"fit-content"}}>
        <div className="card-img mb-4 position-relative text-center">
          <img src={main.image_url} alt={main.title} className="w-100" />
        </div>
        <div style={{height:"fit-content"}} className="card-head text-start h6 fw-bold px-2 ">
          {main.title.substring(0, 20)}
        </div>
        <div className="pric px-2 text-center d-flex justify-content-between align-items-center">
          <div className="verf text-success">
            <GoVerified />
          </div>
          {(main.price*currencyObj[currency].value).toFixed(2)}{currencyObj[currency].symbol}
        </div>
        <div style={{height:"fit-content"}} className="card-body d-flex justify-content-between align-items-center">
          <div className="d-flex w-100 flex-column flex-xl-row align-items-center justify-content-center gap-3 gap-xl-1" style={{height:"fit-content"}}>
            <Link
              to={`/${slugify(main.title).toLowerCase()}`}
              className="rounded-2 w-100 d-flex gap-2 fw-bold justify-content-center align-items-center py-1 px-3 "
              style={{ fontSize: "13px",backgroundColor:"#00008F" }}
            >
              <IoEye className="d-none d-sm-block" style={{ fontSize: " 13px" }} />
              Görüntüle
            </Link>
            <div className="d-flex gap-1 w-100" style={{height:"fit-content"}}>
            <EditModal listed={false} mainItem={main} />
            <DeleteModal name={main.title} item_id={main.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeleteModal = React.memo(({name,item_id}) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = ()=>{
        dispatch(deleteProduct(item_id))
        window.location.reload()
    }
    return (
      <>
        <div 
            variant="primary" onClick={handleShow}
              className="cur-pointer rounded-2 w-100 fw-bold d-flex bg-danger gap-1 justify-content-center align-items-center "
              style={{
                
                fontSize: "12px",
              }}
            >
              <BiTrash style={{ fontSize: "11px" }} />
              <span>Sil</span>
        </div>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>İtem Silme</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span className="fw-bolder">{name} </span> <span> İsimli iteminiz ilanlardan <span className="fw-bold text-decoration-underline">silinecektir</span>! İşlem devam edilsinmi?</span>
          </Modal.Body>
          <Modal.Footer className="justify-content-around">
            <Button className="fw-bold" variant="danger" onClick={handleClose}>
              Hayır
            </Button>
            <Button className="fw-bold" variant="success" onClick={()=>{handleDelete();handleClose()}}>
              Evet
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  });


export default ListCard;
