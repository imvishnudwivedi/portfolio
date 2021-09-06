import React from "react";
import { NavLink } from 'react-router-dom';
const CommonAbout = () => {

    return(

        <>
<div className="utf-about-area-item about-me bg-gray default-padding">
  <div className="container">
    <div className="row">
      <div className="col-md-5 left-info"> <img src="assets/img/v1.jpg" alt="Thumb" /> </div>
      <div className="col-md-7 right-info">
        <h2>HI, I'M Vishnu Prakash Dwivedi UI/UX Designer</h2>
        <h4>- It's My Pleasure to Introduce About Myself.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
		<ul>
          <li>Contact Number: +91 9455218249</li>
          <li>E-Mail Address: <NavLink to="mailto:vishnukushinagar@gmail.com">vishnukushinagar@gmail.com</NavLink></li>
        </ul>
        <NavLink to="#" className="btn btn-theme effect btn-sm popup-youtube">Take Video</NavLink> </div>
    </div>
  </div>
</div>
</>

    );
};

export default CommonAbout;
