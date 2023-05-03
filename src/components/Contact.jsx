import React from 'react'

function Contact() {
    return (
    <div class="contact-container" id="contact-section">
    <h2>Contact</h2>
    <p>Let's get in touch.</p>
        <section class="contact-icons">
            <div>
                <a data-target="#contactModal" href="#contactModal" id="contact-modal">
                    <img class="gmail-icon" src="https://www.svgrepo.com/download/24973/gmail.svg" />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/brooklyn-longhurst-bb1118268/"><img class="linkedin-icon" src="https://www.svgrepo.com/show/922/linkedin.svg" /></a>
            </div>
        </section>
    </div>
    )
}

export default Contact