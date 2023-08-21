import React from "react";
import "../styles/main.css";
import sound from "../assets/sound.png";
import send from "../assets/send.png";
const Main = () => {
  return (
    <div id="bg">
      <div className="heading">
        <div className="title">
          <span>Project Name</span>
        </div>
        <div className="time">
          <div className="circle"></div>
          <span>2:30:23</span>
        </div>
        <div className="leave">
          <button className="btn" id="leave">
            Leave
          </button>
        </div>
      </div>
      <div className="body">
        <div className="left">
          <div className="videobig">
            <div className="videosmall"></div>
          </div>
          <div className="subtitle">
            <div className="sound"><img src={sound} alt="notfound" /></div><span className="text">Subtitles..</span>
          </div>
        </div>
        <div className="right">
          <div className="head"><span>Chats</span></div>
          <div className="oldchat">
          </div>

          <div className="curr_chat">
            <input placeholder="type a message" type="text" />
            <button className="send">
            <img src={send} alt="404 error" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Main;
