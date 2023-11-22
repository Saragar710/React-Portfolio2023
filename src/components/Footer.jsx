import './styles/Footer.css';


const styles = {
    footerStyle: {
        background: 'DE89BE',
        justifyContent: 'flex-end',
    },
}

const Footer =()  => {
    return (
        <div style={style.footerStyle} className='footer'>
            <a href="/">github</a>
            <a href="/">Linkedin</a>
            <a href="/"><Stackoverflow></Stackoverflow></a>
            
        </div>
    );
}
export default Footer;