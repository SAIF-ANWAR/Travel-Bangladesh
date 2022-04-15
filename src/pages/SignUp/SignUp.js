import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../Login/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        iputError
    ] = useCreateUserWithEmailAndPassword(auth);

    console.log(user)
    const handleSignUp = (event) => {
        event.preventDefault()
        const name = event.target.name?.value
        const email = event.target.email?.value
        const password = event.target.password?.value
        const confirmPassword = event.target.confirmPassword?.value

        if (password !== confirmPassword) {
            setError('Password did not match')
        }
        else {
            createUserWithEmailAndPassword(email, password)

        }

    }
    if (user) {
        navigate('/')
    }

    return (
        <div>
            <div className='w-50 mx-auto mt-5'>
                <Form className='w-50 mx-auto border p-4' onSubmit={handleSignUp}>
                    <h2 className='pb-3 fs-5 fw-bold'>Create a new account</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Your Name</Form.Label> */}
                        <Form.Control type="text" name="name" placeholder="EnterYourName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" name="email" placeholder="EnterEmail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Confirm Password</Form.Label> */}
                        <Form.Control type="password" name="confirmPassword" placeholder="ConfirmPassword" />
                    </Form.Group>
                    <p style={{ color: 'red' }}>{error}</p>
                    <p style={{ color: 'red' }}>{iputError?.message}</p>

                    <div className="border-0 d-grid py-2">
                        <Button className="border-0" variant="primary" type="submit" style={{ backgroundColor: '#F9A51A' }} >
                            Create an account
                        </Button>
                    </div>
                    <div className='d-flex  justify-content-center py-0'>
                        <p><small>Already have an account?</small></p>
                        <a href="/login" style={{ color: '#F9A51A' }} className="px-2"> <small>Login</small></a>
                    </div>
                </Form>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;