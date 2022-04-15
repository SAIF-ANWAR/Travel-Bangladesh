import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePageDetails = () => {
    return (
        <div className='row pt-5'>
            <div className='col-6 pt-5'>
                <div className=' w-75 mx-auto text-align lh-base'>
                    <h1 className='fs-2 fw-bold'>TRAVEL BANGLADESH</h1>
                    <p className='text pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti eveniet modi aut maiores laboriosam, perferendis eius asperiores rerum dolordeleniti culpa iste non aperiam, voluptatem sint tempore voluptates. Tempora, eaque! corrupti eveniet dolor sit amet dolor....</p>
                </div>
                <div className="border-0 w-75 mx-auto mt-4">
                    <Link to="/booking" variant="primary" type="submit" className='w-25  border-0 text-dark fs-6 py-2 px-4 text-decoration-none rounded' style={{ backgroundColor: '#F9A51A' }} >
                        Booking
                    </Link>
                </div>
            </div>
            <div className='col-6 '>


            </div>
        </div>
    );
};

export default HomePageDetails;