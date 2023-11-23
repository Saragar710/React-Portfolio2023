import './styles/Navbar.css';
export default function Navbar() {
    const linkStyle = { border: '1px black', padding: '5px'};
    
    return (
        <nav className="main-header-menu">
           <div style={linkStyle}>
          <a href="#">ABOUT ME</a>
        </div>
        <div style={linkStyle}>
          <a href="#">PORTFOLIO</a>
        </div>
        <div style={linkStyle}>
          <a href="#">CONTACT</a>
        </div>
        <div style={linkStyle}>
          <a href="#">RESUME</a>
        </div>
        </nav>
    )
}

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