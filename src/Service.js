import React from "react";
import { NavLink } from 'react-router-dom';
import CommonService from './CommonService';
import CommonServiceSlider from "./CommonServiceSlider";
import HeaderBanner from './HeaderBanner';

const Service = () => {

    return(

        <>
   
<HeaderBanner name="Service" name1="service" />

<CommonService />

<CommonServiceSlider />


</>

    );
};

export default Service;
