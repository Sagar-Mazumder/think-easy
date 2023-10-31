import React from 'react';
import { Button } from 'react-bootstrap';

const Pricing = () => {
    return (
        <>
            <div className='text-center mt-5'>
                <h5 className='text-primary'>CHOOSE AS YOUR NEED</h5>
                <h1 className='fw-bold'>Really Simple Pricing</h1>
                <p className='text-secondary'>No hidden fees, no limits</p>
            </div>
            <div className='d-flex justify-content-center align-items-center w-75 mx-auto gap-4'>

                <div className='border rounded-5 p-5'>
                    <h2 className='mb-4'>Basic</h2>
                    <p>Small Business who are just <br /> starting on their marketing.</p>
                    <h1 className='fw-bold d-inline '>$30.00</h1> <span>/month</span>
                    <Button className="btn-primary d-block mt-5 px-5 py-3 rounded-5">Try free for 30 days</Button>
                    <p className='text-center'>No credit card required</p>
                </div>
                <div className='border rounded-5 p-5 bg-primary text-white'>
                    <h2 className='mb-4'>Professional</h2>
                    <p>Small Business who are just <br /> starting on their marketing.</p>
                    <h1 className='fw-bold d-inline '>$80.00</h1> <span>/month</span>
                    <Button className="btn-light text-primary d-block mt-5 px-5 py-3 rounded-5">Try free for 30 days</Button>
                    <p className='text-center'>No credit card required</p>
                </div>
                <div className='border rounded-5 p-5'>
                    <h2 className='mb-4'>Enterprise</h2>
                    <p>Small Business who are just <br /> starting on their marketing.</p>
                    <h1 className='fw-bold d-inline '>$120.00</h1> <span>/month</span>
                    <Button className="btn-primary d-block mt-5 px-5 py-3 rounded-5">Try free for 30 days</Button>
                    <p className='text-center'>No credit card required</p>
                </div>
            </div>
        </>
    );
};

export default Pricing;