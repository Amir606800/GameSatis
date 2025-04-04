import { GoogleGenAI } from "@google/genai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useEffect, useRef, useState } from "react";
import { RiCustomerService2Fill, RiMailSendLine } from "react-icons/ri";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CanliDestek = () => {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY) 
  const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"})
  const [hiddenStat, setHidden] = useState(false);
  useEffect(() => {
    if (hiddenStat) {
      document
        .querySelector(".destek-canli")
        .classList.add("destek-canli-opened");
    } else {
      document
        .querySelector(".destek-canli")
        .classList.remove("destek-canli-opened");
    }
  }, [hiddenStat]);
  
  useEffect(()=>{},)

  const [messagesToDisplay, setMessagesToDisplay] = useState([
    { sender: "computer", content: "Hi! I am GameBot! How can I help you today?" },
  ]);

  const [userInput, setUserInput] = useState("");

  const handleSubmitMessage = async() => {
    if (userInput.trim()) {
      const result = await model.generateContent(userInput)
      const response = await result.response
      setMessagesToDisplay((prevMessages) => [
        ...prevMessages,
        { sender: "user", content: userInput },
      ]);

      setTimeout(() => {
        setMessagesToDisplay((prevMessages) => [
          ...prevMessages,
          { sender: "computer", content: response.text() },
        ]);
      }, 1000); 
      setUserInput("");
    }
  };

  const messageListRef = useRef()

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messagesToDisplay]); 
  return (
    <div
      className="destek-canli d-flex justify-content-end position-fixed position-relative"
      style={{ right: "7px", bottom: "10px", zIndex: "100", maxWidth: "94vw" }}
    >
      <button
        onClick={() => {
          setHidden(true);
        }}
        className="canli-buton btn btn-info  align-items-center justify-content-center text-white gap-2"
      >
        <RiCustomerService2Fill />
        <span className="fw-bold ">Canlı Destek</span>
      </button>
      <div className="platform-destek position-absolute bottom-100 ">
        <div className="card h-100 p-1 bg-info">
          <div className="card-head position-relative">
            <div className="bg-info d-flex align-items-center fs-5 py-2 justify-content-center text-white gap-2">
              <RiCustomerService2Fill />
              <span className="fw-bold ">Yardım Merkezi</span>
            </div>
            <span
              onClick={() => {
                setHidden(false);
              }}
              className="fs-1 position-absolute cur-pointer"
              style={{ top: "-10px", right: "10px"}}
            >
              -
            </span>
          </div>
          <div className="card-body rounded-2 p-3 bg-body">
            <div className="card-body d-flex flex-column  border border-1 h-100">
              <div
                style={{ height: "10%", color: "#32a0db" }}
                className="head  border-bottom border-1 border-white text-center"
              >
                Canlı Destek{" "}
                <span style={{ fontSize: "13px" }}>
                  (Sabah 09:00 - Gece 02:00)
                </span>
              </div>
              <div
              ref={messageListRef}
                className="mesage-list mt-3 mb-3 px-2 overflow-y-scroll d-flex flex-column  gap-2"
                style={{ height: "20em" }}
              >
                {messagesToDisplay.map((message, index) => (
                  <div
                    key={index}
                    className={`${
                      message.sender === "user" ? "text-end" : "text-start"
                    }  p-2 rounded-3 `}
                    style={{
                      
                      backgroundColor: " #555555",
                      width: "fit-content",
                      alignSelf: message.sender === "user" ? "end" : "start",
                    }}
                  >
                    <strong className={message.sender == "user"?"bg-info text-white rounded-2 p-1" :"bg-danger text-white rounded-2 p-1"}>
                      {message.sender === "user" ? "User" : "Computer:"}
                    </strong>{" "}
                    <ReactMarkdown remarkPlugins={[remarkGfm]} style={{color:"white"}}>{message.content}</ReactMarkdown>
                  </div>
                ))}
              </div>
              <form
                method="POST"
                className="w-100 d-flex align-items-end gap-1"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitMessage();
                }}
              >
                <input
                  placeholder="Mesajınızı Buraya yazınız..."
                  type="text"
                  onChange={(e) => {
                    setUserInput(e.target.value);
                  }}
                  value={userInput}
                  style={{ background: "none" }}
                  className="border-0 message-input w-100 px-2 py-1 border-3 border-bottom border-info-subtle"
                />
                <RiMailSendLine className="fs-3 text-info" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanliDestek;
