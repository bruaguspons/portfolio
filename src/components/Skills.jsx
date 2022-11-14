import React from 'react'
import html5 from './../assets/html5-icon.svg'
import css from './../assets/css-icon.svg'
import js from './../assets/js-icon.svg'
import reactLogo from './../assets/reactjs-icon.svg'
import redux from './../assets/redux-icon.svg'
import python from './../assets/python-icon.svg'
import nodejs from './../assets/nodejs-icon.svg'
import express from './../assets/expressjs-icon.svg'
import django from './../assets/django-icon.svg'
import postgresql from './../assets/postgresql-icon.svg'
import mongodb from './../assets/mongodb-icon.svg'


const Skills = () => {
    return (
        <div className="container-skills reveal">
            <div id='skills' >
                <h2 className='title'>My Skills</h2>
                <table className='card'>
                    <thead>
                        <tr>
                            <th>Front-End</th>
                            <th>Back-End</th>
                            <th>Data Base</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <img src={html5} alt="Html5" />
                                    <span>Html5</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <img src={python} alt="Python" />
                                    <span>Python</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <img src={postgresql} alt="Postgresql" />
                                    <span>Postgresql</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <img src={css} alt="Css" />
                                    <span>Css</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <img src={nodejs} alt="Nodejs" />
                                    <span>Nodejs</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <img src={mongodb} alt="Mongodb" />
                                    <span>Mongodb</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <img src={js} alt="JavaScript" />
                                    <span>JavaScript</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <img src={express} alt="Express" />
                                    <span>Express</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <img src={reactLogo} alt="React" />
                                    <span>React</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <img src={django} alt="Django" />
                                    <span>Django</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <img src={redux} alt="Redux" />
                                    <span>Redux</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Skills