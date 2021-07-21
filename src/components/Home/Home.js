import React from 'react';
import Choose from './Choose/Choose';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Review from './Review/Review';
import Service from './Service/Service';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Choose/>
            <Service/>
            <Team/>
            <Review/>
            <Contact/>
        </div>
    );
};

export default Home;