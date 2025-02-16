const ShowOffCard = (props)=>{
    return(<>
    <div  className="col-12 col-md-6 col-lg-3 col-xl-2" >
        <div className="card position-relative" style={{cursor:"pointer"}}>
            <div className="card-image"><img className="w-100" src="https://img.gamesatis.com/categories/images/20513/cs-go-counter-strike-global-offensive-419.webp" alt="Black Desert" /></div>
            <div className="title position-absolute fw-bolder w-100 bottom-0 start-50 translate-middle text-center text-white" style={{fontSize:"14px"}}>Black Desert Online Acoin</div>
        </div>
    </div>
    </>)
}
export default ShowOffCard;