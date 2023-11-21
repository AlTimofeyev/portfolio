import React, { useLayoutEffect } from 'react';
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
            Projects - Under maintenance for transition to portfolio v2.0 - Nov. 20, 2023
        </div>
    )
}

export default Projects