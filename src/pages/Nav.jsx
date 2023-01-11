import React from 'react';
import { NavLink } from 'react-router-dom';
import {SiShopify} from "react-icons/si";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#078080"}}>
      <div className="container d-flex">
        <div className="collapse navbar-collapse ms-3 mx-auto" id="navbarSupportedContent">
          <SiShopify className="fs-3 mx-2" style={{color:"#ff8906"}}/>
          <a className="navbar-brand text-white" href="#">F-shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav mb-2 mb-lg-0 hover:text-warning">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link text-white" aria-current="page" href="#">
                <i className="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <form className="d-flex" role="search">
                <input className="form-control text-black-50 me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn text-white" style={{backgroundColor:"#232323"}} type="submit">Search</button>
              </form>
            </li>
            <li className="nav-item">
              <NavLink to={"/cart"} className="nav-link text-white" href="#">
                <i className="fa-solid fa-cart-shopping"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/account"} className="nav-link text-white" href="#">
                <i className="fa-solid fa-circle-user"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/contact"} className="nav-link text-white" href="#">
                <i className="fa-solid fa-phone-arrow-up-right"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>  
  )
}

export default Nav;