import React from "react";
import ProductCard from "../components/CardCompon/ProductCard";
import { GoVerified } from "react-icons/go";
import Path from "../Addons/Path";

const Magaza = () => {
  return (
    <div className="container-fluid ">
      <Path />
      <div className="text-center mb-5">
        <img
          src="https://www.gamesatis.com/assets/gamesatis/gmslogo-13-5aaf6824ac956e8a20cec415a8c0ffcf8d5ca389a9ca005acf344fc9e6fab2d4.svg"
          width={300}
          alt="Logo"
        />{" "}
      </div>
      <div className="text-center mt-4">
        <img
          src="https://www.gamesatis.com/assets/store/stores-slogan-d8e0dc8a612dfc7d4ebf0795360d6ed97a1a90d20628ab394c7f609f1ffe73b5.png"
          width={1000}
          alt="Logo"
        />{" "}
      </div>
      <div className=" bg-custom p-4 rounded-2 mb-5 mt-4">
        <div id="about-stores" className="">
          <h1
            style={{ textAlign: "center", color: "white", fontSize: "1.75rem" }}
          >
            <font color="#29a3dc">Oyuncu Pazarı Mağaza Yönetimi</font>
          </h1>
          <p>
            <br />
            GameSatış&nbsp;kullanıcılarının birbirleri arasında alışveriş
            yapmasını sağlayan ve GameSatış’ın alıcı ve satıcı arasında köprü
            görevi gördüğü bir alışveriş sistemidir.
          </p>
          <p>
            Tüm oyuna dair içeriklerinizi ilana ekleyerek satışını
            yapabileceğiniz ve anında emeğinizi nakite çevirebileceğiniz bir
            sistemdir. Oyun hesapları, oyun paraları, oyun keyleri, skin, item,
            boost ve bir çok ürünü uygun fiyatlara satın alabilir ya da bu
            ürünlerden sizler de satabilirsiniz.
          </p>
          <p>
            <img
              alt="Mağaza Oluştur / İlan Ekle / Satılsın / Teslim Et / Paran Hesabında"
              className="d-block mx-auto mw-100 my-5"
              src="https://www.gamesatis.com/assets/store/magaza-olustur-ilan-ekle-satilsin-teslim-et-paran-hesabinda-72a540bbdb0f9adf81f208f8b1251827323de88daef6bd98f922fbae99547a4b.png"
            />
          </p>
          <p>
            PUBG Mobile Hesap, CS:GO Skin, Knight Online Item, Valorant Hesap,
            League of Legends Hesap, Steam Random Key ve buna benzer birçok
            ürünü bulabileceğiniz oyuncu pazarı tüm kullanıcılar için en ucuz
            fiyatlar ve teslimat sonrası tarafınızca onaylanana kadar GameSatış
            tarafından bakiye güvencesi ile hizmetinize sunulmuştur.
          </p>
          <div className="row w-50 m-auto g-3 my-3">
            <div className="col-6  d-flex justify-content-evenly align-items-center gap-2">
              <img
                width={120}
                alt="100.000’den Fazla Ürün Satışı"
                src="https://www.gamesatis.com/assets/store/yuz-binden-fazla-urun-satisi-e4e7ff285163f2ed93662b75bdc0c50d054b2d5631b752b871f2ea9e65c27ec7.png"
              />
              <div className="d-flex flex-column fw-bold">
                100.000’den Fazla
                <br />
                Ürün Satışı
              </div>
            </div>
            <div className="col-6  d-flex justify-content-evenly align-items-center gap-2">
              <img
                width={120}
                alt="100’ü Geçkin Başarılı Mağaza"
                src="https://www.gamesatis.com/assets/store/yuzu-geckin-basarili-magaza-ab36b7e2353bfff2222e99bdb2613380ac1072dc6af2d36bf7af9a823f001a09.png"
              />
              <div className="d-flex flex-column fw-bold">
                100’ü Geçkin
                <br />
                Başarılı Mağaza
              </div>
            </div>
          </div>
          <div className="row w-50 m-auto g-3 my-3">
            <div className="col-6  d-flex justify-content-evenly align-items-center gap-2">
              <img
                width={120}
                alt="99+ Farklı Ürün Çeşidi"
                src="https://www.gamesatis.com/assets/store/99-farkli-urun-cesidi-8bb4ffccba306e3cc0f72e3010f26263326e28ec04816ff566a1d5ad69322d78.png"
              />
              <div className="d-flex flex-column fw-bold">
                99+ Farklı
                <br />
                Ürün Çeşidi
              </div>
            </div>
            <div className="col-6  d-flex justify-content-evenly align-items-center gap-2">
              <img
                width={120}
                alt="Müşteri Memnuniyeti"
                src="https://www.gamesatis.com/assets/store/musteri-memnuniyeti-3dd0c6726e196ba82f6f7c4d09164aee07aaad69bf7eeea4c9dcccbdd6bf6d61.png"
              />
              <div className="d-flex flex-column fw-bold">
                Müşteri
                <br />
                Memnuniyeti
              </div>
            </div>
          </div>
          <p>
            GameSatış Oyuncu Pazarı siz kullanıcılarımızın rahat oyun içeriği
            satabilmesi, elinizdeki ürünleri hızlıca nakite çevirme fırsatı ve
            güvenilir mağazalar ile alıcılara ucuza hızlı alışveriş imkanı
            sunar. Oyuncu pazarı satışlarında GameSatış yalnızca aracılık
            yapmaktadır. Ödemenin güvenli bir şekilde alıcıdan satıcıya
            aktarılmasını sağlar. Başarılı satışların ardından garanti
            vermemektedir. Alıcı alışverişi tamamladıktan sonra tüm sorumluluk
            kendisine aittir.
          </p>
          <hr />
          <h2 style={{ textAlign: "center" }}>
            <font color="#29a3dc">Nasıl Mağaza Açabilirim?</font>
          </h2>
          <p>&nbsp;</p>
          <p>
            GameSatış Oyuncu Pazarı’nda Mağaza oluşturarak sizler de ilan
            ekleyebilir ve ürününüzün satışını gerçekleştirebilirsiniz.
          </p>
          <p>
            <b>
              <a href="/profilim">
                <font color="#29a3dc">Profilim</font>
              </a>
            </b>
            &nbsp;sayfasındaki{" "}
            <strong>
              <a href="/magaza-panelim">
                <font color="29a3dc">Mağazam</font>
              </a>
            </strong>{" "}
            sekmesi üzerinden <strong>Düzenle</strong>&nbsp;butonuna
            tıklayıp,&nbsp;Oyuncu Pazarı üzerinde mağazanızı temsil edecek bir
            isim belirleyebilirsiniz.
          </p>
          <p>
            <font color="#02bb02">
              <strong>NOT</strong>:
            </font>{" "}
            Mağaza isminizi bir kez belirleyebilirsiniz.&nbsp;Belirlenen mağaza
            ismi daha sonra değiştirilemez veya devredilemez.
          </p>
          <p style={{ textAlign: "center" }}>
            <img
              alt="Mağaza Oluşturma"
              src="https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/app/public/content/3286/content_magaza-olusturma.jpg"
              style={{ width: "80%", maxWidth: 800 }}
            />
          </p>
          <p>
            Mağaza oluşturduktan sonra{" "}
            <strong>
              <a href="/ilan_ekle">
                <font color="#02bb02">Satış Yap</font>
              </a>
            </strong>
            &nbsp;butonuna tıklayıp ya da&nbsp;
            <b>
              <a href="/profilim">
                <font color="#29a3dc">Profilim</font>
              </a>
            </b>
            &nbsp;sayfası kısmından&nbsp;
            <strong>
              <font color="#29a3dc">İlan Ekle</font>
            </strong>
            &nbsp;sekmesi üzerinden satmak istediğiniz ürününüz için ilan
            oluşturabilirsiniz. İlanınız, seçtiğiniz&nbsp;oyun kategorisi
            üzerinde&nbsp;ve Oyuncu Pazarı sayfasında görüntülenecektir.
          </p>
          <p style={{ textAlign: "center" }}>
            <img
              alt="İlan Ekleme"
              src="https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/app/public/content/3287/content_Sat%C4%B1%C5%9F_yapma_2.jpg"
              style={{ width: "80%", maxWidth: 800 }}
            />
          </p>
          <p>
            GameSatış Oyuncu Pazarı’nda eklemiş olduğunuz ilanlarınızı,{" "}
            <a href="/ilanlarim">
              <strong>
                <font color="#29a3dc">İlanlarım</font>
              </strong>
            </a>{" "}
            sayfası üzerinden öne çıkartabilir ve&nbsp;ürünlerinizin hızlıca
            satılmasını sağlayabilirsiniz.
          </p>
          <section className="m-0 p-0">
            <div
              className="row m-auto"
              style={{ width: "95%", justifyContent: "center", margin: "-8px" }}
            >
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3 col-xl-2 product-card t"
                >
                  <div className="card bg-custom prod-card rounded-3 overflow-hidden h-100">
                    <div className="card-img mb-4 position-relative text-center">
                      <div
                        className="vitrin z-1 w-auto position-absolute translate-middle-x fw-bold px-3 pb-1 rounded-bottom-3 start-50"
                        style={{
                          fontSize: "12px",
                          minWidth: "100px",
                        }}
                      />

                      <img
                        src="https://www.gamesatis.com/assets/store/ornek-ilan-resmi-15b9ac749bc4979a4fade6a1605e69a0ba3f5024b74e0e47df95a0d871831bbd.jpg"
                        className="w-100"
                        height={140}
                        alt=""
                      />
                      <div
                        className="manufacturer z-1 fw-bold rounded-2 position-absolute bg-white px-5 start-50 translate-middle-x text-success"
                        style={{ bottom: "-10px", width: "100%" }}
                      >
                        <div
                          className="d-flex flex-row w-100 py-2"
                          style={{ fontSize: "12px" }}
                        >
                          Örnek bir item
                        </div>
                      </div>

                      <div className="details position-absolute h-100 translate-middle justify-content-center align-items-center top-50 start-50 w-100">
                        <div className=" bg-white text-black py-1 px-2 rounded-2 fw-bold z-2">
                          Detaylar
                        </div>
                        <div className="background-details"></div>
                      </div>
                    </div>
                    <div className="card-head text-start h6 px-2"></div>
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div className="verf text-success">
                        <GoVerified />
                      </div>
                      <div className="price">1234TL</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <p>&nbsp;</p>
          <hr />
          <h2 style={{ textAlign: "center" }}>
            <font color="#29a3dc">Nasıl Onaylı Mağaza Olabilirim?</font>
          </h2>
          <p>&nbsp;</p>
          <p>
            GameSatış Oyuncu Pazarı’nda <strong>Onaylı</strong> ve{" "}
            <strong>Onaysız</strong> olarak ikiye ayrılan Mağaza çeşitlerimizde
            kullanıcının güvenli alışveriş yapması adına getirilen bir
            sistemdir.
          </p>
          <p>
            Mağaza onayı için talep edildiği şekilde evrak göndermeniz
            gerekmektedir. Göndermeniz gereken fotoğraf selfie şeklinde olup
            Kendinizin, sitede kayıtlı olmuş olduğunuz isim ve TC kimlik
            numarası olan kimliğiniz ve üzerinde gamesatis.com - tarih
            (gün/ay/yıl) yazan bir kağıt bulunmalıdır. Tüm bilgiler okunaklı
            olmadığı takdirde ve gönderdiğiniz evrakta eksik olması
            durumunda&nbsp;mağazanız onaylanmayacaktır.
          </p>
          <p>
            <img
              alt="Mağaza Doğrulama"
              className="d-block mx-auto mw-100 my-5 p-3 border rounded"
              src="https://www.gamesatis.com/assets/magaza-dogrulama-a1cf0d1aca90fcafca1c21ccf8d983a0d566835cf9573a4a5321263d0a9c5ea4.png"
            />
          </p>
          <p>
            GameSatış Oyuncu Pazarı satış başarımları ve kullanıcı yorumları ile
            satın alacağınız ürün için fikir edinmenizi kolaylaştırır. Sitemiz
            üzerinde hizmet sağlayan mağazaların&nbsp;başarılı satış
            oranlarına&nbsp;ve yorumlarına bakarak fikir edinebilir, alışveriş
            yapacağınız mağaza önceliğini başarılı satış oranına göre
            belirleyebilirsiniz.
          </p>
          <p>
            Ürün teslimatını gerçekleştiremeyeceğiniz durumlarda siparişin
            iptalini gerçekleştirebilir, alıcıya para iadesi sağlayabilirsiniz.
          </p>
          <hr />
          <h2 style={{ textAlign: "center" }}>
            <font color="#29a3dc">Sipariş Yönetimi</font>
          </h2>
          <p>&nbsp;</p>
          <p>
            GameSatış Oyuncu Pazarı’na eklenen ilanınız bir kullanıcı tarafından
            satın alındığında sitemiz üzerinden ve SMS olarak bildirim
            sağlanmaktadır. Daha sonra mesaj kutunuza düşen mesaj üzerinden
            teslimat bilgileri tarafınıza iletiliyor. Ürün teslimatını{" "}
            <strong>
              <a href="/mesajlarim">
                <font color="#29a3dc">Mesajlarım</font>
              </a>
            </strong>
            &nbsp;kısmından veya&nbsp;
            <a href="/satislarim">
              <font color="#29a3dc">
                <strong>Satış İşlemlerim</strong>
              </font>
            </a>{" "}
            sekmesi üzerinden{" "}
            <font color="#02bb02">
              <strong>Alıcıyla İletişime Geç</strong>
            </font>{" "}
            butonuna tıklayıp gerçekleştirmeniz gerekmektedir. Ürün teslimatı
            için size tanınan süre belirttiğiniz teslimat saatidir.
          </p>
          <table
            align="center"
            border={0}
            cellPadding={0}
            cellSpacing={0}
            style={{ width: "80%" }}
          >
            <tbody>
              <tr>
                <td>
                  <img
                    alt
                    src="https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/app/public/content/3291/content_Screenshot_3.jpg"
                    style={{ width: "100%" }}
                  />
                </td>
                <td>
                  <img
                    alt
                    src="https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/app/public/content/3290/content_Sipari%C5%9F_2.jpg"
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Satılan ürününüzün&nbsp;bilgilerini alıcınızla paylaştıktan sonra “
            <strong>Teslim Ettim</strong>” butonu ile teslimatınızı
            tamamlıyorsunuz. Alıcınız ürünü teslim aldığını onayladıktan sonra
            satış ücreti site bakiyesi olarak hesabınıza eklenecektir.
            Alıcınızın ürünü onaylaması için ayrılan süre ise{" "}
            <u>
              <strong>48 saat</strong>
            </u>{" "}
            olarak belirlenmiştir. Alıcı satın aldığı ürünü onaylamaz ve satış
            işleminde alıcı sorun bildirmemişse sistem otomatik olarak 48 saat
            sonra satış işlemini onaylayacaktır.
          </p>
          <p>
            İlanınız satıldıktan sonra teslimat için belirtmiş olduğunuz
            süre&nbsp;içerisinde&nbsp;teslim etme hakkınız vardır. Bu süre
            içerisinde geri dönüş yapmaz ve ürünü teslim etmezseniz satışınız
            iptal edilecek,&nbsp;ilanınız yayından kaldırılacaktır ve tarafınıza
            bir adet başarısız satış puanı eklenecektir.. Bunun dışında
            teslimatı yapmadan onay isteyen satıcıların uyarı yapılmadan
            mağazası kapatılır. Başka bir platform&nbsp;
            <strong>( Whatsapp, Discord, Skype vb. )</strong> üzerinden yapılan
            konuşmalar dikkate alınmaz, ürün teslimatları mutlaka GameSatış
            Mesajlar bölümü üzerinden yapılmış olmalıdır.
          </p>
          <hr />
          <h2 style={{ textAlign: "center" }}>
            <font color="#29a3dc">Mağaza Kuralları</font>
          </h2>
          <p>&nbsp;</p>
          <p>
            1. Mağazalar&nbsp;<strong>Onaylı Mağaza&nbsp;</strong>ve{" "}
            <strong>Onaysız Mağaza&nbsp;</strong>olarak ikiye ayrılmıştır.
            Onaylı ve onaysız mağazaların detaylarını aşağıda bulabilirsiniz.
          </p>
          <div className="table-responsive bg-custom">
            <table className="table table-bordered bg-custom">
              <tbody className="bg-custom">
                <tr>
                  <td className="text-center">Mağaza İşlemleri</td>
                  <td className="text-center">
                    <span style={{ color: "#bdc3c7" }}>
                      <strong>Onaysız Mağaza</strong>
                    </span>
                  </td>
                  <td className="text-center">
                    <span style={{ color: "#3498db" }}>
                      <strong>Onaylı Mağaza</strong>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    Ücretsiz İlan Ekleme Hakkı&nbsp;
                  </td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    10
                  </td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    10
                  </td>
                </tr>
                <tr>
                  <td className="text-center">Ücretli İlan Ekleme Hakkı</td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    <strong>
                      <span style={{ color: "#e74c3c" }}>X</span>
                    </strong>
                  </td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    Sınırsız
                  </td>
                </tr>
                <tr>
                  <td className="text-center">Komisyon Oranı (Skin)</td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    %10
                  </td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    %3
                  </td>
                </tr>
                <tr>
                  <td className="text-center">Komisyon Oranı (Item)</td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    %10
                  </td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    %10
                  </td>
                </tr>
                <tr>
                  <td className="text-center">Komisyon Oranı (Diğer)</td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    %10
                  </td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    %10
                  </td>
                </tr>
                <tr>
                  <td className="text-center">Onaylı Mağaza İkonu</td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    <strong>
                      <span style={{ color: "#e74c3c" }}>X</span>
                    </strong>
                  </td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    Var
                  </td>
                </tr>
                <tr>
                  <td className="text-center">İlan Boost</td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    <strong>
                      <span style={{ color: "#e74c3c" }}>X</span>
                    </strong>
                  </td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    Var
                  </td>
                </tr>
                <tr>
                  <td className="text-center">Satış İptal Etme</td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    <strong>
                      <span style={{ color: "#e74c3c" }}>X</span>
                    </strong>
                  </td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    Var
                  </td>
                </tr>
              </tbody>
            </table>
            <p>&nbsp;</p>
          </div>
          <p>
            <strong>*Onaysız Mağazalar:&nbsp;</strong>Yeni özelliklerden
            yararlanamazlar. Bu özelliklerden yararlanmak için mağazalarını
            onaylamaları gerekmektedir.
          </p>
          <p>
            <strong>*İlan Hakkı:&nbsp;</strong>Mağazaların yayında tutabileceği
            ilan sayısıdır.
          </p>
          <ul>
            <li>
              <strong>Onaylanmamış Mağaza;</strong> sadece 10&nbsp;adet ilan
              ekler. (Başka ilan ekleyemez. Eklemek için doğrulama yapması
              gerekir.)
            </li>
            <li>
              <strong>Onaylanmış Mağaza;</strong> sadece 10&nbsp;adet ilan
              ekler. (Ekstra ilan satın alabilir.)
            </li>
          </ul>
          <p>
            <strong>*Ekstra İlan Hakkı:&nbsp;</strong>Mağazanıza tanımlanan ilan
            hakkınızdan daha fazla ilan eklemek için kullanılır.&nbsp;
          </p>
          <p>
            <strong>*İlan Stok Sayısı:&nbsp;</strong>
            <strong>
              <font color="#29a3dc">Gelişmiş Paket</font>
            </strong>{" "}
            ya da{" "}
            <strong>
              <font color="#29a3dc">Uzman Paket</font>
            </strong>{" "}
            sahibi mağazalar stoklu olarak ilan oluşturabilmektedir.{" "}
            <strong>Hesap Satışı</strong> ve <strong>Boost</strong> kategorisi
            için maksimum 5 stok girilebilir.
          </p>
          <p>
            <strong>*İlan Öne Çıkarma:&nbsp;</strong>Mağazalar ilanlarını öne
            çıkartırken dikkat edilmesi gereken hususlar vardır.
          </p>
          <ul>
            <li>
              Öne çıkartılan ilanlar ilgili kategoride en üstte karışık sıra ile
              gösterilir.
            </li>
            <li>
              Öne çıkarılan ilanlar ilgili kategorinin ilk sayfasını tamamen
              doldurabilir. Her sayfa yenilemesinde değişir.
            </li>
            <li>
              Öne çıkarılan ilanlar ilk sayfa dışındaki diğer sayfalarda ve
              arama sonuçlarında vitrin ilanı olarak gözükmez.
            </li>
            <li>
              Öne çıkarılan bir ilan boost süresi dolmadan satılırsa ücret
              iadesi yapılmaz.
            </li>
          </ul>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td className="text-center">
                    <img
                      alt
                      src="https://images.gamesatis.com/assets/store/new-store-icon.svg"
                      style={{ width: 76, height: 42 }}
                    />
                  </td>
                  <td>
                    <strong>- Yeni Mağaza:&nbsp;</strong>Yeni oluşturulmuş,
                    henüz 10 başarılı satış işlemi gerçekleştirmemiş mağazadır.
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <img
                      alt
                      src="https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/app/public/content/2091/content_bronze_icon_1.png"
                    />
                  </td>
                  <td>
                    <strong>- Bronze Mağaza:&nbsp;</strong>10 başarılı satış
                    yapmış olması gerekir.
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <img
                      alt
                      src="https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/app/public/content/2092/content_silver_icon_1.png"
                    />
                  </td>
                  <td>
                    <strong>- Silver Mağaza:&nbsp;</strong>%80 Başarı oranı,en
                    az 250 başarılı satışı ve 5.000TL üzeri toplamda satış
                    yapmış olması gerekir.
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <img
                      alt
                      src="https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/app/public/content/2093/content_gold_icon_1.png"
                    />
                  </td>
                  <td>
                    <strong>- Gold Mağaza:&nbsp;</strong>%80 Başarı oranı,en az
                    500başarılı satışı ve 10.000 TL üzeri toplamda satış yapmış
                    olması gerekir.
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <img
                      alt
                      src="https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/app/public/content/2094/content_master_icon_1.png"
                    />
                  </td>
                  <td>
                    <strong>- Master Mağaza:&nbsp;</strong>%80 Başarı oranı,en
                    az 5000 başarılı satışı ve 100.000 TL üzeri toplamda satış
                    yapmış olması gerekir.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Mağazanızı nasıl onaylayacağınızı görmek için{" "}
            <a href="/magaza-ve-kimlik-dogrulama">
              <font color="#29a3dc">
                <strong>buraya tıklayınız</strong>
              </font>
            </a>
            .
          </p>
          <p>
            <br />
            2. Mağazaların sistem üzerinde satış yapmaya devam etmek için bazı
            kuralları ve şartları güncelledik.
          </p>
          <ul className="ls-disc">
            <li>
              Mağazalar ilan güncellemeleri ile ilanlarını üst sıralara
              çıkarmayacaktır.
            </li>
            <li>
              Satıcı onaylı&nbsp;mağaza ise isterse satış işlemleri&nbsp;menüsü
              üzerinden teslim edemediği siparişi iptal edebilir. Bu işlem Alıcı
              kaynaklı olur ve başarısız işlem sayısı eklenmez.
            </li>
            <li>
              Alıcı satın aldığı ürünü onaylamaz ve satış işleminde alıcı sorun
              bildirmemişse sistem otomatik olarak 48 saat sonra satış işlemini
              onaylayacaktır.
            </li>
            <li>
              Alıcıya verilen 48 saat kontrol süresi alıcı tarafından sonuna
              kadar kullanılabilir. Bu konu hakkında satıcı mağazaların
              alıcılara bildirim göndermesi yasaktır.
            </li>
            <li>
              Satılan hesabın kanıtlanmış bir şekilde geri alınması durumunda
              mağazanız kapatılır.
            </li>
            <li>
              Kullanıcıların mağdur bırakılmasına sebebiyet verecek şekilde aynı
              hesap/ürün satışı yasaktır. Tespiti halinde mağazanız kalıcı
              olarak kısıtlanır ve geri dönüşü mümkün olmamaktadır.
            </li>
            <li>
              Kullanıcıları mesaj üzerinden farklı platformlara yönlendirmek, bu
              platformlardaki toplu grup ve sunuculara davet etmek yasaktır.
              Tespiti halinde mağaza kısıtlanacaktır.&nbsp;
            </li>
            <li>
              Satıcılara mesaj atarak rahatsızlık vermek yasaktır. (Küfür,
              hakaret, tehdit vb.) Tespiti halinde mağazanız kapatılır ve hiç
              bir ürün için mesaj gönderemezsiniz.
            </li>
            <li>
              Başarılı satış oranınız %50 nin altına düşerse hesabınız
              incelemeye alınır ve gerekli görülürse mağazanız kapatılır.
            </li>
            <li>
              Teslimatı yapmadan onay isteyen satıcıların uyarı yapılmadan
              mağazası kapatılır.
            </li>
            <li>
              Birden fazla hesap kullanan mağazaların tespiti halinde GameSatış
              bilgi vermeden hesapları kapatma hakkını gizli tutar.&nbsp;
            </li>
            <li>
              Türk&nbsp;vatandaşlığı olmayan,&nbsp;farklı ülke konumları ve
              telefon numaraları ile üyelikte işlem yapan kullanıcılar mağaza
              oluşturamaz, mevcut mağaza var ise mağazası kapatılır.
            </li>
            <li>
              Satış işlemleri mesaj yolu ile site üzerinden yapılmalıdır. Başka
              bir platform&nbsp;( Whatsapp, Discord, Skype vb.) üzerinden
              yapılan konuşmalar dikkate alınmaz. Tespiti halinde mağazanız
              kapatılır.
            </li>
            <li>
              30 gün boyunca satılmayan ve güncellenmeyen ilanlar yayından
              otomatik olarak kaldırılır. (İlan ücreti ödenmiş olsa bile.)
            </li>
            <li>
              Mağazalar kendi ilanlarının satın alımlarını yapamaz.&nbsp;Tespiti
              halinde başarılı satış ve yorumları silinir. Gerek görülürse
              mağazalara kısıtlama uygulanır.
            </li>
            <li>
              Mağazalar üyeliklerini kapatabilmesi için son başarılı satış
              süresinden 30 gün geçmiş olması gerekmektedir.
            </li>
            <li>
              Alıcı veya satıcıların farklı site adı geçirmesi yasaktır.&nbsp;
            </li>
          </ul>
          <p>
            <span style={{ fontSize: 16 }}>
              Bu güncellemeler ile sizlere daha güzel bir satış ortamı
              oluşturmak için yapılmıştır. İyi satışlar dileriz.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Magaza;
