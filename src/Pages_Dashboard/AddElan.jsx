import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../Context/CategoryContext";
import { UserAuth } from "../Context/AuthContext";
import slugify from "slugify";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchProduct } from "../tools/Slices/UserProductSlice";
import Swal from "sweetalert2";

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
        price:null,
        stock:null,
        category_id:0,
        profile_id:userProfile.id,
        deliver_time:null
    })

    const checkimageURL = (url)=>{
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        return pattern.test(url)
    }

    const handleSubCat = (e)=>{
        const mainCatId = e.target.value
        const againProduct = subCat.find((item)=> slugify(item.name) == slugify(mainCatId))
        setSelSubCat(mainCatId)
            setAddedItem((prev)=>({
                ...prev,
                title:"",
                image_url:"",
                description:"",
                price:null,
                stock:null,
                deliver_time:null,
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
        if(addedItem.title == "") {alert("Lütfen başlığı doldurun");return}
        if(!checkimageURL(addedItem.image_url)) {alert("Lütfen geçerli bir fotoğraf linki giriniz");return} 
        if(addedItem.price<10 ) {alert("Fiyat en minimum 10TL olmalı");return}
        if(addedItem.stock != Math.floor(addedItem.stock) || addedItem.stock <1 ) {alert("Ürün sayı 0-dan büyük ve tam sayı olmalı");return}
        if(addedItem.deliver_time != Math.floor(addedItem.deliver_time || addedItem.deliver_time =="")){ alert("Teslimat süresi tam sayı olmalı");return}
        if(addedItem.description == "") {alert("Lütfen açıklama kısmını doldurun!"); return}
        
        try{
            dispatch(addProduct(addedItem))
            Swal.fire({
                    title: "Succesfull",
                    text: "Your product succesfully added!",
                    icon: "success",
                    background: "#222631", // Custom dark background (optional)
                    color: "#fff", // Text color for dark theme
                    confirmButtonText: "OK",
                    confirmButtonColor: "#3085d6",
                });
                setAddedItem((prev)=>({
                    ...prev,
                    title:"",
                    image_url:"",
                    description:"",
                    price:"",
                    stock:"",
                    deliver_time:""
                }))
        }catch(err){
            alert(err)
        }
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
                    <div className="list_of_inputs d-flex flex-column w-100 gap-3">  
                        
                        <div className="w-75 d-flex align-items-center gap-3 justify-content-center flex-column flex-lg-row">
                            <div className="border-1 border text-center align-content-center" style={{minHeight:"8em",minWidth:"8em"}}>{addedItem.image_url == "" ?<div>Your Photo wiill be displayed here</div>:<img width={200} src={addedItem.image_url} alt={addedItem.title} />}</div>
                            <div className=" w-100 align-content-end text-start ">

                            <div className="list-of-inputs-elements ">
                                <label style={{width:"120px"}} htmlFor="name_prod">Ürünün Adı:</label>
                                <input type="text" name="title" value={addedItem.title} onChange={handleInputFields} id="name_prod" placeholder="Ürünün Adı: " />
                            </div>
                            <div className="list-of-inputs-elements mt-3 mt-lg-4">
                                <label style={{width:"120px"}} htmlFor="photo_prod">Ürün fotoğrafı:</label>
                                <input type="text" name="image_url" value={addedItem.image_url} onChange={handleInputFields} id="photo_prod" placeholder="Ürün fotoğrafı: " />
                            </div>
                            </div>
                        </div>
                        <div className="list-of-inputs-elements w-75">                            
                            <label htmlFor="price_prod">Ürün Fiyatı (TL):</label>
                            <input type="text" id="price_prod" value={addedItem.price} onChange={handleInputFields} name="price" placeholder="Ürün Fiyatı: "  />
                        </div>
                        
                        <div className="list-of-inputs-elements w-75">
                            <label htmlFor="amount_prod">Ürün Sayı (Adet): </label>
                            <input type="text" name="stock" value={addedItem.stock} onChange={handleInputFields} placeholder="Ürün Sayı"  />
                        </div>
                        <div className="list-of-inputs-elements w-75">
                            <label htmlFor="amount_prod">Teslimat Süresi (saat): </label>
                            <input type="text" name="deliver_time" min={1} value={addedItem.deliver_time} onChange={handleInputFields} placeholder="Teslimat süresi"  />
                        </div>
                        <div className="list-of-inputs-elements w-75">
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
