import { useState } from 'react';
import NotActiveButton from './NotActiveButton'
const Projects = () => {
    return (
      <section className=" projects">
      <p className=" projects__title regular capitalize"><strong>Loves</strong></p>
        <p className=" projects__title regular capitalize"><strong>to Create</strong></p>
        <p className=" projects__title regular capitalize"><strong>Stunning</strong></p>
        <p className=" projects__title regular capitalize"><strong>Web Pages</strong></p>
      <p className=" projects__subtitle light">I'm interseted in working with Vue, React, SVG animations, CSS animations 
        and in projects that makes a positive impact on the world</p>
      <div className=" projects__collection">
        <a className="collection__card" href="https://sarahbahy.github.io/react-task-tracker/">
          <h4 className="card__title regular capitalize">Task Tracker App</h4>
          <p className="card__details light">a react app that enables the user 
          to a add new task, remove a task, and mark a task as a reminder by double clicking on it </p>
          <h5 className="card__details bold"><strong>Future work:</strong> make it accessible </h5>
        </a>
        <NotActiveButton title="Library App" description="a react app that enables the user to search through books 
            and categorize the books in 3 different categories"/>

        <a className="collection__card" href="https://blog.uniparticle.com/">
          <h4 className="card__title regular capitalize">Blog Page</h4>
          <p className="card__details light">a responsive blog page that containes different blogs which can be filtered with tags</p>
        </a>
        <a className="collection__card" href="https://blog.uniparticle.com/article/8">
          <h4 className="card__title regular capitalize">Blog Article Page</h4>
          <p className="card__details light">a responsive blog article page with comment form validation.<br/> the article is also written by me &#x1F913;	! </p>
        </a>
        <NotActiveButton title="Would You Rather Game" description="a react app that allow the user to add poll questions, answer questions and show leaderboard "/>
      </div>
      </section>
    )
}

export default Projects
