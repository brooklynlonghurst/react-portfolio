import React from 'react'
// import { annotate, annotationGroup } from 'rough-notation';

function About() {
    return (
        <div class="about-section">
        <div class="intro-container" id="intro-container">
            <h1 class="text">Hi I'm Brooklyn, a web <span id="developer">developer.</span></h1>
            <p>I love to combine beauty with functionality.</p>
            <p>I'm a full stack web developer with a knowledge of <span id="react">React</span>, <span id="javascript">JavaScript</span>, and <span id="css">CSS</span>. I became fascinated with computer programming when I saw those first two words "Hello World" I had coded appear on screen. I had to learn more.</p>
            <p>I have a strong growth mindset and a passion for creating. I'm determined to see things through and enjoy lifting teams to success with my positivity and kindness.</p>
            <p>I'm currently looking for a new role as a developer. So let's talk!</p> 
            <button className='github-button' onClick={(e) => {e.preventDefault(); window.location.href="https://github.com/brooklynlonghurst"}}>GitHub</button> 
            <button className='linkedin-button' onClick={(e)=> {e.preventDefault(); window.location.href="https://www.linkedin.com/in/brooklyn-longhurst-bb1118268/"}}>LinkedIn</button> 
        </div>


{/* const a1 = annotate(document.getElementById('developer'), { { type: 'highlight', color: 'rgb(244, 214, 244)', iterations: 1 }});
const a2 = annotate(document.getElementById('react'), { {type: 'highlight', color: 'rgb(244, 214, 244)', iterations: 1 }});
const a3 = annotate(document.getElementById('javascript'), { {type: 'highlight', color: 'lightyellow', iterations: 1 }});
const a4 = annotate(document.getElementById('css'), { {type: 'highlight', color: 'lightblue', iterations: 1 }});

const ag = annotationGroup([a1, a2, a3, a4]);
ag.show(); */}

        <div class="img-container">
            <img src={require("./Brooklyn-Longhurst-img.png")} alt="Brooklyn Longhurst img" class="self-img" /> 
        </div>  
    </div> 
    )
}

export default About