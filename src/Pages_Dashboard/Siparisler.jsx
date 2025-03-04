import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { FaCheck, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../tools/Slices/OrdersSlice";
import { UserAuth } from "../Context/AuthContext";
import Loading from "../Addons/Loading";

const Siparisler = () => {
  const dispatch = useDispatch()
  const {orders,loading,error} = useSelector((state)=>state.orders)
  const {userProfile} = UserAuth()
  useEffect(()=>{
    dispatch(fetchOrders(userProfile.id))
  },[])
  if(error) console.log(error)
  if(loading) return <Loading />

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
          {orders.length == 0?<>Loading...</> :orders.map((item,index)=>(
            
          
          <Accordion.Item key={index} eventKey="1" className="siparis-accordion-item">
            <Accordion.Header>
              <div className="siparisler-accordion-head w-100 pe-3">
                <div
                  style={{ color: "whitesmoke" }}
                  className="d-flex gap-3 align-items-center fw-bold"
                >
                  <span className="check-icon">
                    <FaCheck className="check-icon-itself" />
                  </span>
                  <span>#{item.products.id}</span>
                  <span>-</span>
                  <span>{item.products.title}</span>
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
                    src={item.products.image_url}
                    alt={item.products.title}
                  />
                  <div className="content h-100 d-flex gap-3 flex-wrap justify-content-between align-items-center px-3 py-3 bg-dark w-100 rounded-3">
                    <div
                      className="left d-flex flex-row flex-lg-column gap-2 align-items-start justify-content-between justify-content-lg-center  h-100 "
                      style={{ fontSize: "12px" }}
                    >
                      <span>
                        Tarih:{" "}
                        <span className="fw-bold">{item.created_at.substring(0, 10)} -{" "}
                        {item.created_at.substring(11, 16)}</span>
                      </span>
                      <span>
                        Satici: <span className="fw-bold">{item.products.profiles.display_name}</span>
                      </span>
                      <span>
                        Birim Fiyati: <span className="fw-bold">{item.products.price}</span>
                      </span>
                      <span>
                        Adet: <span className="fw-bold">{item.quantity}</span>
                      </span>
                    </div>
                    <div className="right d-flex flex-wrap justify-content-center align-items-center gap-3">
                      <span className="h5 p-0 m-0">Tutar: {item.total}</span>
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
          ))}      
        </Accordion>
      </div>
    </div>
  );
};

export default Siparisler;
