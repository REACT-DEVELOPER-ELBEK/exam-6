import React from "react";
import { NavLink } from "react-router-dom";

import {
  sideBarLogo,
  sidebarProducts,
  sidebarProfile,
  sidebarSettings,
} from "../../assets/img";
import "./Sidebar.scss";
const Header = () => {
  return (
    <nav>
      <div className="sidebar__wrapper">
        <NavLink to="/" className={({isActive})=>isActive?"link":"inactive"}>
          <img src={sideBarLogo} alt="" />
        </NavLink>
        <NavLink to='/profile' className={({isActive})=>isActive?"link":"inactive"}>
          <img src={sidebarSettings} alt="" />
        </NavLink>
          <NavLink to={localStorage.getItem('userName')?"/profile":"/login"} className={({isActive})=>isActive?"link":"inactive"}>
            <img src={sidebarProfile} alt="" />
          </NavLink>
        <NavLink to="products" className={({isActive})=>isActive?"link":"inactive"}>
          <img src={sidebarProducts} alt="" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
