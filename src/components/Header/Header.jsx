import React from 'react';
import './Header.css'
// bootstrap header 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from '../../images/logo.png';
const Header = () => {
    return (
        // navbar section to navigate
        <>
            <Navbar collapseOnSelect expand="lg" className="nav-container sticky-top shadow-sm p-2 fs-5 ">
                <Container>
                    <Navbar.Brand href="/" className='text-white fw-bold fs-4 text-decoration-none' >
                        <img
                            src={image}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Think easy logo">
                        </img>{' '}ThinkEasy
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav >
                            <Nav.Link className='text-white text-decoration-none' href="#about">About</Nav.Link>
                            <Nav.Link className='text-white text-decoration-none' href="#feature">Feature</Nav.Link>
                            <Nav.Link className='text-white text-decoration-none' href="#pricing">Pricing</Nav.Link>
                            <Nav.Link className='text-white text-decoration-none' href="#testimonials">Testimonials</Nav.Link>
                            <Nav.Link className='text-white text-decoration-none' href="#blog">Blog</Nav.Link>
                            <Nav.Link className='text-white text-decoration-none' href="#contact">Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;