import React from 'react'
import { HashLink } from 'react-router-hash-link';
import '../styles/drawer.css';
const Drawer = () => {
  return (
    <>
    <div className="drawer-main">
        <div id="name"><span>GlobalVoice</span></div>
        <div className="drawer-content">
            <HashLink to={'/#Main'}  className='btn1' id='videobtn'>    <i class="fa-solid fa-video fa-2xl icon" ></i></HashLink>
            <HashLink to={'/Login'} className='btn1'><i class="fa-solid fa-right-to-bracket fa-2xl icon"></i></HashLink>
            <HashLink to={'/Guide'} className='btn1'><i class="fa-solid fa-book fa-2xl icon"></i></HashLink>
            {/* <i class="fa fa-solid fa-house" style={{color: 'white',}}></i> */}
        </div>
        <div className="exit">
          <i class="fa-solid fa-circle-xmark fa-2xl icon"></i>
        </div>
    </div>
    </>
  )
}

export default Drawer
