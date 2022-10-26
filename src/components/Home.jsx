import React, { useState } from 'react'
import { AiOutlineMail, AiFillGithub, AiOutlineFilePdf } from 'react-icons/ai'
const Home = () => {
    const [word, setWord] = useState(true)
    const handleAnimation = (e) => {
        console.log(e)
        setWord(!word)
    }

    return (
        <div className="container-home">
            <div className='container-name'>
                <h1 className='border'>Bruno Pons</h1>
                <h1 className='wave'>Bruno Pons</h1>
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
                <a href="https://github.com/bruaguspons" title='GitHub'>
                    <AiFillGithub />
                    <span>Github</span>
                </a>
                <a href="#" title='Mail'>
                    <AiOutlineMail />
                    <span>Mail</span>
                </a>
                <a href="#" title='CV'>
                    <AiOutlineFilePdf />
                    <span>CV</span>
                </a>
            </footer>
        </div>
    )
}

export default Home