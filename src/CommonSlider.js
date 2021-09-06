import React from "react";
import { NavLink } from 'react-router-dom';
const CommonSlider = () => {

    return(

        <>
<div className="utf-banner-area-block shadow navbar-transparent typed-text dark-hard text-light bg-fixed"
style={{  
  backgroundImage: "url(" + "assets/img/VIP5.png" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}
>
  <div className="utf-box-table">
    <div className="utf-box-cell">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="content" data-animation="animated fadeInUpBig">
			  {/* <h3>Freelance Digital Designer</h3>	 */}
              <h1>Hello!, I'm Vishnu</h1>
              <h2>Hi I Am <span className="element"></span></h2>
              <NavLink className="btn btn-theme effect btn-md" to="/about">About Me</NavLink>
			  <NavLink className="btn btn-light effect btn-md" to="/contact">Get In Touch</NavLink>	
			</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>

    );
};

export default CommonSlider;
