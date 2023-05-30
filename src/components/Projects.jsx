import React from 'react'
import { RoughNotation } from "react-rough-notation";


function Projects() {
    return (
        <div class="projects-container" id="projects-section">
        <h2>Projects</h2>
        <section class="project-card">
            <div class="text-content">
                <h3><RoughNotation type='highlight' show={true} color="#90BAAD95" iterations={1}>The Botanical Blog</RoughNotation></h3>
                <p>Created a platform for plant enthusiasts to share their passion by developing a blog using vanilla JavaScript, CSS, Express, and Axios.</p>
                <div className='project-buttons'>
                <button className='github-button' onClick={(e) => {e.preventDefault(); window.location.href="https://github.com/brooklynlonghurst/foundation-capstone"}} target="_blank">GitHub</button> 
                <button className='youtube-button' onClick={(e) => {e.preventDefault(); window.location.href="https://www.youtube.com/watch?v=GpynHUCG-L8"}} target="_blank">Demo</button>
                </div>
            </div>
        </section>
   </div>

    )
}

export default Projects