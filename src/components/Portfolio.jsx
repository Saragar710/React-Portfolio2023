import React, { useState } from 'react';
import ProjectCard from './ProjectCard.jsx'
import Express_Notetaker from '../assets/projects/Express_Notetaker.jpg'
import Employee_Tracker from '../assets/projects/Employee_Trackerv1.jpg'
import Weather_Forecast from '../assets/projects/Weather_Forecast_For_Aug_2023.jpg'
import clubBook from '../assets/projects/clubBook.jpg'
import Travel_Itinerary from  '../assets/projects/Travel_Itinerary.jpg'


// import './styles/Portfolio.css';



// const styles = {
//     PortfolioStyles: {
//         background: '#C297B8'
//     }
// }
function Portfolio() {
    const [projects] = useState([
        {   path:Express_Notetaker,
            name: 'Express_Notetaker',
            deploy:"https://express-note-taker092023-fb3cb27dd87e.herokuapp.com ",
            repo: "https://github.com/Saragar710/Express-Note-Taker092023 "
        },
        {
            path: Employee_Tracker,
            name: 'Employee_Tracker',
            deploy: "https://drive.google.com/file/d/1VWfWTgZ9kW4hP9m9q9xHJLXuq3mmawa-/view",
            repo: "https://github.com/Saragar710/Employee-Trackerv1"
        },
        { 
            path: Weather_Forecast,
            name: 'Weather_Forecast',
            deploy: "https://saragar710.github.io/Weather-Forecast-For-Aug-2023",
            repo: "htts://github.com/Saragar710/Weather-Forecast-For-Aug-2023"
        },
        {
            path: clubBook,
            name: 'clubBook',
            deploy: "https://club-book-688a8712a651.herokuapp.com",
            repo: "https://github.com/Saragar710/ClubBook"
        },
        {
            path: Travel_Itinerary,
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

