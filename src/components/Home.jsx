import React, { useState } from 'react'
import { AiOutlineMail, AiFillGithub, AiOutlineFilePdf } from 'react-icons/ai'
const Home = () => {
    const [word, setWord] = useState(true)
    const handleAnimation = (e) => {
        console.log(e)
        setWord(!word)
    }

    return (
        <div className="container-home" id='home'>
            <div className='container-name'>
                <h1 className='border name'>Bruno</h1>
                <h1 className='wave name'>Bruno</h1>
                <h1 className='border surname'>Pons</h1>
                <h1 className='wave surname'>Pons</h1>
            </div>


            <h2>
                <span>{'<'}</span>
                Web Developer
                <span>{'/>'}</span>
            </h2>
            <div className='write-effect'>
                <div className='dynamic-text-git'><span>github.com/bruaguspons/</span></div>
                <div className='dynamic-text-gmail'><span>bruaguspons@gmail.com/</span></div>
            </div>
            <footer>
                <a href="https://github.com/bruaguspons" target='_blank' title='GitHub'>
                    <AiFillGithub />
                    <span>Github</span>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@gmail.com" target="_blank" title='Mail'>
                    <AiOutlineMail />
                    <span>Mail</span>
                </a>
                <a href="./../../public/CV.pdf" target='_blank' title='CV'>
                    <AiOutlineFilePdf />
                    <span>CV</span>
                </a>
            </footer>
        </div>
    )
}

export default Home