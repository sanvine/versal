import React from 'react'
import TopCourses from '../Subpages/TopCourses'
import Choose from '../Subpages/Choose'
import Chat from '../Subpages/Chat'
import Technologies from '../Subpages/Technologies'

const Home = () => {
return (
    <div>
        <div class='container home'>
            <div class='row'>
                <div class='col-12 col-sm-12 col-md-12 col-lg-12 '>
                    <h2 class='home_heading'>Code Tech Learn</h2>
                    <p class='home_para'>upgrade skills with advanced Technology and expand your carrer opportunities</p>
                    <p class='home_para2'>Explore from our wide range of specialised Courses</p>
                    <div class="d-flex justify-content-center">
                        <button class='home_btn'>Explore</button>
                    </div>
                </div>
            </div>
        </div>
        
        <TopCourses />

        <Technologies />

        <Choose />

        <Chat />
    </div>
)
}

export default Home