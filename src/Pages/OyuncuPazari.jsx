import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductsProvider";
import ProductCard from "../components/CardCompon/ProductCard";
import { Slider } from "@mui/material";
import Loading from "../Addons/Loading";
import { CategoryContext } from "../Context/CategoryContext";

const OyuncuPazari = () => {
  const { products, calculateDiscountedPrice } = useContext(ProductContext);
  const {mainCat} = useContext(CategoryContext)
  const [vitrinProducts, setVitrinProducts] = useState([]);
  const [checks,SetChecks] = useState({
    stok:false,
    satici:false,
    games:0
  })
  useEffect(() => {
    const initialFilter = products.filter((item) => item.is_vitrin == true);
    setVitrinProducts(initialFilter);
  }, [products]);

  const [sliderValue, setSliderValue] = useState([170, 300]);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleChecks =(e)=>{
    SetChecks({...checks,[e.target.name]:e.target.checked?true:false})
  }


  const handleFilterSubmit = () => {
    const submitVitrinFilter = products.filter(
      (item) => item.is_vitrin == true
    );
    let filteredProds = submitVitrinFilter.filter(
      (item) =>
        calculateDiscountedPrice(item.price, item.discount) >= sliderValue[0] &&
      calculateDiscountedPrice(item.price, item.discount) <= sliderValue[1]
    );
    if(checks.stok){
      filteredProds = filteredProds.filter((item)=>item.stock !=0)
    }
    if(checks.satici){
      filteredProds = filteredProds.filter((item)=>item.profiles.is_verified == true)
    }
    if(checks.games != 0){
      filteredProds = filteredProds.filter((item)=>item.categories.parent_id == checks.games)
    }
    setVitrinProducts(filteredProds);
  };

  if (products.length == 0) return <Loading />;
  return (
    <div className="container-fluid d-flex flex-row my-4 gap-3">
      <div className="left-filter w-25 d-flex flex-column align-items-center position-sticky top-50 tra " style={{height:"fit-content"}}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFilterSubmit();
          }}
          className="w-100 bg-dark-custom p-2 px-4 rounded-4"
        >
          <div className="fiyat w-100 d-flex flex-column justify-content-center my-3">
            <label className="fs-6 fw-bold mb-2">Fiyat:</label>
            <div className="d-flex flex-row justify-content-between mb-2">
              <label htmlFor="min">Min:</label>
              <input
                id="min"
                name="min"
                onChange={(e) => {
                  setSliderValue([Number(e.target.value), sliderValue[1]]);
                }}
                value={sliderValue[0]}
                style={{ width: "4em" }}
                type="number"
              />
              <label htmlFor="max">Max:</label>
              <input
                id="max"
                name="max"
                onChange={(e) => {
                  setSliderValue([sliderValue[0], Number(e.target.value)]);
                }}
                value={sliderValue[1]}
                style={{ width: "4em" }}
                type="number"
              />
            </div>

            <div className="d-flex justify-content-center">
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={sliderValue}
                min={0}
                max={500}
                sx={{ color: "success.main" }}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="checkboxes d-flex flex-column gap-1">
            <div className="d-flex flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="stok" className="fs-6 fw-bold">Stok: </label>
              <input onChange={(e)=>handleChecks(e)} name="stok" id="stok" type="checkbox" />
            </div>
            <div className="d-flex flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="satici" className="fs-6 fw-bold">Onaylı: </label>
              <input name="satici" onChange={(e)=>handleChecks(e)} id="satici" type="checkbox" />
            </div>
          </div>

          <div className="d-flex flex-row gap-2 mt-3 mb-3">
            <label className="fs-6 fw-bold" htmlFor="games">Oyun: </label>
            <select defaultValue={0} onChange={(e)=>SetChecks({...checks,games:e.target.value})} name="games" id="games">
              <option value={0} > Tüm Oyunlar</option>
              {mainCat.map((item,index)=>(
                <option value={item.id} key={index}>{item.name}</option>
              ))}
            </select>
          </div>
          
          <div className="buton w-100 text-end mb-2">
            <button className="btn btn-success align-self-end">Filtrele</button>
          </div>
        </form>
      </div>
      <div className="right w-100 g-3 row">
        {vitrinProducts.map((item, index) => (
          <ProductCard main={item} key={index} keyIndex={index} vitrinIndex={5} />
        ))}
      </div>
    </div>
  );
};

export default OyuncuPazari;
