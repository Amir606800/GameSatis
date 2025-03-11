import Header from "./layout/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/Sass/main.scss";
import Footer from "./layout/Footer";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donate from "./Pages/Donate";
import NotFoundPage from "./Pages/NotFoundPage";
import { ProductDetails } from "./Pages/ProductDetails";
import Profile from "./Pages/Profile";
import AuthContent from "./components/Auth/AuthContent";
import Wrapper from "./Addons/Wrapper";
import Additionals from "./Addons/Additionals";
import ForgotPassword from "./components/Auth/ForgotPassword";
import EmailConfirmation from "./components/Auth/EmailConfirmation";
import Oyunlar from "./Pages_Category/Oyunlar";
import OyunlarSubCat from "./Pages_Category/OyunlarSubCat";
import Productlar from "./Pages_Category/Productlar";
import Informations from "./Pages_Dashboard/Informations";
import Siparisler from "./Pages_Dashboard/Siparisler"; 
import AddElan from "./Pages_Dashboard/AddElan";
import ListElan from "./Pages_Dashboard/ListElan";
import Cart from "./Pages/Cart";
import Feedbacks from "./Pages_Dashboard/Feedbacks";
import Favoriler from "./Pages_Dashboard/Favoriler";
import Satici from "./Pages/Satici";
import Magaza from "./Pages/Magaza";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Additionals />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/:slugName" element={<ProductDetails />}></Route>
          <Route path="/oyunlar" element={<Oyunlar />}></Route>
          <Route path="/oyunlar/:sub_name" element={<OyunlarSubCat />}></Route>
          <Route path="/oyunlar/:sub_name/:prod_name" element={<Productlar />}></Route>
          <Route path="/magaza/:userName" element={<Satici />}></Route>
          <Route path="/magaza" element={<Magaza />}></Route>
          <Route path="/hakkimizda" element={<AboutUs />}></Route>
          <Route path="/iletişim" element={<Contact />}></Route>

          <Route  path="/profilim" element={ <Wrapper> <Profile section={<Informations />} /> </Wrapper> }></Route>
          <Route  path="/siparislerim" element={   <Wrapper>     <Profile section={<Siparisler />} />     </Wrapper>}></Route>
          <Route  path="/ilan_ekle"  element={    <Wrapper>      <Profile section={<AddElan />} />    </Wrapper>  }></Route>
          <Route  path="/ilanlarim" element={   <Wrapper>     <Profile section={<ListElan />} />   </Wrapper> }></Route>
          <Route  path="/yorumlarim"  element={    <Wrapper>      <Profile section={<Feedbacks />} />    </Wrapper>  }></Route>
          <Route  path="/favoriler"  element={    <Wrapper>      <Profile section={<Favoriler />} />    </Wrapper>  }></Route>

          <Route path="/giris-yap" element={<AuthContent modalmi={false} />}></Route>
          <Route path="/sifremi-unuttum" element={<ForgotPassword />}></Route>
          <Route path="/email-confirm" element={<EmailConfirmation />}></Route>

          <Route path="/cart" element={<Cart />}></Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
