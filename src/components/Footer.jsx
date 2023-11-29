// import React from 'react';
// import './styles/Footer.css';


// const style = {
//     footerStyle: {
//         background: '#DE89BE',
//         justifyContent: 'flex-end',
//     },
// }
// {/* <a href="/">github</a>
//     <a href="/">Linkedin</a>

//  <div style={style.footerStyle} className='footer'> 
// </div> */}


const Footer = () => {
    const icons = [
        {
            name: "fab fa-github",
            link: "#https://github.com/Saragar710"
        },
        {
            name: "fab fa-linkedin",
            link: "#www.linkedin.com/in/saragar710 "
        }
    ]
    return (

        <footer className="flex-row px-1">
            {icons.map(icon => (
                <a href={icon.link} key={icon.name} target="_blank" rel="noopener referrer"><i className={icon.name}></i></a>
            ))}
        </footer>
    );
}
export default Footer;