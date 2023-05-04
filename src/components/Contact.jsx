import React from 'react'

function Contact() {
    return (
    <div class="contact-container" id="contact-section">
    <h2>Contact</h2>
        <section class="">
            <div className='contact-form'>
                <form>
                    <input className="contact-inputs" type="text" placeholder='Name'/>
                    <input className="contact-inputs" type='text' placeholder='Email' />
                    <textarea className="contact-textarea" type='textarea' placeholder='Message' />
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