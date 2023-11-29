import { Link} from 'react-router-dom';
// import './styles/Navbar.css';


export default function Navbar({currentPage}) {
    // const linkStyle = { border: '1px solid black', padding: '5px'};
    const currentPath= window.location.pathname
console.log(currentPath)
  const pages = ['portfolio', 'contact', 'resume'];

    return (
<nav>
  <ul className='flox-row'>
    { currentPath =="/"?(  " "):(
       <li className={`mx-5 ${currentPage === '/'  && 'navActive'}`} key="about">
      <Link to="/">About</Link>
    </li>)}
   { /*// <li className={`mx-5 ${currentPage === '/'  && 'navActive'}`} key="about">
    //   <Link to="/">About</Link>
    // </li> */}
    <li>
      <Link to="/">Portfolio</Link>
    </li>
   <li>
    <Link to="/">Contact</Link>
   </li>
   <li>
    <Link to="/">Resume</Link>
   </li>
     {/* {pages.map((Page) => ( */}
    {/* //   <li className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`} key={Page} >
    //     <Link to={`/${Page}`}></Link>
    //   </li>
    // ))} */}
  </ul>
</nav>
    );
  }
    
  //   return (
  //     <nav className="main-header-menu">
  //       <div style={linkStyle}>
  //         <a href="#">ABOUT ME</a>
  //       </div>
  //       <div style={linkStyle}>
  //         <a href="#">PORTFOLIO</a>
  //       </div>
  //       <div style={linkStyle}>
  //         <a href="#">CONTACT</a>
  //       </div>
  //       <div style={linkStyle}>
  //         <a href="#">RESUME</a>
  //       </div>
  //     </nav>
  //   );
  // }

// const styles = {
//     navbarStyle: {
//         background: 'FDCFF3',
//         justifyContent: 'flex-end',
//     },
// }

// const Navbar =()  => {
//     return (
//         <nav style={style.navbarStyle} className='navbar'>
//             <a href="/">ABOUT ME</a>
//             <a href="/">PORTFOLIO</a>
//             <a href="/">CONTACT</a>
//             <a href="/">RESUME</a>
//         </nav>
//     );
// }
//export default Navbar;