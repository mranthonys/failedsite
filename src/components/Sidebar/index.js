import './index.scss';
import './media.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-finalC.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { 
    faGithub, 
    faInstagram, 
    faLinkedin, 
    faTwitter 
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
    <div className='wrapper'>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://www.linkedin.com/in/anthony-secreti-4a48aa185/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://github.com/mranthonys">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://www.instagram.com/anthonysecreti/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://twitter.com/anthonyjsecreti">
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        </div>
    </div>
)

export default Sidebar
