import React from 'react'
import mongodb from './../assets/mongodb-icon.svg'
import express from './../assets/expressjs-icon.svg'
import reactLogo from './../assets/reactjs-icon.svg'
const Projects = () => {
    return (
        <div id='projects' className='reveal'>
            <div className='cards-content'>
                <h2 className='title'>Projects</h2>
                <div className='card'>
                    <div className='singleCard'>

                        <h3>Social Media App</h3>
                        <div className='image'>
                            <img src="./../../SocialMedia.png" alt="" />
                        </div>
                        <p>Made With:</p>
                        <div className='tecs'>
                            <div className='icon'>
                                <img src={mongodb} alt="Mongodb" />
                                <span>Mongodb</span>
                            </div>
                            <div className='icon'>
                                <img src={express} alt="Express" />
                                <span>Express</span>
                            </div>
                            <div className='icon'>
                                <img src={reactLogo} alt="React" />
                                <span>React</span>
                            </div>
                        </div>
                        <button>More Info</button>
                    </div>
                </div>
                <div className='card'>
                    <div className='singleCard'>

                        <h3>Blog-Site</h3>
                        <div style={{ background: 'grey', height: 200 + 'px', margin: 2 + 'rem' }}>Coming soon...</div>
                        <div className='tecs'>
                            <div className='icon'>
                                <img src={mongodb} alt="Mongodb" />
                                <span>Mongodb</span>
                            </div>
                            <div className='icon'>
                                <img src={express} alt="Express" />
                                <span>Express</span>
                            </div>
                            <div className='icon'>
                                <img src={reactLogo} alt="React" />
                                <span>React</span>
                            </div>
                        </div>
                        <button>More Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects