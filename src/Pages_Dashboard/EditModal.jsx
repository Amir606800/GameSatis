import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaPen } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../tools/Slices/UserProductSlice";
import Swal from "sweetalert2";

const EditModal = ({ listed, mainItem }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [initialState,setInitialState] = useState(mainItem)
  const dispatch = useDispatch()


  const isNumber = (entit)=> !isNaN(entit) &&  !isNaN(parseFloat(entit));

  const handleInputFields = (e)=>{
    setInitialState({...initialState,[e.target.name]:e.target.value})
    console.log(initialState)
  }
  const checkimageURL = (url)=>{
    const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
    return pattern.test(url)
}
const handleFormSubmit = (e)=>{
    e.preventDefault()
    if(!checkimageURL(initialState.image_url)) {alert("Lütfen geçerli bir fotoğraf linki giriniz");return} 
    if(initialState.price<10 || !isNumber(initialState.price)) {alert("Minimum 10TL olmalı");return}
    if(!isNumber(initialState.stock) || initialState.stock != Math.floor(initialState.stock)) {alert("Stok tam sayı olmalı");return }
    if(initialState.deliver_time != Math.floor(initialState.deliver_time) || !isNumber(initialState.deliver_time || initialState.deliver_time >=24)){ alert("Teslimat süresi tam sayı olmalı ve 1 günden fazla olmamalıdır");return}
    
    
    try{
        const {profiles, ...updatedItem} = initialState
        console.log(updatedItem)
        dispatch(updateProduct(updatedItem))
        
        Swal.fire({
                title: "Succesfull",
                text: "Your product succesfully added!",
                icon: "success",
                background: "#222631", // Custom dark background (optional)
                color: "#fff", // Text color for dark theme
                confirmButtonText: "OK",
                confirmButtonColor: "#3085d6",
            });
        handleClose()
    }catch(err){
        alert(err)
    }
}

  return (
    <>
      {listed ? (
        <div
          onClick={handleShow}
          className=" rounded-2 d-flex fw-bold gap-2 justify-content-center align-items-center py-1 px-4"
          style={{
            backgroundColor: "green",
            fontSize: "13px",
            width: "9em",
            cursor: "pointer",
          }}
        >
          <FaPen style={{ fontSize: "13px" }} />
          Düzenle
        </div>
      ) : (
        <div
          onClick={handleShow}
          className=" rounded-2 w-100 fw-bold d-flex gap-1 justify-content-center align-items-center  px-2 py-1"
          style={{
            backgroundColor: "green",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          <FaPen style={{ fontSize: "13px" }} />
          <span>Edit</span>
        </div>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="xl"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title>{mainItem.title} için düzenleme</Modal.Title>
        </Modal.Header>
          <form
            onSubmit={handleFormSubmit}
            className="d-flex align-items-center flex-column edit-modal justify-content-center w-100 gap-4"
          >
        <Modal.Body className="edit-modal py-5 w-100" style={{minHeight:"30em"}}>
            <div className="list_of_inputs d-flex flex-column align-items-center justify-content-center w-100 gap-3 ">
              <div className="w-75 d-flex align-items-center gap-3 justify-content-center flex-column flex-lg-row">
                <div
                  className="border-1 border text-center align-content-center"
                  style={{ minHeight: "8em", minWidth: "8em" }}
                >
                  {initialState.image_url == "" ? (
                    <div>Your Photo will be displayed here</div>
                  ) : (
                    <img
                      style={{maxHeight:"10em"}}
                      src={initialState.image_url}
                      alt={initialState.title}
                    />
                  )}
                </div>
                <div className=" w-75 align-content-end text-start ">
                  <div className="list-of-inputs-elements ">
                    <label style={{ width: "120px" }} htmlFor="name_prod">
                      Ürünün Adı:
                    </label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={initialState.title}
                      onChange={handleInputFields}
                      id="name_prod"
                      placeholder="Ürünün Adı: "
                    />
                  </div>
                  <div className="list-of-inputs-elements mt-3 mt-lg-4">
                    <label style={{ width: "120px" }} htmlFor="photo_prod">
                      Ürün fotoğrafı:
                    </label>
                    <input
                      type="text"
                      name="image_url"
                      defaultValue={initialState.image_url}
                      onChange={handleInputFields}
                      id="photo_prod"
                      placeholder="Ürün fotoğrafı: "
                    />
                  </div>
                </div>
              </div>
              <div className="list-of-inputs-elements w-75">
                <label htmlFor="price_prod">Ürün Fiyatı (TL):</label>
                <input
                  type="text"
                  id="price_prod"
                  defaultValue={initialState.price}
                  onChange={handleInputFields}
                  name="price"
                  placeholder="Ürün Fiyatı: "
                />
              </div>

              <div className="list-of-inputs-elements w-75">
                <label htmlFor="amount_prod">Ürün Sayı (Adet): </label>
                <input
                  type="text"
                  name="stock"
                  defaultValue={initialState.stock}
                  onChange={handleInputFields}
                  placeholder="Ürün Sayı"
                />
              </div>
              <div className="list-of-inputs-elements w-75">
                <label htmlFor="amount_prod">Teslimat Süresi (saat): </label>
                <input
                  type="text"
                  name="deliver_time"
                  min={1}
                  defaultValue={initialState.deliver_time}
                  onChange={handleInputFields}
                  placeholder="Teslimat süresi"
                />
              </div>
              <div className="list-of-inputs-elements w-75">
                <label htmlFor="desc_prod">Ürün Açıklaması:</label>
                <textarea
                  type="text"
                  name="description"
                  defaultValue={initialState.description}
                  onChange={handleInputFields}
                  id="desc_prod"
                  placeholder="Ürün Açıklaması: "
                />
              </div>
              
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={(e)=>{handleFormSubmit(e)}}>
            Save Changes
          </Button>
        </Modal.Footer>
          </form>
      </Modal>
    </>
  );
};

export default EditModal;
