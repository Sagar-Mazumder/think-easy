import React from 'react';
// imported image for blog 
import blog1 from '../../images/blogs/blog-01.webp'
import blog2 from '../../images/blogs/blog-02.webp'
import blog3 from '../../images/blogs/blog-03.webp'
const Blog = () => {
    return (
        <>
            <div className='mt-5' id='blog' style={ {scrollMarginTop:100}}>
                <div className='text-center'>
                    <h5 className='text-primary'>STAY UPTO DATE</h5>
                    <h1 className='fw-bold'>From the blog and articles</h1>
                    <p className='text-secondary'>The Best Part of Waking Up is Blog and articles in Your Cup.</p>
                </div>
                <div className='d-lg-flex justify-content-center align-items-center w-75 mx-auto gap-5'>
                    <div>
                        <img className='w-100' src={blog1} alt="" />
                        <p className='mt-3 text-secondary'>Creative, Marketing</p>
                        <h4>Top 6 Membership Sites for Beginners</h4>
                        <p className='mt-3 text-secondary'>May 6, 2023</p>
                    </div>
                    <div>
                        <img className='w-100' src={blog2} alt="" />
                        <p className='mt-3 text-secondary'>Tutorials Ui, Ux Design</p>
                        <h4>How to become a web designer in 2023</h4>
                        <p className='mt-3 text-secondary'>May 6, 2023</p>
                    </div>
                    <div>
                        <img className='w-100' src={blog3} alt="" />
                        <p className='mt-3 text-secondary'>Ux Design</p>
                        <h4>20 best affiliate programs for online creators in 2023</h4>
                        <p className='mt-3 text-secondary'>May 6, 2023</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;