import './styles/About.css'
import '.assets/Raven'

console.log(Raven);
function About() {
    return <img src={Raven} alt="Raven" />;
}
const About =() => {
    return (
    <div>
            <p>
                I am a Front End Webdeveloper. I am excited to continue to learn and grow in my new career path.
            </p>
        </div>
    );
}
export default About;