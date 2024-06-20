import React from 'react';
import { useParams } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import projets from '../../projectsData/projectsData.json';
import './ProjectDetail.scss';

function ProjectDetail() {
    const { id } = useParams();
    const projet = projets.find((p) => p.id === id);

    if (!projet) {
        return <div>Projet non trouvé</div>;
    }

    return (
        <div className='project-detail'>
            <h2>{projet.title}</h2>
            <img src={projet.cover} alt={projet.altCover} />
            <p>{projet.description}</p>
            <div className='links'>
                {projet.linkPage && <a href={projet.linkPage}><FaLinkedin /> Voir le projet</a>}
                {projet.linkGithub && <a href={projet.linkGithub}><FaGithub /> Voir sur Github</a>}
            </div>
            <div className='tags'>
                {projet.tags.map(tag => {
                    switch (tag.title.toLowerCase()) {
                        case 'html':
                            return <FaHtml5 key={tag.title} />;
                        case 'css':
                            return <FaCss3 key={tag.title} />;
                        case 'javascript':
                            return <TbBrandJavascript key={tag.title} />;
                        case 'react':
                            return <FaReact key={tag.title} />;
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
}

export default ProjectDetail;