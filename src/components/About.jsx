import React from 'react'

function About() {
    return (
        <div class="about-section">
        <div class="intro-container" id="intro-container">
            <h1 class="text">Hi I'm Brooklyn, a web <span id="developer">developer.</span></h1>
            <p>I love to combine beauty with functionality.</p>
            <p>I'm a full stack web developer with a knowledge of <span id="react">React</span>, <span id="javascript">JavaScript</span>, and <span id="css">CSS</span>. I became fascinated with computer programming when I saw those first two words "Hello World" I had coded appear on screen. I had to learn more.</p>
            <p>I have a strong growth mindset and a passion for creating. I'm determined to see things through and enjoy lifting teams to success with my positivity and kindness.</p>
            <p>I'm currently looking for a new role as a developer. So let's talk!</p> 
            <button className='github-button' onClick={(e) => {e.preventDefault(); window.location.href="https://github.com/brooklynlonghurst"}} target="_blank">GitHub</button> 
            <button className='linkedin-button' onClick={() => window.open("https://www.linkedin.com/in/brooklyn-longhurst-bb1118268/", "_blank")}>LinkedIn</button>
        </div>

        <div class="img-container">
            <img src={require("./Brooklyn-Longhurst-img.png")} alt="Brooklyn Longhurst img" class="self-img" /> 
        </div>  
    </div> 
    )
}

export default About