import React, { useContext, useLayoutEffect } from 'react';
import { NavbarPageSelectionContext } from '../contexts/NavbarContext';
import Header from '../components/Header';
import './Contact.scss';

function Contact() {
    const { pageSelected, setPageSelectionState } = useContext(NavbarPageSelectionContext);

    // Run this once when the page is loaded/mounted.
    useLayoutEffect(() => {
        setPageSelectionState(3);   // Set this page as active in navbar.

        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    return (
        <div className='contact'>
            <Header
                img_src='/assets/header-images/Gemi-TimeToDyeWithYou.jpeg'
                img_alt='Gemi - Time To Dye With You'
                heading='Contact'
                subheading='Call me, Beep me, If you wanna reach me'
            />
            <div className='contact-container'>
                Contact - Under maintenance for transition to portfolio v2.0 - Nov. 30, 2023
            </div>
        </div>
    )
}

export default Contact