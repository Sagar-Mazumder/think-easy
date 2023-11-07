import React from 'react';
import './Feature.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faBell, faCopy, faCommentDots, faShareFromSquare, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import featureImage from '../../images/feature-mobile.webp'
const Feature = () => {
    return (
        <>
            <div className='text-center mt-5' id='feature' style={ {scrollMarginTop:100}}>
                <h5 className='text-primary'>AWESOME FEATURES
                </h5>
                <h1 className='fw-bold'>Check out some of our <br />amazingly crafted features
                </h1>
                <p className='text-secondary'>Amazing features - If you love Amazing features.</p>
            </div>

            <div className='d-lg-flex w-75 mx-auto justify-content-center align-items-center gap-5'>
                <div>
                    <div className='d-flex justify-content-center align-items-center  gap-2'>
                        <h1 className='text-primary'><FontAwesomeIcon icon={faPaw} /></h1>
                        <div>
                            <h4>
                                Business Data
                            </h4>
                            <p>
                                Feel The Raw Naked business data Of The Road.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <h1 className='text-primary'><FontAwesomeIcon icon={faBell} /></h1>
                        <div>
                            <h4>Smart Notification</h4>
                            <p>
                                Whenever There's a Snack Gap, smart notification Fits.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <h1 className='text-primary'><FontAwesomeIcon icon={faCopy} /></h1>
                        <div>
                            <h4>
                                Highly Customizable</h4>
                            <p>
                                The highly customizable Sign Means Happy Motoring.
                            </p>
                        </div>
                    </div>
                </div>

                <img className='img-container ' src={featureImage} alt="" />

                <div>
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <h1 className='text-primary'><FontAwesomeIcon icon={faCommentDots} /></h1>
                        <div>
                            <h4>
                                Live Chat
                            </h4>
                            <p>
                                Live chat will be for you what you want it to be ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <h1 className='text-primary'><FontAwesomeIcon icon={faShareFromSquare} /></h1>
                        <div>
                            <h4>Social Share</h4>
                            <p>
                                A Finger of Social share is Just Enough to Give Your Kids a Treat.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <h1 className='text-primary'><FontAwesomeIcon icon={faLayerGroup} /></h1>
                        <div>
                            <h4>
                                Amazing Resources
                            </h4>
                            <p>
                                Amazing resources quality you can see Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Feature;