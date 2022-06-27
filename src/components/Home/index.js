import LogoTitle from '../../assets/images/logo-a.png';
import { Link } from 'react-router-dom';
import './index.scss';
const Home = () => {

    return (
      <div className="container home-page">
        <div className="text-zone">
            <h1>Hi, <br /> I'm
            <img src={LogoTitle} alt="developer" />
            Anthony Secreti
            <br/>
            Web Developer
            </h1>
            <h2>Frontend Developer / JavaScript Enthusiast / Child At Heart</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
      </div>  
    );

}

export default Home 