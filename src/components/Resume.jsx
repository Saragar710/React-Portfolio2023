import React from 'react';
 import ResumePdf from '../assets/resumepdf.pdf'
 import '../styles/Resume.css';

function Resume() {
    return (
        <section className='my-5'>
            <div className='my-2'>
                 <p> Download my <a href={ResumePdf} download>My Resume</a></p> 
              <h3> Front End Skills</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>JQuery</li>
            
              </ul>



            <h3>Back End Skills</h3>
            <ul>
                <li>NodeJs</li>
                <li>SQL</li>
                <li>Express</li>
                <li>MongoDB</li>
              
            </ul>











            </div>
        </section>
    );
}
export default Resume;