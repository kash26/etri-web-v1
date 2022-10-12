import React from 'react';
import AboutCard from '../about/AboutCard';
import HAbout from './hero/HAbout';
import Hero from './hero/Hero';
import Hprice from './Hprice';
import Hblog from './testimonial/Hblog';
import Test from './testimonial/Test';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutCard />
            <HAbout />
            <Test />
            <Hblog />
            <Hprice />
        </>
    );
};

export default Home;