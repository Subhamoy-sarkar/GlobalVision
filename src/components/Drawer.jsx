import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import '../styles/drawer.css';
import img from '../assets/navanim.png'
function Drawercontent(props){
  const[target,setTarget]=useState(sessionStorage.getItem('target') || 'loginBtn');

  const setBtnBg=(id)=>{
    setTarget(id);
  }
  useEffect(()=>{
    sessionStorage.setItem('target',target);
  },[target]);
  return(
      <div className="drawer-content">
        <HashLink to={'/#Login'} className={target==='loginBtn'? 'selectedBtn btn':'unselected btn'} id='loginBtn' onClick={()=>setBtnBg('loginBtn')}><i class="fa-solid fa-right-to-bracket fa-2xl icon"></i> <img src={img} className="sideAnim"alt="" /></HashLink>
        <HashLink to={'/Main'}  className={target==='videoBtn'? 'selectedBtn btn':'unselected btn'} id='videoBtn' onClick={()=>setBtnBg('videoBtn')}><i class="fa-solid fa-video fa-2xl icon" ></i> <img src={img} className="sideAnim"alt="" /></HashLink>
        <HashLink to={'/Guide'} className={target==='guideBtn'? 'selectedBtn btn':'unselected btn'} id='guideBtn'  onClick={()=>setBtnBg('guideBtn')}><i class="fa-solid fa-book fa-2xl icon"></i> <img src={img} className="sideAnim"alt="" /></HashLink>
        {/* <i class="fa fa-solid fa-house" style={{color: 'white',}}></i> */}
      </div>);
}
function Exit(props){
  return (
    <div className="exit">
      <i class="fa-solid fa-circle-xmark fa-2xl icon"></i>
    </div>);
}


const Drawer = () => {
  return (
    <>
    <div className="drawer-main">
        <h1 id="name">GlobalVoice</h1>
        <Drawercontent/>
        <Exit/>
    </div>
    </>
  )
}

export default Drawer;
