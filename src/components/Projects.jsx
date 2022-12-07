import React from 'react'
import mongodb from './../assets/mongodb-icon.svg'
import express from './../assets/expressjs-icon.svg'
import reactLogo from './../assets/reactjs-icon.svg'
import django from './../assets/django-icon.svg'
import html5 from './../assets/html5-icon.svg'
import css from './../assets/css-icon.svg'
import js from './../assets/js-icon.svg'


import SpaceInvader from './../assets/SpaceInvader.png'
import TwitterClone from './../assets/TwitterClone.png'
import SocialMedia from './../assets/SocialMedia.png'
import Blog from './../assets/Blog.png'
const Projects = () => {
    return (
        <div id='projects' className='reveal'>
            <div className='card-title-content'>

                <h2 className='title'>Projects</h2>
                <div className='cards-content'>
                    <div className='card'>
                        <div className='singleCard'>

                            <h3>Space Invader</h3>
                            <div className='image'>
                                <a href="https://github.com/bruaguspons/SpaceInvaders" target='_blank'>
                                    <img src={SpaceInvader} alt="SpaceInvader" />
                                </a>
                            </div>
                            <p>Made With:</p>
                            <div className='tecs'>
                                <div className='icon'>
                                    <img src={html5} alt="HTML5" />
                                    <span>HTML5</span>
                                </div>
                                <div className='icon'>
                                    <img src={css} alt="Css" />
                                    <span>Css</span>
                                </div>
                                <div className='icon'>
                                    <img src={js} alt="JavaScript" />
                                    <span>JavaScript</span>
                                </div>
                            </div>
                            <a href='https://github.com/bruaguspons/SpaceInvaders' target="_blank">More Info</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='singleCard'>

                            <h3>Twitter Clone</h3>
                            <div className='image'>
                                <a href="https://github.com/bruaguspons/TwitterClone" target='_blank'>
                                    <img src={TwitterClone} alt="TwitterClone" />
                                </a>
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
                            <a href='https://github.com/bruaguspons/TwitterClone' target="_blank">More Info</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='singleCard'>

                            <h3>Social Media App</h3>
                            <div className='image'>
                                <a href="https://github.com/bruaguspons/Social-Media-React-Express" target='_blank'>
                                    <img src={SocialMedia} alt="Social Media" />
                                </a>
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
                            <a href='https://github.com/bruaguspons/Social-Media-React-Express' target="_blank">More Info</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='singleCard'>

                            <h3>Blog-Site</h3>
                            <div className='image'>
                                <a href="https://github.com/bruaguspons/Blog-Django-React" target='_blank'>
                                    <img src={Blog} alt="Blog" />
                                </a>
                            </div>
                            <p>Made With:</p>
                            <div className='tecs'>
                                <div className='icon'>
                                    <img src={django} alt="Django" />
                                    <span>Django</span>
                                </div>
                                <div className='icon'>
                                    <img src={reactLogo} alt="React" />
                                    <span>React</span>
                                </div>
                            </div>
                            <a href='https://github.com/bruaguspons/Blog-Django-React' target="_blank">More Info</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects