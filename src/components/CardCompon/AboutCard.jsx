import React, { useContext } from "react";
import { SettingsContext } from "../../Context/SettingsProvider";
import { useTranslate } from "../../helpers/Language/Translator";

const AboutCard = () => {
  const {lang} = useContext(SettingsContext)
  const t = useTranslate();
  return (
    <div className="card border-0">
      <div
        className="card-head p-3 rounded-3 h5 text-white"
        style={{ backgroundColor: "#121318" }}
      >
        {t("header.siteTitle")}
      </div>
      <div className="card-body overflow-y-scroll" style={{ height: "10em" }}>
        <div id="homepage-desc">
          <div className="about-section-body">
            {lang == "eng" ? (
              <>
                <p>
                  The number of games frequently chosen by gamers around the
                  world and in Turkey is increasing day by day. In this period
                  where competition among users is rapidly growing, you may want
                  to enhance your game characters and account. While playing
                  computer or mobile games, it's possible to take your
                  characters to a different level with additional features such
                  as abilities, costumes, helmets, weapons, etc. These kinds of
                  extra features are generally referred to as items or skins in
                  games. Additionally, to maximize the enjoyment you get from
                  the games you play, you can purchase epins to easily perform
                  certain moves in your games. You can buy these features from
                  within the games or opt for platforms that offer them at more
                  affordable prices. It's possible to acquire these features at
                  lower costs through item sales websites. With our campaigns at
                  Gamesatış, you can buy the items you desire at more affordable
                  prices. Through our Item Buy-Sell service, we provide you the
                  opportunity to buy and sell at much cheaper rates than in-game
                  stores.
                </p>
                <p>
                  The platforms where you will carry out your purchase
                  transactions when buying skins, items, or in-game currency
                  also hold significant importance. On some platforms, purchased
                  skins may not be transferred to accounts, or issues may arise
                  after they are transferred. Therefore, when choosing a site
                  for item sales, it’s crucial to select the most reliable
                  platforms.
                </p>
                <p>
                  You can securely purchase in-game currencies like Gold Bars,
                  Yang/Won, Cabal Alz, which are otherwise impossible to buy
                  within the game, and start using them instantly through our
                  website. Users who buy items, skins, and in-game currency from
                  our site experience no problems with their accounts during
                  their transactions. Some of the games we offer items and skins
                  for include:
                </p>
                <ul>
                  <li>Knight Online Items</li>
                  <li>Knight Online Ring</li>
                  <li>Metin2 Items</li>
                  <li>CS2 Skins</li>
                  <li>Dota2 Skins</li>
                  <li>Rust Skins</li>
                </ul>
                <p>
                  Apart from these games, we strive to offer various skins and
                  items for many other games. With frequent large-scale
                  campaigns, you'll have the opportunity to acquire these at
                  even more affordable prices.
                </p>
                <h2>Reliable Game Account Purchase</h2>
                <p>
                  Since most games are competitive, the higher the level of your
                  account in the game, the better your opponents will be. Many
                  gamers therefore seek professional game accounts to face
                  stronger opponents and play their games at an advanced level.
                  Our site brings together people looking to sell accounts and
                  those wanting to buy accounts. All listed accounts are
                  problem-free, and thanks to our site's guarantee, you can
                  complete your transactions without any issues. Hence, whether
                  you're selling or purchasing a game account, you can benefit
                  from our services by choosing our platform.
                </p>
                <p>
                  At Gamesatış, we provide our members the opportunity to create
                  stores. This way, individuals wishing to sell accounts can
                  list their account details and put them up for sale. Our site
                  acts as a platform ensuring secure trade for all its users.
                  Thus, neither sellers nor buyers will encounter any losses
                  during transactions.
                </p>
                <h2>Cheap Game Purchase</h2>
                <p>
                  When there's a game you want to play, you look for ways to buy
                  it at the most affordable prices. While researching where to
                  make your purchases, you’ll find that our site offers the best
                  deals. The games available for purchase on our site include:
                </p>
                <ul>
                  <li>Black Desert Online</li>
                  <li>Knight Online</li>
                  <li>Pubg Mobile</li>
                  <li>CS2 Counter Strike 2</li>
                  <li>Rust Skin</li>
                  <li>Dota 2</li>
                  <li>League of Legends</li>
                  <li>Valorant</li>
                  <li>Oasis Game</li>
                  <li>Free Fire</li>
                  <li>Metin 2</li>
                  <li>Point Blank</li>
                  <li>Silkroad Online</li>
                  <li>Zula Online</li>
                  <li>Fifa 20</li>
                  <li>Fifa 21</li>
                  <li>Blizzard Battle.Net</li>
                  <li>Travian Games</li>
                  <li>Fortnite</li>
                  <li>Legends of Runeterra</li>
                  <li>PlayStation Network</li>
                  <li>BomBom</li>
                  <li>Bigpoint Games</li>
                  <li>Aeria Games</li>
                  <li>Apex Legends – PC</li>
                  <li>Hounds The Last Hope</li>
                  <li>Battle Teams 2</li>
                  <li>Rigor Z</li>
                  <li>Cross Fire</li>
                  <li>Cabal Online</li>
                  <li>Tango Live</li>
                  <li>Smite Online</li>
                  <li>Habbo</li>
                  <li>Istanbul Apocalyptic Time</li>
                  <li>Conquer Online</li>
                  <li>Klanlar.org</li>
                  <li>Roblox</li>
                  <li>Borderlands 3</li>
                  <li>Metro Exodus</li>
                  <li>Minecraft</li>
                  <li>Age of Empires Definitive Edition</li>
                  <li>Football Manager 2021</li>
                  <li>Conqueror’s Blade</li>
                  <li>Genshin Impact</li>
                  <li>FaceIT</li>
                </ul>
                <p>
                  We ensure that we offer all the popular games played in Turkey
                  on our site. Through our cheap game purchase opportunities,
                  you can place your orders at the most affordable prices
                  whenever you wish to play. Since the games are offered at
                  reasonable prices on our site, you can always place your
                  orders. Your orders will be transferred to your accounts
                  promptly, allowing you to start playing without delay.
                </p>
                <h2>Choosing a Site When Buying Games</h2>
                <p>
                  When opting to buy games, it's important to be cautious about
                  which sites you choose. Just like in item sales, you need to
                  select trustworthy platforms for account and game sales.
                  Otherwise, the games you purchase may not be transferred to
                  your account immediately, preventing you from playing. People
                  who choose our site for buying games will notice that the
                  services we provide include:
                </p>
                <ul>
                  <li>
                    Fast and trouble-free delivery. Deliveries within the game
                    are carried out between 9:00 AM and 2:00 AM.
                  </li>
                  <li>Secure shopping with SSL guarantees and 3D Secure.</li>
                  <li>More affordable prices compared to other sites.</li>
                  <li>High customer satisfaction.</li>
                </ul>
                <p>
                  Thanks to our cheap game purchase services, you can acquire
                  the games you wish to play at the most affordable prices.
                  Especially if you place your orders during our customer
                  service's active hours (9:00 AM to 2:00 AM), your purchase
                  processes will be completed quickly.
                </p>
              </>
            ) : (
              <>
                <p>
                  Dünyada ve Türkiye’de oyun severler tarafından sıklıkla tercih
                  edilen oyunların sayısı gün geçtikçe artmaktadır. Kullanıcılar
                  arası rekabetin de hızla artığı bu dönemde oyun
                  karakterlerinizi ve hesabınızı geliştirmek isteyebilirsiniz.
                  Bilgisayar veya mobil oyunları oynayacağınız sırada ek
                  özelliklerle beraber karakterlerinizi yetenek, kostüm, kask,
                  silah gibi ek özelliklerle farklı bir boyuta taşımanız
                  mümkündür. Oyunlarda genellikle bu tarz ek özelliklere item
                  veya skin denir. Bunların yanı sıra oynadığınız oyundan
                  alacağınız keyfi maksimuma çıkarmak için epin alma yoluna
                  gidebilir, oyunlarınızdaki bazı hamleleri kolaylıkla
                  gerçekleştirirsiniz. Bu tarz özellikleri oyunlardan satın
                  alabileceğiniz gibi daha uygun fiyatlara satın alabilme adına
                  farklı platformları da deneyebilirsiniz. Item satış
                  sitelerinden bu tarz özellikleri daha uygun fiyatlara
                  alabilmeniz mümkündür. Gamesatış olarak sizlere yaptığımız
                  kampanyalarımızla beraber istediğiniz item’ları daha uygun
                  fiyatlardan alırsınız. Sizlere sunduğumuz Item sat hizmetimiz
                  ile, oyun içerisindeki mağazalardan çok daha uygun fiyatlara
                  sitemizden alma-satma imkanı sağlarız.
                </p>
                <p>
                  Skin, item, oyun parası alacağınız sırada satın alma
                  işlemlerinizi yerine getireceğiniz platformlar da çok ciddi
                  bir önem arz eder. Bazı platformlarda siparişi verilen
                  skin’lerin hesaplara aktarılmadığı veya aktarıldıktan sonra
                  hesaplarda sorun çıkarıldığı görülebilmektedir. Bu yüzden item
                  satışı yapılacak olan siteler arasından birisini tercih
                  edeceğiniz sırada mutlaka en güvenilir olan platformları
                  tercih etmeniz gerekir.
                </p>
                <p>
                  Gold bar, Yang/Won, Cabal Alz gibi oyun içerisinden satın
                  almanızın mümkün olmadığı oyun paralarını da sitemiz aracılığı
                  ile güvenle alabilir ve anında kullanmaya başlayabilirsiniz.
                  Sitemizden item, skin ve oyun parası alma yoluna giden kişiler
                  hesaplarında hiçbir problemle karşılaşmadan siparişlerini
                  verebilmektedir. Sitemizde item ve skin sunmuş olduğumuz bazı
                  oyunlar şu şekildedir:
                </p>
                <ul>
                  <li>Knight online item</li>
                  <li>Knight online ring</li>
                  <li>Metin2 item</li>
                  <li>CS2 skin</li>
                  <li>Dota2 skin</li>
                  <li>Rust Skin</li>
                </ul>
                <p>
                  Bu oyunlar dışında birçok oyunda sizlere çeşitli skin ve
                  item’ları sunmaya özen gösteriyoruz. Sıklıkla düzenlediğimiz
                  büyük kampanyalarla bunları daha uygun fiyatlara alabilme
                  imkanınız da bulunacaktır.
                </p>
                <h2>Güvenilir Oyun Hesabı Satın Alma</h2>
                <p>
                  Oyunların büyük bir bölümü rekabet gerektiren oyunlar olduğu
                  için oyundaki hesabınızın seviyesi ne kadar ilerdeyse
                  rakipleriniz de o kadar iyi olacaktır. Oyun severlerin büyük
                  bir bölümü bu yüzden iyi rakiplerle karşılaşarak oyunlarını
                  ileri seviyede oynayabilme adına profesyonel oyun hesapları
                  aramaktadır. Sitemiz <strong>hesap satışı</strong> yapacak
                  olan kişilerle hesap satın almak isteyen kişileri bir araya
                  getirmektedir. Yer alan hesapların hepsi sorunsuz hesaplar
                  olduğu gibi alış satış işlemlerinizde sorun yaşanmaması adına
                  sitemizin güvencesi altında bu işlemleri yerine getirebilmeniz
                  mümkündür. Bu yüzden hem hesap satışlarınızı yapmak
                  istediğiniz sırada hem de <strong>hesap satın al</strong>{" "}
                  yoluna gideceğiniz evrede sitemizi tercih ederek hizmetlerden
                  faydalanabilmeniz mümkündür.
                </p>
                <p>
                  Gamesatış olarak üyelerimize mağaza oluşturabilme imkanı
                  sağlıyoruz. Bu şekilde <strong>hesap satmak</strong> isteyen
                  kişiler hesaplarının özelliklerini belirterek satışa koyabilme
                  imkanına sahip olur. Sitemiz altyapı olarak bütün üyelerine
                  güvenilir ticaret sağlayan bir platform konumundadır. Bu
                  yüzden gerek satışlarını yapacak olan kişiler gerekse alım
                  yapacak olanlar alışveriş esnasında bir mağduriyetle karşı
                  karşıya kalmayacaktır.
                </p>
                <h2>Ucuz Oyun Satın Alma</h2>
                <p>
                  Oynamak istediğiniz bir oyun olduğu zaman bunu en uygun
                  fiyatlardan alabilmek için araştırma yoluna gidersiniz.{" "}
                  <strong>Oyun satın al</strong> işlemlerinin yapılabilmesi
                  adına araştırma yaparken en uygun fiyatların sitemizde sizlere
                  sunulmaktadır. Sitemizde yer alan ve satın alımlarınızı
                  gerçekleştirebileceğiniz oyunlar şu şekildedir:
                </p>
                <ul>
                  <li>Black Desert Online</li>
                  <li>Knight Online</li>
                  <li>Pubg Mobile</li>
                  <li>CS2 Counter Strike 2</li>
                  <li>Rust Skin</li>
                  <li>Dota 2</li>
                  <li>League of Legends</li>
                  <li>Valorant</li>
                  <li>Oasis Game</li>
                  <li>Free Fire</li>
                  <li>Metin 2</li>
                  <li>Point Blank</li>
                  <li>Silkroad Online</li>
                  <li>Zula Online</li>
                  <li>Fifa 20</li>
                  <li>Fifa 21</li>
                  <li>Blizzard Battle.Net</li>
                  <li>Travian Games</li>
                  <li>Fortnite</li>
                  <li>Legends of Runeterra</li>
                  <li>PlayStation Network</li>
                  <li>BomBom</li>
                  <li>Bigpoint Games</li>
                  <li>Aeria Games</li>
                  <li>Apex Legends – PC</li>
                  <li>Hounds The Last Hope</li>
                  <li>Battle Teams 2</li>
                  <li>Rigor Z</li>
                  <li>Cross Fire</li>
                  <li>Cabal Online</li>
                  <li>Tango Live</li>
                  <li>Smite Online</li>
                  <li>Habbo</li>
                  <li>İstanbul Kıyamet Vakti</li>
                  <li>Conquer Online</li>
                  <li>Klanlar.org</li>
                  <li>Roblox</li>
                  <li>Borderlands 3</li>
                  <li>Metro Exodus</li>
                  <li>Minecraft</li>
                  <li>Age of Empires Definitive Edition</li>
                  <li>Football Manager 2021</li>
                  <li>Conqueror’s Blade</li>
                  <li>Genshin Impact</li>
                  <li>FaceIT</li>
                </ul>

                <p>
                  Sitemizde sizlere Türkiye’de severek oynanmakta olan bütün
                  oyunları sunmaya dikkat ediyoruz.{" "}
                  <strong>Ucuz oyun satın al</strong> imkanlarımızla beraber bu
                  oyunları oynamak istediğiniz noktada sitemizden satın
                  alımlarınızı en uygun fiyatlardan yerine getirebilirsiniz.
                  Oyunlar sizlere sitemizde uygun fiyatlardan sunulmakta
                  olduğundan dolayı her zaman istediğiniz oyunların
                  siparişlerini verebilirsiniz. Siparişleriniz en kısa süre
                  içerisinde hesaplarınıza aktarılacağından dolayı beklemeden
                  oynama yoluna gidebilme imkanınız da bulunacaktır.
                </p>
                <h2>Oyun Satın Alırken Site Seçimi</h2>
                <p>
                  <strong>Oyun satın al</strong> yoluna gidilmesi sırasında site
                  seçimlerinizde dikkatli olmanız gerekir. Item satışlarında
                  olduğu gibi hesap ve oyun satışları noktasında da güvenilir
                  platformları seçmeniz gerekir. Aksi takdirde satın alımlarını
                  gerçekleştireceğiniz oyunlar hemen hesabınıza transfer
                  edilmeyeceğinden dolayı oynayamayabilirsiniz.{" "}
                  <strong>Oyun satın almak</strong> için sitemizi tercih etmekte
                  olan kişiler kendilerine sunmuş olduğumuz hizmetlerimizin
                  aşağıdaki gibi olduğunu görebilir:
                </p>
                <ul>
                  <li>
                    Hızlı ve sorunsuz teslimat. Oyun içerisinde yapılan
                    teslimatlarınız sabah 09.00 ile gece 02.00 arasında
                    gerçekleştirilmektedir.
                  </li>
                  <li>
                    SSL güvencesi ve 3D Secure ile korunmakta olan güvenli
                    alışverişler
                  </li>
                  <li>
                    Diğer sitelere göre daha uygun fiyatlar üzerinden hizmet
                  </li>
                  <li>Yüksek müşteri memnuniyeti</li>
                </ul>

                <p>
                  Ucuz oyun al hizmetlerimiz sayesinde oynamak istediğiniz
                  oyunları en uygun fiyatlardan alarak değerlendirebilmeniz
                  mümkündür. Özellikle siparişlerinizi müşteri hizmetlerimizin
                  aktif olduğu sabah 09.00 ilen gece 02.00 arasında sipariş
                  verdiğiniz takdirde satın alma işlemleriniz kısa süre
                  içerisinde tamamlanacaktır.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
