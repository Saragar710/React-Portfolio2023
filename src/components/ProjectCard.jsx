import React from 'react';


function Project({ project }) {
    const {  path, name, repo, deploy } = project;

    return (
        <div className='project' key={name}>
            <img src={path} alt={name} className='project-img' />
            <div className='project-text'>
                <h3>
                    <a href={deploy}>{name}</a>{' '}
                    <a href={repo}><i className='fab fa-github'></i></a>
                </h3>

            </div>

        </div>
    )
}
export default Project;