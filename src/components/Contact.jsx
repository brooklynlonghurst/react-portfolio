import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { RoughNotation } from "react-rough-notation";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_mals9yp', 
        'template_uebsgfm', 
        form.current, 
        'er-J8UbObwbhTz2Qf')
        .then((result) => {
            console.log(result.text);
            console.log('message sent')
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
    <div class="contact-container" id="contact-section">
    <h2>Contact</h2>
    <p>I would love to <RoughNotation type='highlight' show={true} color="#FFB10070" iterations={1}>hear from you</RoughNotation>! You can message me directly below, email me at brooklyn.longhurst@gmail.com or contact me through <a href='https://www.linkedin.com/in/brooklyn-longhurst-bb1118268/' className='linkedIn-link' target="_blank">LinkedIn.</a></p>
        <section class="">
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <input className="contact-inputs" type="text" name="user_name" placeholder='Name'/>
                    <input className="contact-inputs" type='text' name='user_email' placeholder='Email' />
                    <textarea className="contact-textarea" type='textarea' name='message' placeholder='Message' />
                    <div className='button-container'>
                    <button className='contact-button'>Send</button>
                    </div>
                </form>
            </div>
            {/* <div>
                <a href="https://www.linkedin.com/in/brooklyn-longhurst-bb1118268/"><img class="linkedin-icon" src="https://www.svgrepo.com/show/922/linkedin.svg" alt='linkedin-icon'/></a>
            </div> */}
        </section>
    </div>
    )
}

export default Contact