import React, { useState } from "react";
import Path from "../Addons/Path";
import { IoIosSearch } from "react-icons/io";
import qaData from "../helpers/QuestionAndAnswer";
import { MdOutlineStar } from "react-icons/md";
import { Accordion, AccordionBody } from "react-bootstrap";
const QuestionAnswer = () => {
  const [questionList, setQuestionList] = useState("Üyelik İşlemleri");
  const [search, setSearch] = useState("");
  const qaDataFiltered = qaData.filter(
    (item) =>
      item.topic.toLowerCase().includes(search.toLowerCase()) ||
      item.questions.some((item) =>
        item.question.toLowerCase().includes(search.toLowerCase())
      )
  );
  const foundedQuestions = qaData.filter((item) => item.topic == questionList);
  return (
    <div className="container-fluid">
      <Path />
      <div className="User-Profile container-fluid mt-2 mb-4">
        <div
          className="area w-100 gap-2  rounded-2 py-4 px-4 d-flex justify-content-around flex-column align-items-center align-items-md-start flex-md-row"
          style={{
            height: "fit-content",
          }}
        >
          <div
            className="left d-flex bg-dark-custom p-3 flex-column rounded-3 justify-content-start align-items-center h-100"
            style={{ width: "24em" }}
          >
            <div className="top h5 pt-3 m-0 fw-bold">Yardım & Destek</div>
            <div className="cont px-3 text-center" style={{ fontSize: "11x" }}>
              Lütfen destek veya yardım almak istediğiniz konuyu seçiniz.
            </div>
            <div className="search grid-search d-flex justify-content-center align-items-center mx-lg-0 mx-3 mt-2 w-100 ">
              <div className="position-relative z-3 w-100 my-2">
                <IoIosSearch
                  style={{ left: "15px" }}
                  className="lupa  position-absolute top-50 translate-middle-y"
                />
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  className="mx-1 text-custom w-100"
                  placeholder="Başlıklarda Ara..."
                  type="text"
                  value={search}
                />
              </div>
            </div>
            <div
              className="list d-flex mt-2 flex-column gap-3 pe-2 overflow-y-scroll"
              style={{ width: "100%", maxHeight: "15em" }}
            >
              {qaDataFiltered.map((item, index) => (
                <div
                  onClick={() => {
                    setQuestionList(item.topic);
                  }}
                  className="w-100 bg-custom d-flex flex-row align-items-center jcstart gap-3 rounded-2 px-3 py-2 cur-pointer"
                  key={index}
                >
                  <MdOutlineStar className="fs-5" />
                  {item.topic}
                </div>
              ))}
            </div>
          </div>
          <div
            className="right px-2 mt-md-0 mt-4 "
            style={{
              width: "78%",
              minHeight: "24em",
              maxHeight: "fit-content",
              height: "100%",
            }}
          >
            <Accordion
              className="d-flex flex-column gap-3"
              style={{ background: "none", borderRadius: "0px !important" }}
              defaultActiveKey={0}
              flush
            >
              {foundedQuestions.length != 0
                ? foundedQuestions[0].questions.map((item, index) => (
                    <Accordion.Item
                      eventKey={index}
                      className="bg-custom"
                      key={index}
                    >
                      <Accordion.Header>
                        <div className="bg-custom rounded-2">
                          {item.question}
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="bg-dark-custom">
                        {item.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))
                : "Loading..."}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
