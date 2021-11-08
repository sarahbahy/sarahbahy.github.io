import { useState } from 'react';
import NotActiveButton from './NotActiveButton'
const Projects = () => {
    return (
      <section className=" projects">
      <div className="headline">
      <p className=" headline__text regular capitalize"><strong>deliver</strong></p>
        <p className="headline__text regular capitalize"><strong>Stunning</strong></p>
        <p className="headline__text regular capitalize"><strong>Web Pages</strong></p>
        <p className="headline__text regular capitalize"><strong>using latest</strong></p>
        <p className="headline__text regular capitalize"><strong>technologies</strong></p>
      <p className="headline__subtext light">Experienced with Vue, React, Js, Css, HTML, and SVG animations</p>
      </div>
      <div className=" projects__collection">
      
        
        <NotActiveButton title="HCM Lab" description="Created and Transformed UI into fully functional webiste"/>
        
        <NotActiveButton title="E-Library" description="created functional web app that enables the user to search through books 
            and categorize the books in 3 different categories"/>
        
        <NotActiveButton title="Would You Rather Game" description="created functional web app that allow the user to add poll questions, answer questions and visit leaderboard "/>
        
        <a className="collection__card" href="https://sarahbahy.github.io/react-task-tracker/" rel="noreferrer" target="_blank">
          <h3 className="card__title regular capitalize">Task Tracker App</h3>
          <p className="card__details light">created functional app that enables the user 
          to a add new task, remove a task, and mark a task as a reminder by double clicking on it </p>
        </a>
      </div>
      </section>
    )
}

export default Projects
