import Header from "./layout/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/Sass/main.scss";
import Footer from "./layout/Footer";
import CanliDestek from "./components/Home/CanliDestek";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donate from "./Pages/Donate";
import NotFoundPage from "./Pages/NotFoundPage";
import { ProductDetails } from "./Pages/ProductDetails";
import ScrollBehaviour from "./components/ScrollBehaviour";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollBehaviour />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/products/:slugName" element={<ProductDetails />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <CanliDestek />
    </>
  );
}

export default App;
