import React from "react";
import { NavLink } from 'react-router-dom';
import CommonAbout from './CommonAbout';
import CommonService from './CommonService';
const HeaderBanner = (props) => {
    return(

        <>
  
<div class="utf-page-heading shadow dark bg-fixed text-light" style={{  
  backgroundImage: "url(" + "assets/img/banner/banner-2.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>{props.name}</h1>
		<div class="utf-breadcrumb-items">		  
			<ul class="breadcrumb">
			  <li class="active">{props.name1}</li>
			</ul>			
		</div>
      </div>
    </div>
  </div>
</div>

</>

    );
};

export default HeaderBanner;
