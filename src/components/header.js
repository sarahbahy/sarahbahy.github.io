import { useState } from 'react';
import {  Link } from "react-router-dom";
import newTab from '../newTab.png';
const Header = () => {
    return (
      
            <nav className={"header"}>
              <div className={"header__links"}>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/blog">Blog</Link>
              <a href="https://www.linkedin.com/in/sarah-bahi/" rel="noreferrer" target="_blank" >LinkedIn <img src={newTab}  alt="logo" /> </a>
              <a href="https://github.com/sarahbahy" rel="noreferrer" target="_blank" >GitHub <img src={newTab}  alt="logo" /> </a>
              <a href="https://www.freelancer.com/u/sarahbahy" rel="noreferrer" target="_blank" >Freelancer <img src={newTab}  alt="logo" /> </a>
              <a href="https://www.upwork.com/freelancers/~019612154dd713acc9?s=1110580755057594368" rel="noreferrer" target="_blank" >Upwork <img src={newTab}  alt="logo" /> </a>
              </div>            
            </nav>
    )
}

export default Header
