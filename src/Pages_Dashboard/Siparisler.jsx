import React, { useEffect, useRef, useState } from "react";
import { Accordion } from "react-bootstrap";
import { FaCheck, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../tools/Slices/OrdersSlice";
import { UserAuth } from "../Context/AuthContext";
import Loading from "../Addons/Loading";
import { FaStar } from "react-icons/fa6";
import supabase from "../helpers/supabaseClient";
import { addFeedback, fetchFeedbacks } from "../tools/Slices/FeedbackSlice";

const Siparisler = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);
  const {feedbacks,feedbackError} = useSelector((state)=> state.feedbacks)
  const { userProfile } = UserAuth();
  const [commentValues, setCommentValues] = useState({
    comment: "",
    rating: 1,
  });
  const [hover, setHover] = useState(null);
  const reloadRef = useRef(false);
  useEffect(() => {
    if (userProfile && !reloadRef.current) {
      dispatch(fetchOrders(userProfile.id));
      reloadRef.current = true
    }
  }, [userProfile]);
  useEffect(() => {
    dispatch(fetchFeedbacks(userProfile.id))
    console.log(feedbacks)
  }, [orders,userProfile]);

  const handleCommenSubmit = async (e, item) => {
    
    e.preventDefault();
      dispatch(addFeedback({item:item,commentValues:commentValues,userProfile:userProfile}))
      if(commentValues.comment == "") {alert("Lütfen yorum yapmak istiyorsanız bir şeyler yazınız")}
      if(!feedbackError) {
        alert("Yorum yaptığınız için teşekkürler!")
        setCommentValues({comment:"",rating:1})
        return
      }
      alert("Bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz!")
  };

  if (error) console.log(error);
  if (orders.length == 0) return <div className=" p-3 bg-dark text-center rounded-2 fw-bold">Hiş bir siparişiniz yok.</div>;
  if (loading) return <Loading />;

  return (
    <div className="Siparisler-profile px-2 pb-2">
      <div
        className="search-bar bg-dark w-100 p-3 rounded-3"
        style={{ height: "fit-content" }}
      >
        <div className="w-100 h-100 position-relative">
          <input
            placeholder="Sipariş İD veya ilan başlığı ile ara..."
            style={{ padding: "10px", backgroundColor: "#161820" }}
            className="w-100 border-0 h-100 px-5 bg-dark-subtle rounded-3"
            type="text"
          />
          <FaSearch
            className="position-absolute top-50 translate-middle-y"
            style={{ left: "15px" }}
          />
        </div>
      </div>
      <div className="list-siparisler  my-3">
        <Accordion
          className="d-flex flex-column gap-3"
          style={{ background: "none", borderRadius: "0px !important" }}
          defaultActiveKey={0}
          flush
        >
          {orders.length == 0 ? (
            <>Loading...</>
          ) : (
            orders.map((item, index) => (
              <Accordion.Item
                key={index}
                eventKey={index}
                className="siparis-accordion-item"
              >
                <Accordion.Header>
                  <div className="siparisler-accordion-head w-100 pe-3">
                    <div
                      style={{ color: "whitesmoke" }}
                      className="d-flex gap-3 align-items-center fw-bold flex-wrap"
                    >
                      <span className="check-icon">
                        <FaCheck className="check-icon-itself" />
                      </span>
                      <span>#{item.products.id}</span>
                      <span>-</span>
                      <span>{item.products.title}</span>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#171a21" }}
                  className=" border-0"
                >
                  <div className="siparisler-accordion-body  py-2">
                    <div
                      className="top image-cont  p-2 rounded-2 d-flex flex-xl-nowrap flex-wrap align-items-center gap-2 justify-content-center"
                      style={{ backgroundColor: "#121318", minHeight: "7em" }}
                    >
                      <img
                        className="rounded-2 d-block m-auto h-100"
                        style={{ maxWidth: "12em", width: "100%" }}
                        src={item.products.image_url}
                        alt={item.products.title}
                      />
                      <div className="content h-100 d-flex gap-3 flex-wrap justify-content-between align-items-center px-3 py-3 bg-dark w-100 rounded-3">
                        <div
                          className="left d-flex flex-row flex-lg-column gap-2 align-items-start justify-content-between justify-content-lg-center  h-100 "
                          style={{ fontSize: "12px" }}
                        >
                          <span>
                            Tarih:{" "}
                            <span className="fw-bold">
                              {item.created_at.substring(0, 10)} -{" "}
                              {item.created_at.substring(11, 16)}
                            </span>
                          </span>
                          <span>
                            Satici:{" "}
                            <span className="fw-bold">
                              {item.products.profiles.display_name}
                            </span>
                          </span>
                          <span>
                            Birim Fiyati:{" "}
                            <span className="fw-bold">
                              {item.products.price}
                            </span>
                          </span>
                          <span>
                            Adet:{" "}
                            <span className="fw-bold">{item.quantity}</span>
                          </span>
                        </div>
                        <div className="right d-flex flex-wrap justify-content-center align-items-center gap-3">
                          <span className="h5 p-0 m-0">
                            Tutar: {item.total} TL
                          </span>
                          <div
                            className=" rounded-2 d-flex justify-content-center align-items-center py-1 px-4"
                            style={{ backgroundColor: "green" }}
                          >
                            <span className="check-icon">
                              <FaCheck className="check-icon-itself" />
                            </span>
                            Tamamlandi
                          </div>
                        </div>
                      </div>
                    </div>
                    {feedbacks.some(feedback => feedback.product_id === item.products.id)?""
                    :
                    <div
                      className="description-order rounded-2"
                      style={{ backgroundColor: "#121318", minHeight: "3em" }}
                    >
                      <form
                        onSubmit={(e) => {
                          handleCommenSubmit(e, item);
                        }}
                        className="p-3 rounded-2 d-flex align-items-center justify-content-center justify-content-sm-between mt-3 gap-2 flex-wrap flex-sm-nowrap"
                      >
                        <textarea
                          style={{
                            minWidth: "4em",
                            width: "82%",
                            height: "8em",
                          }}
                          className="border-0 rounded-3 p-3"
                          name="comment"
                          placeholder="Yorumlarınız bizim için önemli, lütfen deneyiminizi paylaşın."
                          id={index}
                          onChange={(e) =>
                            setCommentValues({
                              ...commentValues,
                              comment: e.target.value,
                            })
                          }
                        />
                        <div
                          className="d-flex flex-column align-items-center justify-content-center h-100 gap-4"
                          style={{ width: "130px" }}
                        >
                          <div
                            onChange={() =>
                              setCommentValues({
                                ...commentValues,
                                comment: commentValues.comment,
                              })
                            }
                            className="stars bg-dark rounded-2 p-2 d-flex gap-1 align-items-center justify-content-center fs-5"
                          >
                            {[1, 2, 3, 4, 5].map((star) => (
                              <FaStar
                                key={star}
                                style={{
                                  color: star <= hover ? "#6395EE" : "white",
                                }}
                                onClick={() => {
                                  setCommentValues({
                                    ...commentValues,
                                    rating: star,
                                  });
                                }}
                                onMouseEnter={() => {
                                  setHover(star);
                                }}
                                onMouseLeave={() => {
                                  setHover(commentValues.rating);
                                }}
                              />
                            ))}
                          </div>
                          <button className="btn btn-info text-white login-btn-active">
                            Yorum Yap
                          </button>
                        </div>
                      </form>
                    </div>
                    }  
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default Siparisler;
