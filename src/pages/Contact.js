import React, { useLayoutEffect } from 'react';
import './Contact.scss';

function Contact() {
    // Run this once when the page is loaded/mounted.
    useLayoutEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    return (
        <div className='contact'>
            Contact - Under maintenance for transition to portfolio v2.0 - Nov. 20, 2023
        </div>
    )
}

export default Contact