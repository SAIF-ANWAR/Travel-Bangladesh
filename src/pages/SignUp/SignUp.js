import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../Login/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { getAuth, updateProfile } from 'firebase/auth';

const SignUp = () => {
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [agree, setAgree] = useState(false)
    console.log(agree)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        iputError
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const handleSignUp = async (event) => {
        event.preventDefault()
        const name = event.target.name?.value
        const email = event.target.email?.value
        const password = event.target.password?.value
        const confirmPassword = event.target.confirmPassword?.value

        if (password !== confirmPassword) {
            setError('Password did not match')
        }
        // else if (!agree) {
        //     setError('Please accept terms & conditions')
        // }
        else {
            await createUserWithEmailAndPassword(email, password)

            await updateProfile({ displayName: name });
            console.log('Updated profile');

        }

    }
    if (user) {
        navigate('/')
        console.log(user)
    }

    return (
        <div>
            <div className='w-50 mx-auto mt-5'>
                <Form className='w-50 mx-auto border p-4' onSubmit={handleSignUp}>
                    <h2 className='pb-3 fs-5 fw-bold'>Create a new account</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="name" placeholder="EnterYourName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="email" placeholder="EnterEmail" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name="confirmPassword" placeholder="ConfirmPassword" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Check onCanPlay={() => setAgree(!agree)} name="terms" type="checkbox" label="Accept terms & conditions" />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <p className='text-danger'>{iputError?.message}</p>

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