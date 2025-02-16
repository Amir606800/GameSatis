import { LuSquarePen } from "react-icons/lu";
import { Link } from "react-router-dom";

const Profile = (props)=>{
    return(
        <div className="container-fluid my-4">
            <div className="area w-100 h-auto rounded-2 p-3 d-flex justify-content-center gap-4 flex-column flex-md-row" style={{backgroundColor:"#111318"}}>
                <div className="left d-flex flex-column justify-content-center align-items-center gap-2" style={{minWidth:"18em"}}>
                    <div className="top-part bg-dark overflow-hidden rounded-2 d-flex justify-content-between" style={{height:"6em",width:"18em"}}>
                        <div className="top-left p-2 px-3 d-flex align-items-center gap-3 w-100">
                            <img width={60} className="rounded-2" src="https://img.gamesatis.com/assets/avatar-set/avatar-0.jpg" alt="Profil-Photo" />
                            <div className="d-flex flex-column  align-items-start justify-content-center ">
                                <span className="fs-5 fw-bolder m-0 p-0">Amir A.</span>
                                <span className="text-warning mb-1 p-0">0,00TL</span>
                                <button className="btn btn-outline-danger px-3 m-0 py-1" style={{fontSize:"9px",width:"fit-content"}}>ÇIKIŞ YAP</button>
                            </div>
                        </div>
                        <Link to={"/profilim"}>
                        <div className="top-right h-100  d-flex justify-content-center align-items-center gap-2 flex-column px-3  profile-section-element" style={{backgroundColor:"#161820",cursor:"pointer"}}>
                            <LuSquarePen  className="fs-2" />
                            <span className="fw-bold" style={{fontSize:"12px"}}>Bilgilerim</span>
                        </div>
                        </Link>
                    </div>
                    <div className="middle-part row g-2 justify-content-between" style={{maxWidth:"18em"}}>
                        
                        <Link to="/siparislerim" className=" col-4 bg-dark d-flex gap-1 flex-column rounded-2 justify-content-center align-items-center text-center profile-section-element" style={{cursor:"pointer",width:'5.5em',minHeight:"5em"}}>
                            <LuSquarePen  className="fs-2" />
                            <span className="fw-bold" style={{fontSize:"12px"}}>Siparisler</span>
                        </Link>
                        <Link to="/siparislerim" className=" col-4 bg-dark d-flex gap-1 flex-column rounded-2 justify-content-center align-items-center text-center profile-section-element" style={{cursor:"pointer",width:'5.5em',minHeight:"5em"}}>
                            <LuSquarePen  className="fs-2" />
                            <span className="fw-bold" style={{fontSize:"12px"}}>Siparisler</span>
                        </Link>
                        <Link to="/siparislerim" className=" col-4 bg-dark d-flex gap-1 flex-column rounded-2 justify-content-center align-items-center text-center profile-section-element" style={{cursor:"pointer",width:'5.5em',minHeight:"5em"}}>
                            <LuSquarePen  className="fs-2" />
                            <span className="fw-bold" style={{fontSize:"12px"}}>Siparisler</span>
                        </Link>

                        <Link to="/siparislerim" className=" col-4 bg-dark d-flex gap-1 flex-column rounded-2 justify-content-center align-items-center text-center profile-section-element" style={{cursor:"pointer",width:'5.5em',minHeight:"5em"}}>
                            <LuSquarePen  className="fs-2" />
                            <span className="fw-bold" style={{fontSize:"12px"}}>Siparisler</span>
                        </Link>
                        <Link to="/siparislerim" className=" col-4 bg-dark d-flex gap-1 flex-column rounded-2 justify-content-center align-items-center text-center profile-section-element" style={{cursor:"pointer",width:'5.5em',minHeight:"5em"}}>
                            <LuSquarePen  className="fs-2" />
                            <span className="fw-bold" style={{fontSize:"12px"}}>Siparisler</span>
                        </Link>
                        <Link to="/siparislerim" className=" col-4 bg-dark d-flex gap-1 flex-column rounded-2 justify-content-center align-items-center text-center profile-section-element" style={{cursor:"pointer",width:'5.5em',minHeight:"5em"}}>
                            <LuSquarePen  className="fs-2" />
                            <span className="fw-bold" style={{fontSize:"12px"}}>Siparisler</span>
                        </Link>
                        <Link to="/siparislerim" className=" col-4 bg-dark d-flex gap-1 flex-column rounded-2 justify-content-center align-items-center text-center profile-section-element" style={{cursor:"pointer",width:'5.5em',minHeight:"5em"}}>
                            <LuSquarePen  className="fs-2" />
                            <span className="fw-bold" style={{fontSize:"12px"}}>Siparisler</span>
                        </Link>
                        
                    </div>
                </div>

                <div className="right w-100">
                    {props.section}
                </div>
            </div>
        </div>
    )
}

export default Profile;