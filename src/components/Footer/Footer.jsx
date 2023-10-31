import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../images/footer/facebook.png'
import instragram from '../../images/footer/instagram.png'
import linkdin from '../../images/footer/linkedin.png'
import whatsapp from '../../images/footer/whatsapp.png'
import { Link } from 'react-router-dom';
import featurePost1 from '../../images/feature-post.jpg'
import featurePost2 from '../../images/feature-post2.jpg'

const Footer = () => {
    return (
        <>
            <div className='row bg-container mx-0 mt-5 justify-content-center py-5'>
                <div className="col-lg-2">

                    <h4 className='text-primary fw-bold mb-3'>ThinkEasy</h4>
                    <p>Professional looking, clean and modern design. Landing page for your business.</p>
                    <div className='thinkeasy-container'>
                        <a href="https://web.facebook.com"> <img className='' src={facebook} alt="" /></a>
                        <a href="https://www.linkedin.com"><img className='' src={linkdin} alt="" /></a>
                        <a href="https://web.whatsapp.com"><img className='' src={whatsapp} alt="" /></a>
                        <a href="https://www.instagram.com"><img className='' src={instragram} alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-2 ms-lg-5">
                    <h4 className='text-black mb-3'>Quick Links</h4>
                    <Link className='d-block mb-2 link-design text-secondary' to='/'>Home</Link>
                    <Link className='d-block mb-2 link-design text-secondary' to='/'>About</Link>
                    <Link className='d-block mb-2 link-design text-secondary' to='/'>Blogs</Link>
                    <Link className='d-block mb-2 link-design text-secondary' to='/'>Pricing</Link>
                    <Link className='d-block mb-2 link-design text-secondary' to='/'>Testimonials</Link>
                    <Link className='link-design text-secondary' to='/'>Feature</Link>
                </div>
                <div className="col-lg-2">
                    <h4 className='text-black mb-3'>Useful Links</h4>
                    <Link className='d-block mb-2 link-design text-secondary' to='/'>Documentation</Link>
                    <Link className='d-block mb-2 link-design text-secondary' to='/'>Developer Only</Link>
                    <Link className='d-block mb-2 link-design text-secondary' to='/'>Terms & Conditions</Link>
                    <Link className='d-block mb-2 link-design text-secondary' to='/'>Privacy Policy</Link>
                    <Link className='d-block mb-2 link-design text-secondary' to='/'>Quick Integrations</Link>
                    <Link className='d-block mb-2 link-design text-secondary' to='/'>Code Quality</Link>

                </div>
                <div className="col-lg-2">
                    <h4 className='text-black mb-3'>Featured Posts</h4>
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <div>
                            <img className='w-100 rounded-3' src={featurePost1} alt="" />
                        </div>
                        <div>
                            <p className='text-secondary mb-0'><FontAwesomeIcon icon={faClock} style={{ color: "" }} /> 8,Dec,2000</p>
                            <a className='text-secondary mt-0' href="">SQL Certifications for Your Data Career</a>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-2 mt-3'>
                        <div>
                            <img className='w-100 rounded-3' src={featurePost2} alt="" />
                        </div>
                        <div>
                            <p className='text-secondary mb-0'> <FontAwesomeIcon icon={faClock} style={{ color: "" }} /> 8,Dec,2000</p>
                            <a className='text-secondary  mt-0' href="">Entry Level Networking Certification</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-75 mx-auto' />
        </>
    );
};

export default Footer;