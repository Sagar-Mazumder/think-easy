import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume, faMap } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const Contact = () => {
    return (
        <div className='mt-5'>
            <div className='d-flex justify-content-between align-items-center w-75 mx-auto gap-5'>
                <div>
                    <div className=''>
                        <h5 className='text-primary'>CONTACT US</h5>
                        <h1 className='fw-bold'>Get in Touch</h1>
                        <p className='text-secondary'>When you say Get in touch you have said it all.</p>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <h2 className='text-primary'><FontAwesomeIcon icon={faEnvelope} /></h2>
                        <div>
                            <h4>Email Us</h4>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <h2 className='text-primary'><FontAwesomeIcon icon={faPhoneVolume} /></h2>
                        <div>
                            <h4>Call Us</h4>
                            <p>1245875687</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <h2 className='text-primary'><FontAwesomeIcon icon={faMap} /></h2>
                        <div>
                            <h4>Visit Us</h4>
                            <p>2561, Victoria Market, Melbourne VIC, 3000</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mt-4'>
                        <h4>Leave us a message</h4>
                        <p>And we will get back to you as soon as possible.</p>
                    </div>
                    <div>
                        <Form>
                            <Row className="mb-3 mx-0">
                                <Form.Group as={Col} controlId="formGridEmail">

                                    <Form.Control placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">

                                    <Form.Control type="email" placeholder="Email Address" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 mx-0">
                                <Form.Group as={Col} controlId="formGridEmail">

                                    <Form.Label>This field is required</Form.Label>
                                    <Form.Control placeholder="Phone Number" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>This field is required</Form.Label>
                                    <Form.Control placeholder="Subject" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 mx-0">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                    <Form.Control as="textarea" rows={3} placeholder="Write Message" />
                                </Form.Group>
                            </Row>
                            <Button className='ms-3 px-5 py-3 rounded-5' variant="primary" type="submit">
                                Submit Comment
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;