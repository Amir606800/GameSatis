import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../Context/CategoryContext";
import { UserAuth } from "../Context/AuthContext";
import slugify from "slugify";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchProduct } from "../tools/Slices/CategorySlice";

const AddElan = () => {
    const { mainCat,subCat, fetchSubCategory } = useContext(CategoryContext);
    const [selMainCat,setSelMainCat] = useState(null)
    const [selSubCat,setSelSubCat] = useState(null)
    const {userProfile} = UserAuth()
    const dispatch = useDispatch()
    const [addedItem,setAddedItem] = useState({
        title:"",
        image_url:"",
        description:"",
        price:0,
        stock:1,
        category_id:0,
        profile_id:userProfile.id
    })
    
    const handleSubCat = (e)=>{
        const mainCatId = e.target.value
        const againProduct = subCat.find((item)=> slugify(item.name) == slugify(mainCatId))
        setSelSubCat(mainCatId)
            setAddedItem((prev)=>({
                ...prev,
                title:"",
                image_url:"",
                description:"",
                price:0,
                stock:1,
                category_id:againProduct.id,
                profile_id:userProfile.id
            }))
    }
    
    const handleInputFields =(e)=>{
        setAddedItem({...addedItem,[e.target.name]:e.target.value})
    }
    
    const handleMainCat = (e)=>{
        setSelMainCat(e.target.value)
        setSelSubCat(null)
        fetchSubCategory(e.target.value)

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addProduct(addedItem))
    }
    return (
        <div className="Ilan-ekle-profile px-2 pb-2">
            <div className="head bg-dark py-1 rounded-2 h4 text-center w-100">Hesap Satış İlanı</div>
            <div className="main">
                <form onSubmit={handleSubmit} className="d-flex align-items-center flex-column justify-content-center gap-4">
                    <select className="text-center align-self-center bg-dark py-2 rounded-3 px-3" style={{border:"none"}} onChange={handleMainCat} value={selMainCat || ""} name="gameSelect" id="gameSelect">
                    <option  value="" disabled>Bir oyun seçiniz</option>
                        {mainCat.map((item,index)=>(
                            <option key={index} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                    {selMainCat && 
                    <select className="text-center align-self-center bg-dark py-2 rounded-3 px-3" style={{border:"none"}} onChange={handleSubCat} value={selSubCat || ""} name="subSelect" id="subSelect">
                    <option  value="" disabled>Bir oyun seçiniz</option>
                        {subCat.map((item,index)=>(
                            <option key={index} value={item.name}>{item.name} </option>
                        ))}
                    </select>}
                    
                    {selSubCat && 
                    <div className="list_of_inputs d-flex flex-column w-100 gap-2">  
                        
                        <div className="w-50 d-flex align-items-center gap-3 justify-content-center">
                            <div className="border-1 border text-center align-content-center" style={{minHeight:"8em"}}>{addedItem.image_url == "" ?<div>Your Photo wiill be displayed here</div>:<img width={200} src={addedItem.image_url} alt={addedItem.title} />}</div>
                            <div className=" w-100 align-content-end text-center gap-3">

                            <div className="list-of-inputs-elements ">
                                <label style={{width:"120px"}} htmlFor="name_prod">Ürünün Adı:</label>
                                <input type="text" name="title" value={addedItem.title} onChange={handleInputFields} id="name_prod" placeholder="Ürünün Adı: " />
                            </div>
                            <div className="list-of-inputs-elements mt-4">
                                <label style={{width:"120px"}} htmlFor="photo_prod">Ürün fotoğrafı:</label>
                                <input type="text" name="image_url" value={addedItem.image_url} onChange={handleInputFields} id="photo_prod" placeholder="Ürün fotoğrafı: " />
                            </div>
                            </div>
                        </div>
                        <div className="list-of-inputs-elements w-50">                            
                            <label htmlFor="price_prod">Ürün Fiyatı:</label>
                            <input type="text" id="price_prod" value={addedItem.price} onChange={handleInputFields} name="price" placeholder="Ürün Fiyatı: "  />
                        </div>
                        
                        <div className="list-of-inputs-elements w-50">
                            <label htmlFor="amount_prod">Ürün Sayı: </label>
                            <input type="text" name="stock" value={addedItem.stock} onChange={handleInputFields} placeholder="Ürün Sayı"  />
                        </div>
                        <div className="list-of-inputs-elements w-50">
                            <label htmlFor="desc_prod">Ürün Açıklaması:</label>
                            <textarea type="text" name="description" value={addedItem.description} onChange={handleInputFields} id="desc_prod" placeholder="Ürün Açıklaması: " />
                        </div>
                        <button className="btn btn-info text-white login-btn-active mt-3">İlanı Yayınla</button>
                        </div>
                    }
                </form>
            </div>
        </div>
    );
};

export default AddElan;
