import { useState } from 'react';
import logo from '../logo192.png';
const Logo = () => {
    return (
      
            <ul className={"logo"}>
              <img src={logo}  alt="logo" />
              <div className={"logo__text-wrapper"}>
          <h3 className=" bold capitalize"><em>Sarah Bahi</em></h3>
          <p className=" regular capitalize">Front-end Developer</p>
          </div>
            </ul>
    )
}

export default Logo
