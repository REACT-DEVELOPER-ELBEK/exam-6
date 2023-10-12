import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  sideBarLogo,
  sidebarProducts,
  sidebarProfile,
  sidebarSettings,
} from "../../assets/img";
import "./Sidebar.scss";

const Header = () => {
  const { user } = useAuth();
  return (
    <nav>
      <div className="sidebar__wrapper">
        <NavLink to="/">
          <img src={sideBarLogo} alt="" />
        </NavLink>
        <NavLink>
          <img src={sidebarSettings} alt="" />
        </NavLink>
        {user && (
          <NavLink to="profile">
            <img src={sidebarProfile} alt="" />
          </NavLink>
        )}
        {!user && (
          <NavLink to="login">
            <img src={sidebarProfile} alt="" />
          </NavLink>
        )}
        <NavLink to="products">
          <img src={sidebarProducts} alt="" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
