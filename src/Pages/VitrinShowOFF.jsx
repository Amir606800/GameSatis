import { useContext } from "react";
import Lent from "../components/Lent";
import Path from "../components/Path";
import { ProductContext } from "../Context/ProductsProvider";
import ShowOffCard from "../components/CardCompon/ShowOffCard"

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
            leftHead={alphabet()} />
        </div>
        <div className="list row g-4 my-5 justify-content-center">
                    {products.map((_,i)=>(
                        <ShowOffCard key={i}  />
                    ))}
        </div>
    </div>
    )
}
export default VitrinShowOFF;