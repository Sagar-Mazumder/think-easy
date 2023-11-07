import React from 'react';
import img1 from '../../images/intregrations/behance.png'
import img2 from '../../images/intregrations/github (2).png'
import img3 from '../../images/intregrations/instagram.png'
import img4 from '../../images/intregrations/skype.png'
import img5 from '../../images/intregrations/spotify-logo.png'
import img6 from '../../images/intregrations/xbox-logo.png'
const Integrations = () => {
    return (
        <>
            <div>
                <div className='d-lg-flex d-md-flex justify-content-center align-items-center w-75 mx-auto gap-4 mt-5'>
                    <div>
                        <h5 className='text-primary'>INTEGRATIONS
                        </h5>
                        <h1 className='fw-bold'>Trusted by many companies</h1>
                        <p className='text-secondary'>Would You Give Someone Your Last Trusted by? Get the Door - It is Trusted by.
                        </p>
                    </div>
                    <div className='w-25'>
                        <img className='w-25 d-block mb-4 mx-auto' src={img1} alt="" />
                        <img className='w-25 mx-auto' src={img2} alt="" />
                    </div>
                    <div className='w-25'>
                        <img className='w-25 d-block mb-4 mx-auto' src={img3} alt="" />
                        <img className='w-25 mx-auto' src={img4} alt="" />
                    </div>
                    <div className='w-25'>
                        <img className='w-25 d-block mb-4 mx-auto' src={img5} alt="" />
                        <img className='w-25 mx-auto' src={img6} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Integrations;