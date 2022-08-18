import React from 'react'
import '../../App.css';
import HeaderSection from '../HeaderSection';
import Footer from '../Footer';


function Contact () {
    return (
        <>
            <HeaderSection 
                src='/images/Gemi-TimeToDyeWithYou.jpeg'
                alt='Gemi Time To Dye With You'
                heading='CONTACT'
                subheading='Details Below'
            />
            <Footer/>
        </>
    );
};

export default Contact;