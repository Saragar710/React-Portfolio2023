import './styles/Portfolio.css'



const styles = {
    PortfolioStyles: {
        background: 'C297B8'
    }
}
const Portfolio= ()  =>{
    return (
        <>
         <div className="container">
                    <h1 className="Projects">Employee Tracker</h1>
                    <img
                    className="Employee Tracker"
                    src={`https://github.com/Saragar710/Employee-Trackerv1`}
                    alt="Empoyee Tracker"
                    />
                </div>
                <div className="conatiner">
                    <h1 className="Projects">Express Note Taker</h1>
                    <img
                    className="Express Note Taker"
                    src={`https://github.com/Saragar710/Express-Note-Taker092023 `}
                    alt="Express Note Taker"
                    />
                </div>
                <div className="container">
                    <h1 className="Projects">Weather Forecast</h1>
                    <img 
                    className='Weather Forecast'
                    src={` https://github.com/Saragar710/Weather-Forecast-For-Aug-2023`}
                    alt="Weather Forecast"/>
                </div>
                <div className='clubBook'>
                    <h1 className="Projects">clubBook</h1>
                    <img 
                    src={`https://github.com/Saragar710/ClubBook`}
                    alt="clubBook"
                    />
                </div>
                
        
        
        </>

    
            
    

    );
}
export default Portfolio;