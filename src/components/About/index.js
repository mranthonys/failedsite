import './index.scss'
import LetterAnimation from '../LetterAnimation'
import { useState, useEffect } from 'react'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
        }, 4000)
    },[])
    

    return (
        <div className='container aboutPage'>
            <div className='text-zone'>
                <h1>
                    <LetterAnimation 
                    letterClass={letterClass}
                        strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
                        idx={15}
                    />
                </h1>
                <p>
                   Lover of pepperoni pizza, web development, and new challenges. All at once or separately. 
                </p>
                <p>
                   If programmers were superheroes, I would be Batman. 
                   Certainly not the best, but resourceful and always seeking advice. 
                   Probably Adam West's Batman. Again, not the greatest Batman, 
                   but talented, light-hearted and made his mark. Like the Caped Crusader, 
                   I have juggled several roles to be successful and live up to my full potential. 
                   While working full-time, I have balanced coding bootcamp, college classes, and 
                   learning skills for new projects. My journey into web development hasn't been easy, 
                   but has been a rewarding transition. I am excited for the next step to converge my 
                   responsibilities and talents to enter the workplace as a developer. 
                </p>
                <p>
                   I am an ambitious and hard working developer who is passionate about 
                   learning new technologies and skills in order to create new and exciting content.
                   My dream is to take my skills and join an established IT company or Start-Up and 
                   continue this wonderful journey into the next level.
                </p>
            </div>
        </div>
    )
}

export default About 
