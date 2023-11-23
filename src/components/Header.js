import React from 'react';
import './Header.scss';

function Header(props) {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-background-image'>
                    {props.img_src &&
                        <img
                            className='background-image'
                            src={process.env.PUBLIC_URL + props.img_src}
                            alt={props.img_alt}
                        />}
                </div>
                <div className='header-heading'>
                    <div className='heading-container'>
                        <h1 className='heading'>{props.heading}</h1>
                    </div>
                    <div className='heading-container'>
                        {props.subheading &&
                            <h3 className='subheading'>{props.subheading}</h3>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header