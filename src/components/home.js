import { useState } from 'react';
import blog from '../responsive.svg';
const Home = () => {
    return (
      
        <section className="home">
          <div className="headline">
        <p className="headline__text regular capitalize"><strong>Transform</strong></p>
        <p className="headline__text regular capitalize"><strong>your UI into</strong></p>
        <p className="headline__text regular capitalize"><strong>responsive</strong></p>
        <p className="headline__text regular capitalize"><strong>Fully Functional</strong></p>
        <p className="headline__text regular capitalize"><strong>Web Pages</strong></p>
        <p className=" headline__subtext light">Nothing to see here right now</p>
        </div>
        {/* <img src={blog}  alt="blog" /> */}
      </section>
    )
}

export default Home
