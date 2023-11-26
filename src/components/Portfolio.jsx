import React, { useState } from 'react';
import ProjectCard from './ProjectCard.jsx'
// import './styles/Portfolio.css';



// const styles = {
//     PortfolioStyles: {
//         background: '#C297B8'
//     }
// }
function Portfolio() {
    const [projects] = useState([
        {
            name: 'Express_Notetaker',
            deploy:"/https://express-note-taker092023-fb3cb27dd87e.herokuapp.com/ ",
            repo: "https://github.com/Saragar710/Express-Note-Taker092023 "
        },
    ])

    return (
        <>
        <div className='flex-row'>
            {projects.map((project, idx) => (
                <ProjectCard project={project} key={"project" + idx} />
            ))}
        </div>

      
        </>

    );
}

export default Portfolio;

{/* <div className="container">
<h1 className="Projects">Employee Tracker</h1>
<img
className="Employee-Tracker"
src={`https://github.com/Saragar710/Employee-Trackerv1`}
alt="Empoyee Tracker"
/>
</div>
<div className="conatiner">
<h1 className="Projects">Express Note Taker</h1>
<img
className="Express-Note-Taker"
src={`https://github.com/Saragar710/Express-Note-Taker092023 `}
//https://express-note-taker092023-fb3cb27dd87e.herokuapp.com/
alt="Express Note Taker"
/>
</div>
<div className="container">
<h1 className="Projects">Weather Forecast</h1>
<img 
className='Weather-Forecast'
src={` https://github.com/Saragar710/Weather-Forecast-For-Aug-2023`}
//https://saragar710.github.io/Weather-Forecast-For-Aug-2023/
alt="Weather Forecast"/>
</div>
<div className='clubBook'>
<h1 className="Projects">clubBook</h1>
<img 
src={`https://github.com/Saragar710/ClubBook`}
//https://club-book-688a8712a651.herokuapp.com/
alt="clubBook"
/>
</div> */}