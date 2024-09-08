
import React from 'react';
import Data from '../data.json';
import logo from "../assets/shared/logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="headerContainer" className=" px-10 py-6 border-b">
      <div id="logoContainer">
        <Link to="/">
        <img src={logo} alt="Logo" className="h-8 xl:h-12" />
        </Link>
      </div>
    </div>
  );
};

export default Header;