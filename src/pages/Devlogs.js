import React, { useContext, useLayoutEffect } from 'react';
import { NavbarPageSelectionContext } from '../contexts/NavbarContext';
import Header from '../components/Header';
import './Devlogs.scss';

function Devlogs() {
    const { pageSelected, setPageSelectionState } = useContext(NavbarPageSelectionContext);

    // Run this once when the page is loaded/mounted.
    useLayoutEffect(() => {
        setPageSelectionState(1);   // Set this page as active in navbar.

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
                img_alt='Arno Smit - Cherry Blossoms - TWITTER: @_entreprenerd - SOURCE: https://unsplash.com/photos/low-angle-photo-of-cherry-blossoms-tree-sKJ7zSylUao'
                heading='Devlogs'
                subheading='Development Archives'
            />
            <div className='devlogs-container'>
                Devlogs - Under maintenance for transition to portfolio v2.0 - Jan. 11, 2024
            </div>
        </div>
    )
}

export default Devlogs