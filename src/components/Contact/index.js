import './index.scss';
import './media.scss'
import LetterAnimation from '../LetterAnimation';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
  } from 'react-leaflet';

export const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef ()

    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
                'service_twfc313',
                'template_25cmydj',
                form.current, 
                'uefnEY1r_ZheGLdIb'
            )
            .then(
                () => {
                    alert('Message Sent!')
                    window.location.reload(false)
                }, 
                () => {
                    alert('Uh Oh...Failed to Send')
                }
            )
    }

return (
    <div className='container contactPage'>
        <div className='text-zone'>
            <h1>
                <LetterAnimation 
                    letterClass={letterClass}
                    strArray={['C','O','N','T','A','C','T',' ','M','E']}
                    idx={15}
                    />
            </h1>
            <p>
                I am interested in Full-time or contract to hire opportunities either as a Jr. Developer or support personel. 
                If you have enjoyed the work you see here or simply have questions, constructive advice, 
                or comments, please don't hesitate to reach out!
            </p>
            <div className='contactForm'>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className='partial'>
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className='partial'>
                            <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>
                        <textarea placeholder="Message" name="message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="Send" />
                        </li>
                    </ul>                   
                </form>
            </div>
        </div>
        <div className='mapInfo'>
            Anthony Secreti,
            <br/>
            USA
            <br/>
            207 N. Arbor Park <br/>
            Louisville KY, 40214 <br/>
            <span>anthony.j.secreti@outlook.com</span>
        </div>
        <div className='mapWrap'>
        <MapContainer center={[38.16538720513404, -85.76756855326838]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[38.16538720513404, -85.76756855326838]}>
    <Popup>
      Send paychecks here! <br /> Hours: M-F 24/7
    </Popup>
  </Marker>
</MapContainer>
        </div>
    </div>
  )
}

export default Contact