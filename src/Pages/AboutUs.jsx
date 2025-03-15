import React, { useContext } from "react";
import Path from "../Addons/Path";
import Lent from "../Addons/Lent";
import { StreamerContext } from "../Context/StreamerProvider";
import StreamerCard from "../components/CardCompon/StreamerCard";
import Loading from "../Addons/Loading";
import { Link } from "react-router-dom";
import hakkimizdaPhoto from "../assets/Images/hakkimizda.png";
const AboutUs = () => {
  const { streamData } = useContext(StreamerContext);
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
            leftHead="Hakkimizda"
            back={"https://www.gamesatis.com/assets/header-bg-icon-donate.png"}
          />
        </div>
        <div className="card-body">
          <div>
            <header>
              <h1 className="iTitle text-center mb-0 mt-0">Hakkımızda</h1>
            </header>
            <div className="section-content">
              <div>Türkiye'nin En Büyük Oyuncu Pazarı</div>
              <div className="about-us-detail-content">
                <p>
                  <br />
                  GameSatış Dijital Kod (E-pin), Skin, Item hizmetlerinin yanı
                  sıra Hesap Satışı aracılığı hizmeti sunarak, oyuncuyu oyun
                  dünyası ile buluşturan e-ticaret sitesidir. GameSatış ile oyun
                  dünyasındaki pek çok oyuna ait Dijital Kod ürünlerini satın
                  alabilir, oyun hesaplarınızı satabilir ya da yeni bir oyun
                  hesabı satın alabilirsiniz. Yaklaşık 100’den farklı oyunda
                  binlerce oyuncunun isteklerine cevap verecek şekilde
                  tasarlanan GameSatış, 2005 yılından bu yana artan üye sayısı
                  ile birlikte oyuncuların güvenilir alışveriş platformu haline
                  gelmiştir.
                </p>
                <p>
                  <br />
                  GameSatış, her geçen gün kullanıcı dostu güncellemeleri ile
                  birlikte yeniliğe ve teknolojiye ayak uydurarak çalışmaya
                  devam etmektedir. Sabah 09:00, gece 02:00 saatleri arasında
                  hizmet veren Canlı Destek ekibi sayesinde soru ve
                  sorunlarınıza hızlı çözüm bulabilir, 7/24 aldığınız Dijital
                  Kod ürünlerini hesabınıza ekleyebilir, 3D Secure ve SSL imkanı
                  ile güvenilir ve çeşitli ödeme yöntemlerinden yararlanarak
                  alışverişin kolay ve hızlı halini burada bulabilirsiniz.&nbsp;
                </p>
                <p>
                  <br />
                  <strong>Avantajlarımız</strong>
                </p>
                <p>
                  <br />
                  <strong>Oyuncular için Ekonomik Fırsatlar Sağlıyoruz</strong>:
                  Milyonlarca başarılı satış ile 500 binin üzerinde oyuncu
                  finansal gücünü GameSatış’la kazandı.
                </p>
                <p>
                  <br />
                  <strong>Güvenlik ve Garanti</strong>: Oyuncu Pazarı üzerinde
                  alışveriş yapabildiğiniz herkes, hesabının sahipliğini ve
                  gerçekliğini &nbsp;kanıtlamış kişilerdir.&nbsp;
                </p>
                <p>
                  <br />
                  <strong>Gizliliğiniz Önemli</strong>: GameSatış ve kullanıcı
                  arasında doğrulama amacıyla paylaşılan bilgiler diğer
                  kullanıcılar ile hiçbir koşulda paylaşılmaz.
                </p>
                <p>
                  <br />
                  <strong>Anında İşlemler</strong>: Dijital Kod (E-pin) ve
                  çeşitli API teknolojileri ile entegrasyon yapılabilen tüm
                  oyuncu ihtiyaçlarının anında teslim edilmesini sağlayarak
                  oyuncuyu bekletmeden keyifli bir alışveriş deneyimi sunuyoruz.
                </p>
                <p>
                  <br />
                  <strong>Her An Yanınızdayız</strong>: Konusunda deneyimli ve
                  bilgili Canlı Destek personelleri ile her türlü soru ve
                  sorununuzda sizlere destek oluyoruz. Anında soru sorup yanıt
                  alabilir veya Destek Talebi oluşturarak detaylı taleplerde
                  bulunabilirsiniz.&nbsp;
                </p>
                <p>
                  <br />
                  Oyun dünyasından anlık&nbsp;ve daha fazla haber için{" "}
                  <strong>
                    <a
                      href="https://www.facebook.com/gamesatis"
                      target="_blank"
                    >
                      <span style={{ color: "#3498db" }}>Facebook</span>
                    </a>
                  </strong>
                  ,{" "}
                  <strong>
                    <a
                      href="https://www.instagram.com/gamesatis/"
                      target="_blank"
                    >
                      <span style={{ color: "#3498db" }}>Instagram</span>
                    </a>
                  </strong>{" "}
                  ve{" "}
                  <strong>
                    <a href="https://twitter.com/gamesatis" target="_blank">
                      <span style={{ color: "#3498db" }}>Twitter</span>
                    </a>
                  </strong>{" "}
                  hesaplarımızdan bizi takip edebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="streamers my-4">
        <Link to={"/donate"}>
          <Lent
            leftHead={"Yayincilar"}
            rightHead={"Tum Yayincilar"}
            back={"https://www.gamesatis.com/assets/header-bg-icon-donate.png"}
          />
        </Link>
        <div className="row g-3 mt-1">
          {!streamData ? (
            <Loading />
          ) : (
            streamData
              .slice(0, 6)
              .map((item, i) => (
                <StreamerCard
                  key={i}
                  img={item.photo}
                  names={item.name}
                  platform={item.platforms}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
