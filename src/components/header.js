import { useState } from 'react';
import {  Link } from "react-router-dom";
const Header = () => {
    return (
      
            <nav className={"header"}>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/blog">Blog</Link>
              <a href="https://www.linkedin.com/in/sarah-bahi/">LinkedIn</a>
              <a href="https://github.com/sarahbahy">GitHub</a>
            </nav>
    )
}

export default Header
