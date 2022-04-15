import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../Login/SocialLogin';

const SignUp = () => {
    return (
        <div>
            <div className='w-50 mx-auto mt-5'>
                <Form className='w-50 mx-auto border p-4'>
                    <h2 className='pb-3 fs-5 fw-bold'>Create a new account</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Your Name</Form.Label> */}
                        <Form.Control type="text" placeholder="EnterYourName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="EnterEmail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Confirm Password</Form.Label> */}
                        <Form.Control type="password" placeholder="ConfirmPassword" />
                    </Form.Group>

                    <div className="border-0 d-grid py-2">
                        <Button className="border-0" variant="primary" type="submit" style={{ backgroundColor: '#F9A51A' }} >
                            Create an account
                        </Button>
                    </div>
                    <div className='d-flex  justify-content-center py-0'>
                        <p><small>Already have an account?</small></p>
                        <a href="/signup" style={{ color: '#F9A51A' }} className="px-2"> <small>Login</small></a>
                    </div>
                </Form>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;