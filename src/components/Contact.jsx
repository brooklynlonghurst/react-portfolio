import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

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