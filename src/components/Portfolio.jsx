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
        {
            name: 'Employee_Tracker',
            deploy: "https://drive.google.com/file/d/1VWfWTgZ9kW4hP9m9q9xHJLXuq3mmawa-/view",
            repo: "https://github.com/Saragar710/Employee-Trackerv1"
        },
        {
            name: 'Weather_Forecast',
            deploy: "https://saragar710.github.io/Weather-Forecast-For-Aug-2023",
            repo: "htts://github.com/Saragar710/Weather-Forecast-For-Aug-2023"
        },
        {
            name: 'clubBook',
            deploy: "https://club-book-688a8712a651.herokuapp.com",
            repo: "https://github.com/Saragar710/ClubBook"
        },
        {
            name: 'Travel_Itinerary',
            deploy:"https://saragar710.github.io/Travel-Itinerary ",
            repo:"https://github.com/Saragar710/Travel-Itinerary"
        }
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

