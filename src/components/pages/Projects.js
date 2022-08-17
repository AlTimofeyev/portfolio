import React from 'react'
import '../../App.css';
import HeaderSection from '../HeaderSection';
import Cards from '../Cards';
import Footer from '../Footer';


function Projects () {
    return (
        <>
            <HeaderSection 
                src='/images/FirPinecones.JPG'
                alt='Fir Pinecones'
                heading='Projects'
                subheading='Available on GitHub'
            />
            <Cards/>
            <Footer/>
        </>
    );
};

export default Projects;