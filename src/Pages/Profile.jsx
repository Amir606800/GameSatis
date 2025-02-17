import { FaCartArrowDown } from "react-icons/fa6";
import { LuSquarePen } from "react-icons/lu";
import { Link } from "react-router-dom";

const Profile = (props) => {
  return (
    <div className="container-fluid my-4">
      <div
        className="area w-100 gap-4  rounded-2 py-4 px-4 d-flex justify-content-around flex-column align-items-center flex-md-row"
        style={{ backgroundColor: "#111318",minHeight:"30em",height:'fit-content' }}
      >
        <div
          className="left d-flex flex-column justify-content-start align-items-center gap-3 h-100"
          style={{ width:"20em" }}
        >
          <div
            className="top-part bg-dark overflow-hidden rounded-2 d-flex justify-content-between w-100"
            style={{ height: "5.8em", minWidth: "20em", maxWidth: "100%" }}
          >
            <div className="top-left  px-3 d-flex align-items-center gap-3">
              <img
                width={60}
                className="rounded-2"
                src="https://img.gamesatis.com/assets/avatar-set/avatar-0.jpg"
                alt="Profil-Photo"
              />
              <div className="d-flex flex-column  align-items-start justify-content-center ">
                <span className="fs-6 fw-bolder m-0 p-0 ">Amir A.</span>
                <span
                  className="text-warning mb-1 p-0"
                  style={{ fontSize: "14px" }}
                >
                  0,00TL
                </span>
                <button
                  className="btn btn-outline-danger px-3 m-0 py-1"
                  style={{ fontSize: "9px", width: "fit-content" }}
                >
                  ÇIKIŞ YAP
                </button>
              </div>
            </div>
            <Link to={"/profilim"}>
              <div
                className="top-right h-100 py-2 d-flex justify-content-center align-items-center gap-2 flex-column px-3 profile-section-element-active profile-section-element"
                style={{ backgroundColor: "#161820", cursor: "pointer" }}
              >
                <LuSquarePen className="fs-2" />
                <span className="fw-bold" style={{ fontSize: "12px" }}>
                  Bilgilerim
                </span>
              </div>
            </Link>
          </div>
          <div className="middle-part d-flex align-items-center justify-content-center " >
            <div className="row g-3 h-100">
              <IconSection />
            </div>
          </div>
        </div>

        <div className="right px-2  mt-5 h-100" style={{ width: "78%",minHeight:"24em" }}>
          {props.section}
        </div>
      </div>
    </div>
  );
};

export default Profile;





const IconSection = () =>(
    <>
    <div className=" col-4 d-flex justify-content-center align-items-center">
                <Link
                  style={{ cursor: "pointer",minWidth:"6em",width:"8em",height:"6em" }}
                  to="/siparislerim"
                  className="bg-dark d-flex   justify-content-center align-items-center flex-column  profile-section-element"
                >
                  <FaCartArrowDown className="fs-4" />
                  <span className="fw-bold" style={{ fontSize: "12px" }}>
                    Siparisler
                  </span>
                </Link>
              </div>
              <div className=" col-4 d-flex justify-content-center align-items-center">
                <Link
                  style={{ cursor: "pointer",minWidth:"6em",width:"8em",height:"6em" }}
                  to="/siparislerim"
                  className="bg-dark d-flex   justify-content-center align-items-center flex-column  profile-section-element"
                >
                  <FaCartArrowDown className="fs-4" />
                  <span className="fw-bold" style={{ fontSize: "12px" }}>
                    Siparisler
                  </span>
                </Link>
              </div>
              <div className=" col-4 d-flex justify-content-center align-items-center">
                <Link
                  style={{ cursor: "pointer",minWidth:"6em",width:"8em",height:"6em" }}
                  to="/siparislerim"
                  className="bg-dark d-flex   justify-content-center align-items-center flex-column  profile-section-element"
                >
                  <FaCartArrowDown className="fs-4" />
                  <span className="fw-bold" style={{ fontSize: "12px" }}>
                    Siparisler
                  </span>
                </Link>
              </div>
              <div className=" col-4 d-flex justify-content-center align-items-center">
                <Link
                  style={{ cursor: "pointer",minWidth:"6em",width:"8em",height:"6em" }}
                  to="/siparislerim"
                  className="bg-dark d-flex   justify-content-center align-items-center flex-column  profile-section-element"
                >
                  <FaCartArrowDown className="fs-4" />
                  <span className="fw-bold" style={{ fontSize: "12px" }}>
                    Siparisler
                  </span>
                </Link>
              </div>
              <div className=" col-4 d-flex justify-content-center align-items-center">
                <Link
                  style={{ cursor: "pointer",minWidth:"6em",width:"8em",height:"6em" }}
                  to="/siparislerim"
                  className="bg-dark d-flex   justify-content-center align-items-center flex-column  profile-section-element"
                >
                  <FaCartArrowDown className="fs-4" />
                  <span className="fw-bold" style={{ fontSize: "12px" }}>
                    Siparisler
                  </span>
                </Link>
              </div>
              <div className=" col-4 d-flex justify-content-center align-items-center">
                <Link
                  style={{ cursor: "pointer",minWidth:"6em",width:"8em",height:"6em" }}
                  to="/siparislerim"
                  className="bg-dark d-flex   justify-content-center align-items-center flex-column  profile-section-element"
                >
                  <FaCartArrowDown className="fs-4" />
                  <span className="fw-bold" style={{ fontSize: "12px" }}>
                    Siparisler
                  </span>
                </Link>
              </div>
              <div className=" col-4 d-flex justify-content-center align-items-center">
                <Link
                  style={{ cursor: "pointer",minWidth:"6em",width:"8em",height:"6em" }}
                  to="/siparislerim"
                  className="bg-dark d-flex   justify-content-center align-items-center flex-column  profile-section-element"
                >
                  <FaCartArrowDown className="fs-4" />
                  <span className="fw-bold" style={{ fontSize: "12px" }}>
                    Siparisler
                  </span>
                </Link>
              </div>
    </>
)

