import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { UserAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { BiHeart } from "react-icons/bi";

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {userProfile} = UserAuth()
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 bg-info">
        <FaBars />
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        scroll={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="w-100" style={{height:"2em"}}>
            <div
              className="cart fs-6 px-2 py-1 w-100 h-100 rounded-3 text-center align-content-center"
              style={{ background: "none",border:"2px solid #FF5F1F",color:'#FF5F1F',cursor:"pointer" }}
            >
              <FaCartShopping />{" "}
              <span style={{ fontWeight: "bolder" }}>Sepet</span>
            </div>
            
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="top mb-3">
            
          {userProfile ? (
                  <Link to={"/profilim"}>
                    <button  style={{ fontSize: "13px", width: "100%",height:"6em" }}  className="btn border border-1 d-flex align-items-center justify-content-evenly d-flex gap-1 rounded-1 fw-bold text-white sell">
                      <img  className="rounded-2"  width={60}  src={userProfile.profile_photo}  alt="profil photo"/>
                      <div>
                        <divv  style={{    fontSize: "16px",    fontFamily: "Roboto,sans-serif",  }}  className="name fw-bold">
                          Hesabim
                        </divv>
                        <div  className="balance text-warning"  style={{ fontSize: "14px" }}>
                          {userProfile.balance.toFixed(2)}TL
                        </div>
                      </div>
                      <Link to="/">  <CgMail className="fs-2" /></Link>
                      <Link to="/giris-yap">  <BiHeart className="fs-2" /></Link>
                    </button>
                  </Link>
                ) : ""}
          </div>
          <div className="main w-100">
            <div className="nav-head-top d-flex flex-column mt-0 pt-0 gap-2 w-100 py-2">
                      <div className="nav-element w-100">
                        <Link to={"/oyunlar"}>OYUNLAR</Link>
                      </div>
                      <div className="nav-element w-100">OYUNCU PAZARI</div>
                      <div className="nav-element w-100">KNIGHT ONLINE</div>
                      <div className="nav-element w-100 position-relative">
                        MOBILE LEGENDS{" "}
                        <span className="position-absolute top-0 end-0 translate-middle-y badge bg-danger">
                          EN UYGUN
                        </span>{" "}
                      </div>
                      <div className="nav-element w-100">PUBG UC</div>
                      <div className="nav-element w-100">VALORANT VP</div>
                      <div className="nav-element w-100">CS2 SKIN</div>
                      <div className="nav-element w-100">RAZER AL-SAT</div>
                      <div className="nav-element w-100" >AÇIK ARTIRMA</div>
                      <div style={{ color: "#75ba15" }} className="nav-element w-100 fw-bolder">
                        <span className="fs-6">+</span>BAKİYE YÜKLE
                      </div>
                    </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
