import React, { useLayoutEffect } from 'react';
import Header from '../components/Header';
import './Projects.scss';

function Projects() {
    // Run this once when the page is loaded/mounted.
    useLayoutEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    return (
        <div className='projects'>
            <Header
                img_src='/assets/header-images/FirPinecones.JPG'
                img_alt='Unknown Photographer - Fir Pinecones'
                heading='Projects'
                subheading='Available on GitHub'
            />
            <div className='projects-container'>
                Projects - Under maintenance for transition to portfolio v2.0 - Nov. 23, 2023
            </div>
        </div>
    )
}

export default Projects