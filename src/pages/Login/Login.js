import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import SocialLogin from './SocialLogin';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogIn = (event) => {
        event.preventDefault()
        const email = event.target.email?.value
        const password = event.target.password?.value
        signInWithEmailAndPassword(email, password)


    }
    if (user) {
        navigate(from, { replace: true })
        // console.log(user)
    }

    return (
        <div>
            <div className='w-50 mx-auto mt-5'>
                <Form onSubmit={handleLogIn} className='w-50 mx-auto border p-4'>
                    <h2 className='pb-3'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
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
                        <p className='text-danger'>{error?.message}</p>
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