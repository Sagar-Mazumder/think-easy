import React from 'react';
import ExtendFeature from '../../images/features-01.webp'
import ExtendFeature2 from '../../images/features-02.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
const ExtendedFeature = () => {
    return (
        <>
            <div className='text-center mt-5'>
                <h5 className='text-primary'>EXTENDED FEATURES</h5>
                <h1 className='fw-bold'>Simple, Yet Powerful Features</h1>
                <p className='text-secondary'>There is More Than One Way To Eat A Extended features.</p>
            </div>
            <div className='d-lg-flex d-md-flex justify-content-center align-items-center w-75 mx-auto'>
                <div>
                    <div>
                        <h2 className='fw-bold'>Highly Secure</h2>
                        <p className=''>One Highly secure is better than two of something else.</p>
                    </div>

                    <div>
                        <div className='d-flex align-items-center  gap-2'>
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
                        <div className='d-flex  align-items-center gap-2'>
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
                <img className='w-50 ' src={ExtendFeature} alt="" />
            </div>


        </>
    );
};

export default ExtendedFeature;