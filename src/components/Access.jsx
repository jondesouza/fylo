import React from 'react'
import './Access.css'

const Access = () => {
    return (
        <section className="access">
            <div className="access-box thin-screen">
                <h2 className="access-title">Get early access today</h2>
                <p className="info">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <input type="text" name="Fylo early access" className='email' fill="email@example.com" />
                <button className="get-started">Get Started For Free</button>
            </div>

            <div className="access-box large-screen">
                <h2 className="access-title">Get early access today</h2>
                <p className="info">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <div className="input"><input type="text" name="email" className='email' />
                    <button className="get-started">Get Started For Free</button>
                </div>
            </div>
        </section>
    )
}

export default Access