import React from 'react';
import { Button, Form } from 'react-bootstrap';

import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <div>
            <div className='w-50 mx-auto mt-5'>
                <Form className='w-50 mx-auto border p-4'>
                    <h2 className='pb-3'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div className='d-flex justify-content-between'>
                            <Form.Check type="checkbox" label="Remember me" />
                            <p><small style={{ color: '#F9A51A' }} >Forgot Password</small></p>
                        </div>
                    </Form.Group>
                    <div className="border-0 d-grid">
                        <Button className="border-0" variant="primary" type="submit" style={{ backgroundColor: '#F9A51A' }} >
                            Login
                        </Button>
                    </div>
                    <div className='d-flex jsutify-content-around py-2'>
                        <p><small>Don't have an account?</small></p>
                        <a href="/signup" style={{ color: '#F9A51A' }}> create an account</a>
                    </div>
                </Form>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;