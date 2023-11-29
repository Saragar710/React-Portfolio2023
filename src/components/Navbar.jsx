import { Link} from 'react-router-dom';
import '../styles/Navbar.css';


export default function Navbar({currentPage}) {
    // const linkStyle = { border: '1px solid black', padding: '5px'};
   //const currentPage= window.location.pathname
// console.log(currentPath)
  const pages = ['portfolio', 'contact', 'resume'];

    return (
<nav>
  <ul className='flex-row'>
    { currentPage =="/"? (pages):(
       <li className={`mx-5 ${currentPage === '/'  && 'navActive'}`} key="about">
      <Link to="">About</Link>
    </li>)}
   { /*// <li className={`mx-5 ${currentPage === '/'  && 'navActive'}`} key="about">
    //   <Link to="/">About</Link>
    // </li> */}
    {/* <li>
      <Link to="/">Portfolio</Link>
    </li>
   <li>
    <Link to="/">Contact</Link>
   </li>
   <li>
    <Link to="">Resume</Link>
   </li> */}
      {pages.map((Page) => ( 
       <li className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`} key={Page} >
        <Link to={`/${Page}`}></Link>
     </li>
     ))
      }
  </ul>
</nav>
    );
  }
    
