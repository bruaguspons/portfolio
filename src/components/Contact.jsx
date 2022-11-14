import React from 'react'
import { useState } from 'react';

const Contact = () => {
    const initSend = {
        'email': false,
        'message': false
    }

    const [send, setSend] = useState(initSend)


    const [msg, setMsg] = useState({
        email: '',
        message: ''
    })
    const handleSubmit = async (e) => {
        console.log('funca')
        e.preventDefault();
        await fetch('https://formspree.io/f/xoqbygdg', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(msg)
        })
        e.target.reset()
        setSend(initSend)
    }

    const handleSend = (e) => {
        if (e.target.value === '') {
            setSend({ ...send, [e.target.name]: false })
        } else setSend({ ...send, [e.target.name]: true })

        setMsg({ ...msg, [e.target.name]: e.target.value })
        console.log(msg)
    }
    return (
        <div id='contact' className='reveal'>
            <h2 className='title'>Contact</h2>
            <div className='card contain-contact'>
                <form className='contain-contact' onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder='example@email.com' onChange={handleSend} autoComplete='off'></input>

                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" rows="10" onChange={handleSend}></textarea>
                    <button type="submit" disabled={!(send['email'] && send['message'])} className={send['email'] && send['message'] ? 'enabled' : 'disabled'}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact