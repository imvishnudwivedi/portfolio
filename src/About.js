import React from "react";
import { NavLink } from 'react-router-dom';
import CommonAbout from './CommonAbout';
import CommonService from './CommonService';
import HeaderBanner from "./HeaderBanner";
const About = () => {

    return(

        <>
       
<HeaderBanner name='About Us' name1='about us'/>

<CommonAbout />
<CommonService />



<div class="utf-fun-factor-area text-light default-padding bottom-less text-center bg-fixed shadow dark-hard">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="col-md-3 col-sm-6 item">
          <div class="fun-fact">
            <div class="timer" data-to="25" data-speed="5000"></div>
            <span class="medium">Projects Complate On Ui/Ux</span> 
		  </div>
        </div>
        <div class="col-md-3 col-sm-6 item">
          <div class="fun-fact">
            <div class="timer" data-to="5" data-speed="5000"></div>
            <span class="medium">Projects Complate On Laravel</span> 
		  </div>
        </div>
        <div class="col-md-3 col-sm-6 item">
          <div class="fun-fact">
            <div class="timer" data-to="13" data-speed="5000"></div>
            <span class="medium">Projects Complate On Wordpress</span> 
		  </div>
        </div>
        <div class="col-md-3 col-sm-6 item">
          <div class="fun-fact">
            <div class="timer" data-to="3" data-speed="5000"></div>
            <span class="medium">Projects Complate On Basic React</span> 
		  </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <div class="utf-team-area bg-gray carousel-shadow default-padding">
  <div class="container">
    <div class="row">
      <div class="utf-site-heading text-center">
        <div class="col-md-8 col-md-offset-2">
          <h2>Our <span>Team</span></h2>
          <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="utf-team-items utf-team-carousel owl-carousel owl-theme">
          <div class="item">
            <div class="thumb"> <img src="assets/img/team/7.jpg" alt="Thumb" />
              <div class="social">
                <ul>
                  <li class="facebook"> <a href="#"><i class="fab fa-facebook-f"></i></a> </li>
                  <li class="twitter"> <a href="#"><i class="fab fa-twitter"></i></a> </li>
                  <li class="linkedin"> <a href="#"><i class="fab fa-linkedin-in"></i></a> </li>
                </ul>
              </div>
            </div>
            <div class="info">
              <h4><a href="#">John Willims</a></h4>
              <span>CEO & Founder</span>
              <p>Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...</p>
            </div>
          </div>
          <div class="item">
            <div class="thumb"> <img src="assets/img/team/8.jpg" alt="Thumb" />
              <div class="social">
                <ul>
                  <li class="facebook"> <a href="#"><i class="fab fa-facebook-f"></i></a> </li>
                  <li class="twitter"> <a href="#"><i class="fab fa-twitter"></i></a> </li>
                  <li class="linkedin"> <a href="#"><i class="fab fa-linkedin-in"></i></a> </li>
                </ul>
              </div>
            </div>
            <div class="info">
              <h4><a href="#">Kewin Bidwell</a></h4>
              <span>Creative Web Designer</span>
              <p>Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...</p>
            </div>
          </div>
          <div class="item">
            <div class="thumb"> <img src="assets/img/team/9.jpg" alt="Thumb" />
              <div class="social">
                <ul>
                  <li class="facebook"> <a href="#"><i class="fab fa-facebook-f"></i></a> </li>
                  <li class="twitter"> <a href="#"><i class="fab fa-twitter"></i></a> </li>
                  <li class="linkedin"> <a href="#"><i class="fab fa-linkedin-in"></i></a> </li>
                </ul>
              </div>
            </div>
            <div class="info">
              <h4><a href="#">Kelvin Valerio</a></h4>
              <span>Senior Developer</span>
              <p>Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...</p>
            </div>
          </div>
          <div class="item">
            <div class="thumb"> <img src="assets/img/team/4.jpg" alt="Thumb" />
              <div class="social">
                <ul>
                  <li class="facebook"> <a href="#"><i class="fab fa-facebook-f"></i></a> </li>
                  <li class="twitter"> <a href="#"><i class="fab fa-twitter"></i></a> </li>
                  <li class="linkedin"> <a href="#"><i class="fab fa-linkedin-in"></i></a> </li>
                </ul>
              </div>
            </div>
            <div class="info">
              <h4><a href="#">John Willims</a></h4>
              <span>CEO & Founder</span>
              <p>Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...</p>
            </div>
          </div>
		  <div class="item">
            <div class="thumb"> <img src="assets/img/team/7.jpg" alt="Thumb" />
              <div class="social">
                <ul>
                  <li class="facebook"> <a href="#"><i class="fab fa-facebook-f"></i></a> </li>
                  <li class="twitter"> <a href="#"><i class="fab fa-twitter"></i></a> </li>
                  <li class="linkedin"> <a href="#"><i class="fab fa-linkedin-in"></i></a> </li>
                </ul>
              </div>
            </div>
            <div class="info">
              <h4><a href="#">John Willims</a></h4>
              <span>CEO & Founder</span>
              <p>Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...</p>
            </div>
          </div>
		  <div class="item">
            <div class="thumb"> <img src="assets/img/team/8.jpg" alt="Thumb" />
              <div class="social">
                <ul>
                  <li class="facebook"> <a href="#"><i class="fab fa-facebook-f"></i></a> </li>
                  <li class="twitter"> <a href="#"><i class="fab fa-twitter"></i></a> </li>
                  <li class="linkedin"> <a href="#"><i class="fab fa-linkedin-in"></i></a> </li>
                </ul>
              </div>
            </div>
            <div class="info">
              <h4><a href="#">John Willims</a></h4>
              <span>CEO & Founder</span>
              <p>Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}


<div class="utf-clients-area default-padding">
  <div class="container">
	<div class="row">
      <div class="utf-site-heading text-center">
        <div class="col-md-8 col-md-offset-2">
          <h2>Our <span>Clients</span></h2>
          {/* <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="clients-items utf-clients-carousel owl-carousel owl-theme">
          <div class="item"> <a href="#"><img src="assets/img/clients/1.png" alt="Thumb" /></a> </div>
          <div class="item"> <a href="#"><img src="assets/img/clients/2.png" alt="Thumb" /></a> </div>
          <div class="item"> <a href="#"><img src="assets/img/clients/3.png" alt="Thumb" /></a> </div>
          <div class="item"> <a href="#"><img src="assets/img/clients/4.png" alt="Thumb" /></a> </div>
          <div class="item"> <a href="#"><img src="assets/img/clients/5.png" alt="Thumb" /></a> </div>
          <div class="item"> <a href="#"><img src="assets/img/clients/6.png" alt="Thumb" /></a> </div>
          <div class="item"> <a href="#"><img src="assets/img/clients/7.png" alt="Thumb" /></a> </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>

    );
};

export default About;
