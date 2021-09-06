import React from "react";
import HeaderBanner from "./HeaderBanner";
const Contact = () => {

    return(

        <>
       
   <HeaderBanner name="Contact" name1="contact" />

<div class="utf-contact-area default-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-5 address-info left-info">
          <h2>My Address Info</h2>
          <h4>I Am Available for Freelance Work. Connect with Me via Phone: <a href="#">+91 9455218249</a> or Email: <a href="#">vishnukushinagar@gmail.com</a></h4>
          <ul>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <p>Location <span>Kormanagala, Bengaluru</span></p>
            </li>
            <li>
              <i class="fas fa-envelope-open"></i>
              <p>Email Address <span><a href="#">vishnukushinagar@gmail.com</a></span></p>
            </li>
            <li>
              <i class="fas fa-mobile-alt"></i>
              <p>Phone Number <span><a href="#">+91 9455218249</a></span></p>
            </li>
            {/* <li>
              <i class="fas fa-globe"></i>
              <p>Website <span><a href="#">www.mywebsite.com</a></span></p>
            </li> */}
          </ul>
        </div>
    
        <div class="col-md-7 right-info utf-contact-form">
          <div class="content">
            <h2>Contact Us</h2>
            {/* <h4>Lorem ipsum dolor sit amet, consect adipisic elit, sed do eiusmod tempor incididunt ut labore et d magna aliqua enim sed do sit.</h4> */}
            <form class="utf-contact-form">
              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                        <input class="form-control" id="name" name="name" placeholder="Name" type="text" />
                      </div>              
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                        <input class="form-control" id="email" name="email" placeholder="Email*" type="text" />
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                        <input class="form-control" id="phone" name="phone" placeholder="Phone" type="number" />
                      </div>             
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                        <input class="form-control" id="subject" name="subject" placeholder="Subject" type="text" />
                      </div>
                  </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="form-group comments">
                    <textarea class="form-control" id="comments" name="comments" placeholder="Message..."></textarea>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <button type="submit" name="submit" id="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
       
      </div>
    </div>
  </div>




  <div class="container">
    <div class="row">	
		<div class="col-md-12">
			<div class="google-maps-area full-width">
			  <div class="google-maps">
				{/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981"></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52318.461209514804!2d77.58733107072602!3d12.93386672731393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc2d%3A0x1681f38e8c00ae56!2z4KSV4KWL4KSw4KSu4KSC4KSX4KSy4KS-LCDgpKzgpYfgpILgpJfgpLLgpYHgpLDgpYEsIOCkleCksOCljeCkqOCkvuCkn-CklQ!5e0!3m2!1shi!2sin!4v1616900979113!5m2!1shi!2sin"></iframe>
        </div>
			</div>
		</div>	
	</div>
</div>
</>

    );
};

export default Contact;
