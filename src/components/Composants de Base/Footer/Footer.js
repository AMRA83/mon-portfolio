import './Footer.scss'
import Logo from '../Header/Logo.webp'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

function Footer() {
    return (
        <section className="section-footer">
            <div className='copyright'>
                <img src={Logo} alt=" Logo" className='logo' />
            </div>

            <div className="social-links">
                <a href="" download="Amra_Mesanovic_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <FaFileDownload className='icon' />
                </a>
                <a href="https://github.com/AMRA83" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='icon' />
                </a>
                <a href="https://www.linkedin.com/in/amra-mesanovic-b52574106/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='icon' />
                </a>
                <a href="mailto:amra.mesanovic@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className='icon' />
                </a>

            </div>
            <p>Copyright © 2024 Amra Mesanovic</p>

        </section>
    )
}
export default Footer;