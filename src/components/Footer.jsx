import React from 'react';
import './styles/Footer.css';


const style = {
    footerStyle: {
        background: '#DE89BE',
        justifyContent: 'flex-end',
    },
}

const Footer =()  => {
    return (
        <div style={style.footerStyle} className='footer'>
            <a href="/">github</a>
            <a href="/">Linkedin</a>
        
            
        </div>
    );
}
export default Footer;