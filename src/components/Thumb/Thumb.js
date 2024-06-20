
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaReact, } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import './Thumb.scss';
const images = require.context('../../images', false, /\.(webp|png|jpe?g|svg)$/);
function Thumb(props) {
    const getIcon = (title) => {
        switch (title.toLowerCase()) {
            case 'html':
                return <FaHtml5 key={title} />;
            case 'css':
                return <FaCss3Alt key={title} />;
            case 'javascript':
                return <TbBrandJavascript key={title} />;
            case 'react':
                return <FaReact key={title} />;
            default:
                return null;
        }
    };
    const getImagePath = (imageName) => {
        try {
            return images(`./${imageName}`);
        } catch (error) {
            console.error(`Image not found: ${imageName}`);
            return '';
        }
    };

    return (
        <div className='thumb'>
            <Link to={'/projet/' + props.projet.id}>
                <div className='card-img'>
                    <img src={getImagePath(props.projet.thumb)} alt={props.projet.alt} />
                </div>
                <div className='card-texte'>
                    <h3 className='title'>{props.projet.thumbTitle}</h3>
                    <p className='explication'>{props.projet.explication}</p>
                    <div className='tags'>
                        {props.projet.tags.map((tag, index) => {
                            // Vérifiez que 'tag' est un objet et qu'il a une propriété 'title'
                            if (tag && tag.title) {
                                return getIcon(tag.title);
                            } else {
                                console.error('Tag mal formaté à l\'index', index, ':', tag);
                                return null;
                            }
                        })}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Thumb;