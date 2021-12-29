import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import MIddlePart from '../MiddlePart/MIddlePart';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <MIddlePart></MIddlePart>
            <Gallery></Gallery>
        </div>
    );
};

export default Homepage;