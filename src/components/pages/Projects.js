import React from 'react'
import '../../App.css';
// import Cards from '../Cards';
import HeaderSection from '../HeaderSection';


function Projects () {
    return (
        <>
            <HeaderSection 
                src='/images/FirPinecones.JPG'
                alt='Fir Pinecones'
                heading='Projects'
                subheading='Available on GitHub'
            />
            {/* <Cards /> */}
        </>
    );
};

export default Projects;