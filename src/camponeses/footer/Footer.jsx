import React from 'react'
import Navbar from "../nabar/Navbar"
import "./footer.css"

export default function Footer() {
  return (
    <>
    <div className='footers'>
    {/* <Navbar showsign={false}/> */}
    <div className='last_footer'>
        <p>2022 <span>codewithsadee</span>. All Right Reserved</p>
        <div>
            <img src={require("../../images/footer-bottom-img.png")} alt="" />
        </div>
        </div>
    </div>
    
    </>
  )
}
