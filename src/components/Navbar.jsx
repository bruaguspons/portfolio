import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineFolderOpen, AiOutlineFire, AiOutlineMail } from 'react-icons/ai'

const Navbar = () => {
    const [btnClass, setBtnClass] = useState(false)
    const [navClass, setNavClass] = useState(false)
    const [btnSelect, setBtnSelect] = useState({
        Home: false,
        About: false,
        Skills: false,
        Projects: false,
        Contact: false
    })
    const handleBtnClick = (btn) => {
        setBtnClass(false)
        Object.keys(btnSelect).forEach(key => {
            setBtnSelect({ [key]: false });
        });
        const elem = btn.target.textContent
        setBtnSelect({ [elem]: true })
    }
    return (
        <div className="navigation">
            <a id='logo' onClick={() => setBtnClass(false)} href="#home">Portfolio</a>
            <nav className={navClass ? 'openWindow' : 'closeWindow'}>
                <ul className={btnClass ? 'visible' : 'hidden'}>
                    <li><a onClick={handleBtnClick} className={btnSelect.Home ? 'selected' : ''} href="#home">Home</a></li>
                    <li><a onClick={handleBtnClick} className={btnSelect.About ? 'selected' : ''} href="#about">About</a></li>
                    <li><a onClick={handleBtnClick} className={btnSelect.Skills ? 'selected' : ''} href="#skills">Skills</a></li>
                    <li><a onClick={handleBtnClick} className={btnSelect.Projects ? 'selected' : ''} href="#projects">Projects</a></li>
                    <li><a onClick={handleBtnClick} className={btnSelect.Contact ? 'selected' : ''} href="#contact">Contact</a></li>
                </ul>
                <button onClick={() => setBtnClass(!btnClass)} className={btnClass ? 'closeWindow' : 'openWindow'} id='btn-window'>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </nav>
        </div>
    )
}

export default Navbar