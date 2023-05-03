import React from 'react'

function Contact() {
    return (
    <div class="contact-container" id="contact-section">
    <h2>Contact</h2>
    <p>Let's get in touch.</p>
        <section class="">
            <div className='contact-form'>
                <form>
                    <input className="contact-inputs" type="text" placeholder='Name'/>
                    <input className="contact-inputs" type='text' placeholder='Email' />
                    <input className="contact-inputs" type='text' placeholder='Message' />
                </form>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/brooklyn-longhurst-bb1118268/"><img class="linkedin-icon" src="https://www.svgrepo.com/show/922/linkedin.svg" /></a>
            </div>
        </section>
    </div>
    )
}

export default Contact