import React from 'react'
import './Functioning.css'

import Image from '../assets/images/illustration-stay-productive.png'
import Arrow from '../assets/images/icon-arrow.svg'

const Functioning = () => {
    return (
        <section className="functioning">
            <div className="productive"><img src={Image} alt="stay productive" /></div>
            <div className="func-box">
                <h2 className="func-title">Stay productive, wherever you are</h2>
                <p className="info">Never let location be an issue when accessing your files. Fylo has you covered for all of your life storage needs.<br /><br /> Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.</p>
                <div className="working">See how Fylo works <img src={Arrow} alt="arrow" /></div>
            </div>
        </section>
    )
}

export default Functioning