import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import logo from "../assets/images/logo.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__left">
        <div className="nav-bar__left__menu">
          <button>
            <MenuRoundedIcon className="nav-bar__left__menu__icon" />
          </button>
        </div>
        <div className="nav-bar__left__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="nav-bar__search">
        <input type="text" className="nav-bar__search__input" />
        <button className="nav-bar__search__button-icon">
          <SearchIcon className="nav-bar__search__icon" />
        </button>
      </div>
      <div className="nav-bar__bag">
        <Link to="/cart">
          <Badge badgeContent={4} color="success">
            <ShoppingCartOutlinedIcon className="nav-bar__bag__icon" />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
