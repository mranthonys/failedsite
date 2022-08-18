import './index.scss';
import './media.scss';
import Background from '../../assets/images/BGimage2.png';
import { Link } from 'react-router-dom';
import LetterAnimation from '../LetterAnimation';
import {useState, useEffect} from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const firstLineArray = ['A', 'n', 't', 'h', 'o','n', 'y', ' ',
                           'S', 'e', 'c', 'r', 'e', 't', 'i']
    
    const secondLineArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    useEffect(() => {
      setTimeout(() => {
       setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
    return (
      
      <div 
      className="container home-page">
        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,&nbsp;</span>

            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp;</span>
            <LetterAnimation letterClass={letterClass} strArray={firstLineArray} idx={15}/>
            
            <br/>
            <LetterAnimation letterClass={letterClass} strArray={secondLineArray} idx={22} />
            </h1>
            <h2>Frontend Developer / JavaScript Enthusiast / Child At Heart</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <div className="imgDiv">
        <img src={Background} alt="developer" />
        </div>
      </div>  
    );

}

export default Home 