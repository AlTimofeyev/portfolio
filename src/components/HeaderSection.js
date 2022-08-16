import React from 'react';
import '../App.css';
import './HeaderSection.css'

function HeaderSection(props) {
  return (
    <div className='header-container'>
        <img src={process.env.PUBLIC_URL + props.src} alt={props.alt} />
      <h1>{props.heading}</h1>
      <h3>{props.subheading}</h3>
    </div>
  );
};

export default HeaderSection;