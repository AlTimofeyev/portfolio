import React, { useLayoutEffect } from 'react';
import Header from '../components/Header';
import './Devlogs.scss';

function Devlogs() {
    // Run this once when the page is loaded/mounted.
    useLayoutEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    return (
        <div className='devlogs'>
            <Header
                img_src='/assets/header-images/ArnoSmit-CherryBlossoms.jpeg'
                img_alt='Arno Smit - Cherry Blossoms'
                heading='Devlogs'
                subheading='Progress Archive of Different Projects'
            />
            <div className='devlogs-container'>
                Devlogs - Under maintenance for transition to portfolio v2.0 - Nov. 23, 2023
            </div>
        </div>
    )
}

export default Devlogs