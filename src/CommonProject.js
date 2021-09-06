import React from "react";
import { NavLink } from 'react-router-dom';
import Sdata from './Sdata'; 
const CommonProject = () => {

    return(

        <>
<div id="portfolio" className="utf-portfolio-area-item text-light default-padding">
  <div className="container">
    <div className="utf-portfolio-items-area">
      <div className="row">
        <div className="col-md-12 utf-portfolio-content">
          <div className="row masonary">
            <div id="portfolio-grid" className="utf-portfolio-items col-3">
             
              <div className="pf-item Creative Designer photography">
                <div className="effect-slide-up"> <NavLink to="#">

                  {/* {

                    Sdata.map((val, ind) => {
return <CommonProject 
imgsrc= {val.imgsrc}
title={val.title}
/>
                    })
                  } */}



               
                    <img src="assets/img/portfolio/cr1.jpg" alt="thumb" />
                  
                  <h4>Creative Agency</h4>
                 
                  <div className="category"> <span>Design</span> <span>Creative Designer</span> </div>
                  </NavLink>
				</div>
              </div>
      
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

export default CommonProject;
