import React from 'react';
import './About.css'
// imported fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faUserShield, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons'
import ceo from '../../images/ceo.webp'
const About = () => {
    return (
        <>
            <div className='mt-5'id='about'>
                <div className='text-center'>
                    <h5 className='text-primary'>WHO WE ARE?</h5>
                    <h1 className='fw-bold'>We are market leader</h1>
                    <p className='text-secondary'>Market leader like business, is better with multiple partners.</p>
                </div>
                <div className='d-lg-flex w-75 mx-auto justify-content-center aligns-items-center gap-5'>
                    <div className='text-center'>
                        <h1 className='text-primary'><FontAwesomeIcon icon={faArrowDown} /></h1>
                        <h2>Download app
                        </h2>
                        <p>When The Going Gets Tough, The Tough Get Download app.
                        </p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-primary'><FontAwesomeIcon icon={faUserShield} />
                        </h1>
                        <h2>Register yourself
                        </h2>
                        <p>If Only Everything in Life was as Reliable as a Register yourself.
                        </p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-primary'><FontAwesomeIcon icon={faFaceSmileBeam} /></h1>
                        <h2>Enjoy the app</h2>
                        <p>I Scream, You Scream, We All Scream for Enjoy the app.</p>
                    </div>
                </div>
                <div className='d-lg-flex p-5 w-75 mx-auto about-container rounded-5 gap-5 mt-5 justify-content-center align-items-center'>
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <img className='w-100 rounded-4' src={ceo} alt="" />
                    </div>
                    <div className='text-white'>
                        <h1>
                            “We accept that flawlessness is exaggerated and frequently disillusions when the commerce objectives are what checks.”
                        </h1>
                        <h6 className='mt-3 fw-bold'>Bellal Dhar</h6>
                        <p>Ceo & Founder</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;