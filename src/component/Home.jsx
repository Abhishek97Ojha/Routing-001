import React from 'react'
import './home.css'
import {BsPlayCircleFill} from 'react-icons/bs'
const Home = () => {
  return (
    <div className='home'>
        <div className="left">
          <div className="top">
          <h1>Leading MEP & Facility management company in Dubai</h1>
            <p>Urban Science is always ready to accept your challenges</p>
            <p>Meeting your goals is our main objective. Professional services for facility management & MEP works.</p>
          </div>
          <div className="down">
            <button><a href="https://www.urbansciencemep.com/mep.pdf" style={{textDecoration:"none", color:"white"}}>Company Profile</a></button>
            <button style={{backgroundColor:"white", color:"black"}}><BsPlayCircleFill style={{fontSize: "1.5rem",marginRight:".5rem"}}/> Watch Video</button>
          </div>
        </div>
        <div className="right">
        <img src="https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png" alt="" />
        </div>
    </div>
  )
}

export default Home