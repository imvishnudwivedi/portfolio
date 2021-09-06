




import React from "react";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return(
        <>



<footer className="text-center bg-dark text-light">
  <div className="container">
    <div className="row">
      <div className="col-md-8 copyright text-left"> 
		<p>Copyright © 2021 All Rights Reserved.</p>
	  </div>
      <div className="col-md-4 utf-footer-social text-right">
        <ul>
          <li className="facebook"><NavLink to="https://www.facebook.com/vishnukushinagar" target="_blank"><i className="fab fa-facebook-f"></i></NavLink></li>
          <li className="linkedin"><NavLink to="https://www.linkedin.com/in/imvishnudwivedi/" target="_blank"><i className="fab fa-linkedin"></i></NavLink></li>
		  <li className="twitter"><NavLink to="https://twitter.com/imvishnudwivedi" target="_blank"><i className="fab fa-twitter"></i></NavLink></li>
        </ul>
      </div> 
    </div>
  </div>
</footer>

</>
    );
};
export default Footer;
