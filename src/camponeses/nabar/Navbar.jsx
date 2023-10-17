import React, { useCallback, useEffect, useState } from 'react'
import '../nabar/Navbar.css'
import { Link } from 'react-router-dom'
export default function Nabar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
        <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={require("../../images/logo.svg").default} alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className="navbar-nav ">
            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
            <Link className="nav-link" to="/MOVIES">MOVIES</Link>
            <Link className="nav-link " to="/TV/SHOW">TV SHOW</Link>
        </div>
        {props.showsign &&<div className='btn-cover '>
        <Link type="button" className="btn" to="/SIGNIN">SIGN IN</Link>
        <Link type="button" className="btn" to="/REGISTER">register</Link>
        </div> }
        </div>
        </div>
    </nav>
    </>
  )
}

