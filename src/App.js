import lines from './lines.svg';
// import { useState } from 'react';
import NotActiveButton from './components/NotActiveButton'
import './scss/App.scss';

function App() {
  // const [isShown, setIsShown] = useState(false);
  return (
    
      <main className="app">
        <img src={lines} className="app__bg" alt="logo" />
        <section className="app__intro">
          <div className="intro">
          <h2 className="intro__title bold">Hello, I’m <em>sarah</em></h2>
          <p className="intro__subtitle regular"><strong>Front-end Developer</strong></p>
          </div>
          <div className="btns">
          <button className="btn btn--orange"><a href="https://www.linkedin.com/in/sarah-bahi/">LinkedIn</a> </button>
          <button className="btn btn--outline"><a href="https://github.com/sarahbahy">GitHub</a></button>
          </div>
        </section>
        <section className="app__projects">
        <h2 className="app__projects__title bold" ><strong>My Projects</strong></h2>
        <div className="app__projects__collection">
          <a className="collection__card" href="https://sarahbahy.github.io/react-task-tracker/">
            <h4 className="card__title regular">Task Tracker App</h4>
            <p className="card__details light">a react app that enables the user 
            to a add new task, remove a task, and mark a task as a reminder by double clicking on it </p>
          </a>
          <NotActiveButton title="Library App" description="a react app that enables the user to search through books 
              and categorize the books in 3 different categories"/>

          <a className="collection__card" href="https://blog.uniparticle.com/">
            <h4 className="card__title regular">Blog Page</h4>
            <p className="card__details light">a responsive blog page that containes different blogs which can be filtered with tags</p>
          </a>
          <a className="collection__card" href="https://blog.uniparticle.com/article/8">
            <h4 className="card__title regular">Blog Article Page</h4>
            <p className="card__details light">a responsive blog article page with comment form validation</p>
          </a>
          <NotActiveButton title="Would You Rather Game" description="a react app that allow the user to add poll questions, answer questions and show leaderboard "/>
        </div>
        </section>
      </main>
  );
}

export default App;
