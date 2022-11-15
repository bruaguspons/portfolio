import React from 'react'
import Potho from './../assets/IMG_20221028_171856-Copy.jpg'
const About = () => {
    return (
        <div className="container-about reveal">

            <div id='about' >
                <h2 className='title'>About Me</h2>
                <section className='card'>

                    <p>
                        <img src={Potho} alt="Bruno" />
                        👋Hi! i'm Bruno.
                        <br></br>
                        <br></br>
                        I'm an enthusiastic computer science studient from Uruguay, I like to use Django and React for building web applications.
                        <br></br>
                        I like to learn on my own and solve challenging problems. In my free time, I solve problems on HackerRank, read tech articles and I enjoy playing chess.
                        <br></br>
                        I'm a team worker, hard worker, responsible and i'm looking for my first job.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default About