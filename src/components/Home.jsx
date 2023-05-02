import React from 'react'
import Intro from '../assets/images/illustration-intro.png'
import './Home.css'

const Home = () => {
    return (
        <section className="home">
            <div className="image-intro"><img src={Intro} alt="Illustration intro" /></div>
            <div className="home-info">
                <h1 className="page-title">All your files in one secure location, accessible anywhere.</h1>
                <p className="info">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
                <button className="get-started">Get Started</button>
            </div>
        </section>
    )
}

export default Home