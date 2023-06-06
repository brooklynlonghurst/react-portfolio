import React from 'react'
import { RoughNotation } from "react-rough-notation";


function Projects() {
    return (
        <div class="projects-container" id="projects-section">
        <h2>Projects</h2>
        <div className='cards-container'>
        <section class="project-card">
            <div class="text-content">
                <h3><RoughNotation type='highlight' show={true} color="#90BAAD95" iterations={1}>The Botanical Blog</RoughNotation></h3>
                <p>Created a platform for plant enthusiasts to share their passion by developing a blog using vanilla JavaScript, CSS, Express, and Axios. </p>
                <div className='project-buttons-plants'>
                <button className='github-button' onClick={() => window.open("https://github.com/brooklynlonghurst/foundation-capstone", "_blank")}>GitHub</button> 
                <button className='youtube-button' onClick={() => window.open("https://www.youtube.com/watch?v=GpynHUCG-L8", "_blank")}>Demo</button>
                </div>
            </div>
        </section>
        <section class="project-card">
            <div className='text-content'>
                <h3><RoughNotation type='highlight' show={true} color='#90BAAD95' iterations={1}>Constellation Kids</RoughNotation></h3>
                <p>Built a React app for kids, utilizing Node.js, Express, and a Postgres Database created with Sequelize, to facilitate learning about constellations through games.</p>
                <div className='project-buttons'>
                    <button className='github-button' onClick={() => window.open("https://github.com/brooklynlonghurst/specialization-capstone", "_blank")}>GitHub</button>
                    <button className='youtube-button' onClick={() => window.open("https://constellation-kids.herokuapp.com/", "_blank")}>Website</button>
                </div>
            </div>
        </section>
        </div>
   </div>

    )
}

export default Projects