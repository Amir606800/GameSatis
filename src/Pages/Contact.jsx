import React from "react";
import hakkimizdaPhoto from "../assets/Images/hakkimizda.png";
import Path from "../components/Path";
import Lent from "../components/Lent";
const Contact = () => {
  return (
    <div className="container-fluid">
      <img
        style={{ width: "100%" }}
        className="mb-3"
        src={hakkimizdaPhoto}
        alt="GameSatis"
      />
      <Path />
      <div className="card bg-custom mt-4 my-3 border-0">
        <div className="card-head ">
          <Lent
            leftHead="İletişim"
            back={"https://www.gamesatis.com/assets/header-bg-icon-donate.png"}
          />
        </div>
        <div className="card-body text-center d-flex justify-content-center align-items-center flex-column gap-3">
          <h4 className="head">
            <div>
              Canlı destek hizmetimiz ve oyun içi ürün teslimatlarımız 09:00 -
              02:00 saatleri arasında hizmet vermektedir.
            </div>{" "}
            <div>
              Bunun dışında sitemizde yapacağınız e-pin alışverişleri 7 gün 24
              saat otomatik teslim edilmektedir.
            </div>
          </h4>
          <div className="left d-flex flex-column gap-3 align-items-center justify-content-center">
            <h2 className="fw-bold">Adres</h2>
            <div className="d-flex flex-column gap-1">
              <span>Biradım Game LTD.</span>
              <span>SLBT No: 671</span>
              <span>Serbest Liman ve Bölge P.K. 659</span>
              <span>Gazimağusa - K.K.T.C.</span>
            </div>
            <h2 className="fw-bold">Telefon</h2>
            <p>+90 850 532 42 63</p>
            <h2 className="fw-bold">Destek</h2>
            <p>destek@gamesatis.com</p>
          </div>

          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.0773689210337!2d49.84266317515193!3d40.38035567171797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7a06b402f%3A0xd8897cf79ec36111!2s28%20Mall!5e0!3m2!1sen!2saz!4v1741719586347!5m2!1sen!2saz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
