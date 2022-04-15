import React from 'react';
import facebook from '../../images/icons/fb.png'
import google from '../../images/icons/google.png'

const SocialLogin = () => {
    return (
        <div className='w-25 px-4 mx-auto'>
            <div className='d-flex align-items-center'>
                <div className=' w-50' style={{ height: '1px', backgroundColor: '#AAAAAA' }}></div>
                <p className='px-2 mt-2'>Or</p>
                <div className=' w-50' style={{ height: '1px', backgroundColor: '#AAAAAA' }}></div>
            </div>
            <div>
                <button className='btn btn-light btn-outline-secondary d-block mx-auto rounded-pill my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-3 text-dark'>Continue with Facebook</span>
                </button>
                <button className='btn btn-light btn-outline-secondary d-block mx-auto rounded-pill'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-3 text-dark'>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;