import { useParams } from "react-router-dom"

export const ProductDetails = ()=>{
    const slugName = useParams().slug
    console.log(slugName);
    
    return(
        <div className="detail-page">
            sklejfebf
        </div>
    )
}