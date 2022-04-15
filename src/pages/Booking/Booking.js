import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Booking = () => {
    return (
        <div className='row pt-5'>
            <div className='col-6 pt-5'>
                <div className=' w-50 mx-auto text-align lh-base'>
                    <h1 className='fs-1 fw-bold'>COX'S BAZAR</h1>
                    <p className='text pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti eveniet modi aut maiores laboriosam, perferendis eius asperiores rerum dolordeleniti culpa iste non aperiam, voluptatem sint tempore voluptates. Tempora, eaque! corrupti eveniet dolor sit amet dolor</p>
                </div>
            </div>
            <div className='col-6 '>

                <Form className=' w-50 mx-auto border p-3'>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control type="text" placeholder="Enter origin" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" placeholder="destination" />
                    </Form.Group>
                    <div className='row'>
                        <div className='col-6'>
                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label>From</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </div>
                        <div className='col-6'>
                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label>To</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </div>
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <div className='d-grid'>
                        <Button variant="primary" type="submit" className='w-full border-0 text-dark' style={{ backgroundColor: '#F9A51A' }} >
                            Start Booking
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default Booking;