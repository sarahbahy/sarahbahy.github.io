import { useState } from 'react';
import blog from '../explore.svg';
const Blog = () => {
    return (
      <section className=" blog">
      <div className=" headline">
      <p className=" headline__text regular capitalize"><strong>Love</strong></p>
        <p className=" headline__text regular capitalize"><strong>to share</strong></p>
        <p className=" headline__text regular capitalize"><strong>my experience</strong></p>
        <p className=" headline__text regular capitalize"><strong>with you</strong></p>
      <p className=" headline__subtext light">Nothing to see here right now</p>
      </div>
      <img src={blog}  alt="blog" />
      </section>
    )
}

export default Blog
