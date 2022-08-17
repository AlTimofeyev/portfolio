import React from 'react'
import '../../App.css';
import HeaderSection from '../HeaderSection';
import HeroSection from '../HeroSection';
import Footer from '../Footer';


function Home () {
    return (
        <>
            <HeaderSection 
                src='/images/ArnoSmit-CherryBlossoms.jpeg'
                alt='Cherry Blossoms'
                heading='Portfolio'
                subheading='About Me'
            />
            <HeroSection/>
            <Footer/>
        </>
    );
};

export default Home;