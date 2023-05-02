import React from 'react'
import './Advantages.css'

import Access from '../assets/images/icon-access-anywhere.svg'
import AnyFile from '../assets/images/icon-any-file.svg'
import Collaboration from '../assets/images/icon-collaboration.svg'
import Security from '../assets/images/icon-security.svg'

const Advantages = () => {
    return (
        <>
            <section className="advantages mobile">
                <div className="advantage">
                    <img src={Access} alt="icon access anywhere" />
                    <p className="info">
                        <h2 className="adv-title">Access your files, anywhere</h2>
                        The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
                    </p>
                </div>

                <div className="advantage">
                    <img src={Security} alt="icon security" />
                    <p className="info">
                        <h2 className="adv-title">Security you can trust</h2>
                        2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
                    </p>
                </div>

                <div className="advantage">
                    <img src={Collaboration} alt="icon collaboration" />
                    <p className="info">
                        <h2 className="adv-title">Real-time collaboration</h2>
                        Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.
                    </p>
                </div>

                <div className="advantage">
                    <img src={AnyFile} alt="icon any type of file" />
                    <p className="info">
                        <h2 className="adv-title">Store any type of file</h2>
                        Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
                    </p>
                </div>
            </section>

            <section className="advantages desktop">
                <div className="col-1">
                    <div className="advantage">
                        <img src={Access} alt="icon access anywhere" />
                        <p className="info">
                            <h2 className="adv-title">Access your files, anywhere</h2>
                            The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
                        </p>
                    </div>

                    <div className="advantage">
                        <img src={Collaboration} alt="icon collaboration" />
                        <p className="info">
                            <h2 className="adv-title">Real-time collaboration</h2>
                            Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.
                        </p>
                    </div>
                </div>

                <div className="col-2">
                    <div className="advantage">
                        <img src={Security} alt="icon security" />
                        <p className="info">
                            <h2 className="adv-title">Security you can trust</h2>
                            2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
                        </p>
                    </div>

                    <div className="advantage">
                        <img src={AnyFile} alt="icon any type of file" />
                        <p className="info">
                            <h2 className="adv-title">Store any type of file</h2>
                            Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advantages