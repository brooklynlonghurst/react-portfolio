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
            
            {/* <div class="icon-wrapper">
                <a class="github-foundations-capstone" href="https://github.com/brooklynlonghurst/foundation-capstone">
                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                </a>
                <a class="youtube-demo-foundations-captsone" href="https://youtu.be/GpynHUCG-L8">
                    <svg height="40" width="40" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z" style="fill-rule:nonzero;"/>
                    </svg>
                </a>
            </div> */}
        </section>
   </div>

    )
}

export default Projects