import React, { useContext, useLayoutEffect } from 'react';
import { NavbarPageSelectionContext } from '../contexts/NavbarContext';
import Header from '../components/Header';
import './Projects.scss';

function Projects() {
    const { pageSelected, setPageSelectionState } = useContext(NavbarPageSelectionContext);

    // Run this once when the page is loaded/mounted.
    useLayoutEffect(() => {
        setPageSelectionState(2);   // Set this page as active in navbar.

        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    return (
        <div className='projects'>
            <Header
                img_src='/assets/header-images/OsmanRana-FirPinecones.JPG'
                img_alt='Osman Rana - Fir Pinecones - INSTAGRAM: @ranagraphsfamily - SOURCE: https://unsplash.com/photos/tilt-shit-lens-photography-of-pine-cones-IRSyulBDNc0'
                heading='Projects'
                subheading='Available on GitHub'
            />
            <div className='projects-container'>
                Projects - Under maintenance for transition to portfolio v2.0 - Dec. 21, 2023
            </div>
        </div>
    )
}

export default Projects