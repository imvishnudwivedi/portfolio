import React from "react";
import { NavLink } from 'react-router-dom';
const CommonServiceSlider = () => {

    return(

        <>
<div class="utf-services-area bg-gray text-center default-padding">
  <div class="container">
	<div class="row">
      <div class="utf-site-heading text-center">
        <div class="col-md-8 col-md-offset-2">
          <h2>Services <span>Tow</span></h2>
          {/* <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="utf-services-items utf-services-carousel owl-carousel owl-theme">
          <div class="item"> <i class="flaticon-jigsaws"></i>
            <h4>Media Marketing</h4>
            <p>Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...</p>
          </div>
          <div class="item"> <i class="flaticon-sketch"></i>
            <h4>UI/UX Design</h4>
            <p>Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...</p>
          </div>
          <div class="item"> <i class="flaticon-technical-support"></i>
            <h4>User Experience</h4>
            <p>Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...</p>
          </div>
          <div class="item"> <i class="flaticon-layers-1"></i>
            <h4>Creative Designer</h4>
            <p>Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...</p>
          </div>
          <div class="item"> <i class="flaticon-growth"></i>
            <h4>Branding Design</h4>
            <p>Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...</p>
          </div>
          <div class="item"> <i class="flaticon-network"></i>
            <h4>User Analysis</h4>
            <p>Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>

    );
};

export default CommonServiceSlider;
