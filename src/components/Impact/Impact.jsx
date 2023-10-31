import React from 'react';
import impact from '../../images/impact.webp'
const Impact = () => {
    return (
        <div className='mt-5'>
            <div className='text-center'>
                <h5 className='text-primary'>OUR IMPACT</h5>
                <h1 className='fw-bold'>People who already love us</h1>
                <p className='text-secondary'>It is the Bright One, it is the Right One, that is Love us.</p>
            </div>
            <div className='d-lg-flex p-5 w-75 mx-auto about-container rounded-5 gap-5 mt-5 justify-content-center align-items-center'>
                <div  data-aos="zoom-in" data-aos-duration="1000">
                    <img className='img-fluid rounded-4' src={impact} alt="" />
                </div>
                <div className='text-white'>
                    <h2>
                        “We're moving to this integration of biomedicine, information technology, wireless and mobile now - an era of digital medicine. Even my stethoscope is now digital. And of course, there's an app for that.”
                    </h2>
                    <h6 className='mt-3 fw-bold'>Sagar Mazumder</h6>
                    <p>CEO,Capital SEO</p>
                </div>
            </div>
        </div>
    );
};

export default Impact;