import React from 'react';
import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../images/slider/banner-mobile.webp';
import Banner2 from '../../images/slider/banner-mobile2.png';
import AppStore from '../../images/slider/app-store.webp'
import PlayStore from '../../images/slider/google-play.webp'
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Slider = () => {
    return (
        <div className='container-background py-5 pb-lg-0'>
            <Container >
                <Carousel data-bs-theme="primary">
                    <Carousel.Item interval={8000}>
                        <div className="d-lg-flex justify-content-around 
                        align-items-center">
                            <div className="carousel-text text-white">
                                <h1>
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString('Simple yet<br />Elegant Design.<br />Better Looks.')
                                                .callFunction(() => {
                                                    console.log('String typed out!');
                                                })
                                                .callFunction(() => {
                                                    console.log('All strings were deleted');
                                                })
                                                .start();
                                        }}
                                    />
                                </h1>
                                <p>Trending, Clean and Elegant Design based on <br />deeply research with powerful features.
                                </p>

                                <div className='d-flex anchor-container gap-4'>
                                    <a href=""><img src={AppStore} alt="app store icon" /></a>
                                    <a href=""><img src={PlayStore} alt="app store icon" /></a>
                                </div>
                            </div>
                            <div className="carousel-image">
                                <img
                                    className="d-block img-fluid"
                                    src={Banner1}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-lg-flex justify-content-around align-items-center">
                            <div className="carousel-text text-white">
                                <h1>
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString('Simple yet<br />Elegant Design.<br />Better Looks.')
                                                .callFunction(() => {
                                                    console.log('String typed out!');
                                                })
                                                .callFunction(() => {
                                                    console.log('All strings were deleted');
                                                })
                                                .start();
                                        }}
                                    />
                                </h1>
                                <p>Trending, Clean and Elegant Design based on <br />deeply research with powerful features.
                                </p>
                                <div className='d-flex anchor-container gap-4'>
                                    <a href=""><img src={AppStore} alt="app store icon" /></a>
                                    <a href=""><img src={PlayStore} alt="app store icon" /></a>
                                </div>
                            </div>
                            <div className="carousel-image">
                                <img
                                    className="d-block img-fluid"
                                    src={Banner2}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default Slider;