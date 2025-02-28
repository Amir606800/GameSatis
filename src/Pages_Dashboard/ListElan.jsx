import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { FaCheck, FaPen } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { UserAuth } from '../Context/AuthContext'
import { fetchUserProducts } from '../tools/Slices/UserProductSlice'
import Loading from '../Addons/Loading'
import { BsEye, BsFillHddStackFill } from 'react-icons/bs'
import slugify from 'slugify'
import { Link } from 'react-router-dom'
import { HiViewGrid } from 'react-icons/hi'
import ProductCard from '../components/CardCompon/ProductCard'

const ListElan = () => {
    const dispatch = useDispatch()
    const {userProducts} = useSelector((state)=>state.products)
    const {session} = UserAuth()

    const [listStyle,setListStyle] = useState("stack")
    useEffect(()=>{
        dispatch(fetchUserProducts(session.user.id))
    },[session])
    

    const handlesListStyle = ()=>{
      if(listStyle == "grid"){
        setListStyle("stack")
      }else{
        setListStyle("grid")
      }
    }
    if(!userProducts) return <Loading />
    


    
  return (
    <div className="Siparisler-profile px-2 pb-2">
      <div
        className="search-bar bg-dark w-100 p-3 rounded-3"
        style={{ height: "fit-content" }}
      >
        <div className="w-100 h-100 position-relative d-flex gap-2">
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
          <div className="grid-or-stack align-content-center text-center" style={{cursor:"pointer",width:"3em"}}>
            <HiViewGrid onClick={handlesListStyle} className={`fs-2 ${listStyle == "grid"?"d-block":"d-none"}`} />
            <BsFillHddStackFill onClick={handlesListStyle} className={`fs-4 ms-1 ${listStyle == "stack"?"d-block":"d-none"}`}  />
          </div>
        </div>
      </div>
      <div className="list-siparisler  my-3">
        {listStyle == "stack"
        ?<div className='row g-3'>
          {userProducts.map((item,index)=>(
            <ProductCard main={item} key={index} listed={true} />
          ))}
        </div>
        :
        <Accordion
          className="d-flex flex-column gap-3"
          style={{ background: "none", borderRadius: "0px !important" }}
          defaultActiveKey={0}
          flush
          >
          {userProducts.map((item,index)=>(
          <Accordion.Item key={index} eventKey={index} className="siparis-accordion-item">
            <Accordion.Header>
              <div className="siparisler-accordion-head w-100 pe-3">
                <div
                  style={{ color: "whitesmoke" }}
                  className="d-flex gap-3 align-items-center fw-bold"
                >
                  <span className="check-icon">
                    <FaCheck className="check-icon-itself" />
                  </span>
                  <span>#{item.id}</span>
                  <span>-</span>
                  <span>{item.title}</span>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body
              style={{ backgroundColor: "#171a21" }}
              className=" border-0"
            >
              <div className="siparisler-accordion-body  py-2">
                <div
                  className="top image-cont p-2 rounded-2 d-flex flex-xl-nowrap flex-wrap align-items-center justify-content-center w-100 gap-2"
                  style={{ backgroundColor: "#121318",minHeight:"7em" }}
                >
                  <img
                    className="rounded-2"
                    width={140}
                    src={item.image_url}
                    alt={item.title}
                  />
                  <div className="content h-100 d-flex gap-3 flex-wrap justify-content-between align-items-center px-3 py-3 bg-dark w-100 rounded-3">
                    <div
                      className="left d-flex flex-row flex-lg-column gap-2 align-items-start justify-content-between justify-content-lg-center  h-100 "
                      style={{ fontSize: "12px" }}
                    >
                      <span>
                        Tarih:
                        <span className="fw-bold"> {item.last_modified.substring(0, 10)} - {item.last_modified.substring(11,16)}</span>
                      </span>
                      <span>
                        Teslimat Süresi:
                        <span className="fw-bold"> {item.deliver_time} saat</span>
                      </span>
                      <span>
                        Satici: <span className="fw-bold"> {item.profiles.display_name}</span>
                      </span>
                      
                    </div>
                    <div
                      className="left d-flex flex-row flex-lg-column gap-2 align-items-start justify-content-between justify-content-lg-center  h-100 "
                      style={{ fontSize: "12px" }}
                    >
                      <span>
                        Birim Fiyati: <span className="fw-bold"> {item.price}TL</span>
                      </span>
                      <span>
                        Adet: <span className="fw-bold"> {item.stock}</span>
                      </span>
                    </div>
                    <div className="right d-flex flex-wrap justify-content-center align-items-center gap-3">
                      
                      <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                      <Link to={`/${slugify(item.title).toLowerCase() }`} className="rounded-2 d-flex gap-2 justify-content-center align-items-center py-1 px-1 bg-info" style={{width:"9em",fontSize:"13px"}}>
                        
                          <BsEye style={{fontSize:" 13px"}} />
                        Görüntüle
                      </Link>
                      <div className=" rounded-2 d-flex gap-2 justify-content-center align-items-center py-1 px-3" style={{backgroundColor:"green",fontSize:"13px",width:"9em"}}>
                        
                          <FaPen style={{fontSize:"13px"}} />
                        
                        Düzenle
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description-order p-2 rounded-2 d-flex align-items-center mt-3 gap-2"
                  style={{ backgroundColor: "#121318",height:"fit-content" }}>
                    {item.description}
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
        </Accordion>}
      </div>
    </div>
    )
}

export default ListElan