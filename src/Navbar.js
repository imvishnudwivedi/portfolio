import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
<header id="home">
  <nav className="navbar navbar-default text-light navbar-fixed navbar-transparent white bootsnav">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"> <i className="fa fa-bars"></i> </button>
        <NavLink className="navbar-brand" to="/">
			<img src="assets/img/vip.png" className="logo logo-display" alt="Logo" /> 
			<img src="assets/img/vishnu.png" className="logo logo-scrolled" alt="Logo" /> 
		</NavLink> 
	  </div>
     <div className="collapse navbar-collapse" id="navbar-menu">
        <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
          <li> <NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li> <NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/service">Service</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
</>
    );
};
export default Navbar;
