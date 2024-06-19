import './Footer.scss'
import Logo from '../Header/Logo.webp'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <section className="section-footer">
            <div className='copyright'>
                <img src={Logo} alt=" Logo" className='logo' />
            </div>
            <div className="social-links">
                <a href="https://github.com/AMRA83" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='icon' />
                </a>
                <a href="https://www.linkedin.com/in/amra-mesanovic-b52574106/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='icon' />
                </a>
            </div>
            <p>Copyright © 2024 Amra Mesanovic</p>

        </section>
    )
}
export default Footer;