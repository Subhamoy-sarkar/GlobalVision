import React, { useState } from "react";
import Webcam from "react-webcam";
import "../styles/main.css";
import sound from "../assets/sound.png";
import send from "../assets/send.png";

const CurrentChat=()=>{
  return (
    <div className="curr_chat">
      <input placeholder="type a message" type="text" />
      <button className="send">
      <img src={send} alt="404 error" />
      </button>
    </div>
  );
}
const Chathistory=()=>{
  return (
    <div className="oldchat">
    </div>
  );
}
const Chats=()=>{
  return(
    <div className="right">
      <h1 className="head">Chats</h1>
      <Chathistory/>
      <CurrentChat/>
    </div>

  );
}
const VideoSubtitle=()=>{
  const webCamRef=React.useRef(null);
  return (
    <div className="left">
      <div className="videobig">
        <Webcam  className="userCam" audio={true} ref={webCamRef} mirrored={true}/>
        <div className="videosmall"></div>
      </div>
      <div className="subtitle">
        <div className="sound"><img src={sound} alt="notfound" /></div><span className="text">Subtitles..</span>
      </div>
    </div>
  );
}


//Body component  of Main :
const Body=()=>{
  return (
    <div className="body">
      <VideoSubtitle/>
      <Chats/>
    </div>

  );
}

// Heading Component : 
const Heading=({name,time})=>{
  return(
    <div className="heading">
      <div className="title">
        <span>{name}</span>
      </div>
      <div className="time">
        <div className="circle"></div>
        <span>{time}</span>
      </div>
      <div className="leave">
        <button className="btn" id="leave">
          Leave
        </button>
      </div>
    </div>
  );
}


const Main = () => {
  const [projectName,setProjectName]=useState('myprojectName');
  const [duration,setDuration]=useState(0);
  return (
    <div id="bg">
      <Heading name={projectName} time={duration}/>
      <Body/>
    </div>
  );
};

export default Main;
