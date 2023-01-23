import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {SiShopify} from "react-icons/si";
import {useStateContext} from "./Productprovider";
const Nav = () => {
    const {search,setSearch}=useStateContext()
  return (
      <div className="container d-flex flex-row fixed-top align-items-center justify-content-around p-2 ms-auto my-auto mx-auto mt-3 me-auto border sticky-top rounded" style={{backgroundColor:"#078080"}}>
            <div className="nav-item flex-row">
              <SiShopify className="fs-3 mx-auto" style={{color:"#ff8906"}}/>
              <a className="navbar-brand text-white fs-5">F-shop</a>
            </div>
            <div className="nav-item">
              <NavLink to={"/"} className="nav-link text-white" aria-current="page" href="#">
                <i className="fa-solid fa-house fs-5"></i>
              </NavLink>
            </div>
            <div className="nav-item">
              <form className="d-flex m-auto" role="search">
                <input className="form-control text-black" value={search} onChange={(e)=>e.target.value} type="search" placeholder="Search" aria-label="Search"/>
              </form>
            </div>
            <div className="nav-item">
              <NavLink to={"/cart"} className="nav-link text-white" href="#">
                <div className="position-relative w-20">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                  </span>
                </div>
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to={"/account"} className="nav-link text-white" href="#">
                <i className="fa-solid fa-circle-user fs-4"></i>
              </NavLink>
            </div>
      </div>
  )
}

export default Nav;