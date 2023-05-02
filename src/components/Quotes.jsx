import React from 'react'
import './Quotes.css'

import Quote from '../assets/images/bg-quotes.png'
import Profile1 from '../assets/images/profile-1.jpg'
import Profile2 from '../assets/images/profile-2.jpg'
import Profile3 from '../assets/images/profile-3.jpg'

const Quotes = () => {
    return (
        <section className="quotes">
            <div className='img-quote'><img src={Quote} alt="quote" /></div>
            <div className="gen-quote">
                <div className="text-quote">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</div>
                <div className="author">
                    <div className="image-author"><img src={Profile1} alt="Satish Patel" /></div>
                    <div className="info-author">
                        <div className="name-author">Satish Patel</div>
                        <div className="role-author">Founder & CEO, Huddle</div>
                    </div>
                </div>
            </div>

            <div className="gen-quote">
                <div className="text-quote">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</div>
                <div className="author">
                    <div className="image-author"><img src={Profile2} alt="Bruce McKenzie" /></div>
                    <div className="info-author">
                        <div className="name-author">Bruce McKenzie</div>
                        <div className="role-author">Founder & CEO, Huddle</div>
                    </div>
                </div>
            </div>

            <div className="gen-quote">
                <div className="text-quote">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</div>
                <div className="author">
                    <div className="image-author"><img src={Profile3} alt="Iva Boyd" /></div>
                    <div className="info-author">
                        <div className="name-author">Iva Boyd</div>
                        <div className="role-author">Founder & CEO, Huddle</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quotes