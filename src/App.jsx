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
import Oyunlar from "./Pages/CategoryPages/Oyunlar";
import Profile from "./Pages/Profile";
import Informations from "./components/DashboardPages/Informations";
import Siparisler from "./components/DashboardPages/Siparisler";
import AuthContent from "./components/Auth/AuthContent";
import Wrapper from "./Addons/Wrapper";
import Additionals from "./Addons/Additionals";
import OyunlarSubCat from "./Pages/CategoryPages/OyunlarSubCat";
import Productlar from "./Pages/CategoryPages/Productlar";

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
          <Route
            path="/oyunlar/:sub_name/:prod_name"
            element={<Productlar />}
          ></Route>
          {""}
          <Route
            path="/profilim"
            element={
              <Wrapper>
                <Profile section={<Informations />} />
              </Wrapper>
            }
          >
            {" "}
          </Route>
          <Route
            path="/siparislerim"
            element={
              <Wrapper>
                <Profile section={<Siparisler />} />
              </Wrapper>
            }
          ></Route>
          <Route
            path="/giris-yap"
            element={<AuthContent modalmi={false} />}
          ></Route>
          {""}
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
