import React from "react";
import { NavLink } from 'react-router-dom';
import CommonAbout from './CommonAbout';
import CommonProject from './CommonProject';
import CommonServiceSlider from "./CommonServiceSlider";
import CommonSlider from "./CommonSlider";
const Home = () => {
    return(
        <>
   
<CommonSlider />
<CommonAbout /> 
<CommonProject />
<CommonServiceSlider />
</>
    );
};
export default Home;
