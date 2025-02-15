import { useContext } from "react";
import Lent from "../components/Lent";
import Path from "../components/Path";
import { ProductContext } from "../Context/ProductsProvider";

const VitrinShowOFF = ()=>{
    const alphabet = ()=>{
        return Array.from({length:26},(_,i)=>(
            <span className="alphabet-item" key={i}>{String.fromCharCode(65+i)}</span>
        )).reduce((acc,ins)=>[...acc,ins,"-"], []).slice(0,-1);
         
        
    }
    const products = useContext(ProductContext)

    return(
    <div className="container-fluid">
        <Path />
        <div className="image">
        <img
          className="w-100"
          src="https://img.gamesatis.com/assets/category-default-image.webp"
          alt="toop-banner"
        />
      </div>
      <div className="heading h5">Tüm Oyunlar</div>
        <div className="my-4">
            <Lent 
            center={true}
            back={"https://www.gamesatis.com/assets/header-bg-icon-game.png"} 
            leftHead={
            <>
            {alphabet()}
            </>} />
        </div>
        <div className="list row g-4 my-5">
                    {products.map((item,index)=>(
                    <div key={index} className="col-12 col-md-6 col-lg-3 col-xl-2" >
                        <div className="card position-relative" style={{cursor:"pointer"}}>
                            <div className="card-image"><img className="w-100" src="https://img.gamesatis.com/categories/images/20513/cs-go-counter-strike-global-offensive-419.webp" alt="Black Desert" /></div>
                            <div className="title position-absolute fw-bolder w-100 bottom-0 start-50 translate-middle text-center" style={{fontSize:"13px"}}>Black Desert Online Acoin</div>
                        </div>
                    </div>
                    ))}
        </div>
    </div>
    )
}
export default VitrinShowOFF;