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
        <div id='skills' >
            <h2 className='title'>My skills</h2>
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
                                <img src={html5} alt="" />
                                <span>Html5</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src={python} alt="" />
                                <span>Python</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src={postgresql} alt="" />
                                <span>Postgresql</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <img src={css} alt="" />
                                <span>Css</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src={nodejs} alt="" />
                                <span>Nodejs</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src={mongodb} alt="" />
                                <span>Mongodb</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <img src={js} alt="" />
                                <span>JavaScript</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src={express} alt="" />
                                <span>Express</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <img src={reactLogo} alt="" />
                                <span>React</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src={django} alt="" />
                                <span>Django</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <img src={redux} alt="" />
                                <span>Redux</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Skills