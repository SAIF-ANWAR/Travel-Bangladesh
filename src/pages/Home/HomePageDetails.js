import { Carousel } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../images/Rectangle 26.png';
import image2 from '../../images/Rectangle 27.png';
import image3 from '../../images/Rectangle 28.png';

const HomePageDetails = () => {
    return (
        <div className='row pt-5 container-fluid'>
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
            <div className='col-6 p-2'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>Travel </h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    );
};

export default HomePageDetails;