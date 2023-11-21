import '../styles/Navbar.css';

const styles = {
    navbarStyle: {
        background: '',
        justifyContent: 'flex-end',
    },
}

const Navbar =()  => {
    return (
        <nav style={style.navbarStyle} className='navbar'>
            <a href="/">ABOUT ME</a>
            <a href="/">PORTFOLIO</a>
            <a href="/">CONTACT</a>
            <a href="/">RESUME</a>
        </nav>
    );
}
export default Navbar;