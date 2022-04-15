import React from 'react';
import image from '../../images/Rectangle 1.png';
import HomePageDetails from './HomePageDetails';
import './Home.css'

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} >
            {/* <img className='w-100' src={image} alt="" /> */}
            {/* <div><h1 className='fs-1'>hello</h1></div> */}
            <HomePageDetails></HomePageDetails>

        </div>
    );
};

export default Home;