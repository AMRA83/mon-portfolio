
import React from 'react';
import Thumb from '../../components/Thumb/Thumb';
import projets from '../../projectsData/projectsData.json';
import './Projects.scss';

function Projects() {
    return (
        <section className='section-projets'>
            <h2>Mes projets</h2>
            <div className='section-thumbs'>
                {projets.map((projet) => (
                    <Thumb key={projet.id} projet={projet} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
