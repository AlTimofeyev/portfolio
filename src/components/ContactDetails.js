import React from 'react';
import '../App.css';
import './ContactDetails.css';

function ContactDetails() {
  return (
    <div className='section'>
        <h1>CONTACT INFO</h1>
        <div className='contact__container'>
            <div className='contact__wrapper'>
                <div className='section'>
                    <h3>EMAIL - PHONE NUMBER</h3>
                    <div className='details__container'>
                        <p className='contact_details'>Listed on my Resume</p>
                    </div>
                </div>
            </div>
            <div className='contact__wrapper'>
                <div className='section'>
                    <h3>NOTICE ABOUT PHONE CALLS</h3>
                    <div className='details__container'>
                        <p className='contact_details'>
                            PLEASE LET ME KNOW, THROUGH EMAIL, AT LEAST 24 HOURS IN ADVANCE THE TIME AND DATE YOU WILL CALL, AND IF POSSIBLE YOUR PHONE NUMBER TOO!
                        </p>
                        <p className='contact_details'>
                            I do no not answer calls from unknown/spam callers and this notice will give me enough time to see your email and expect your call. 
                        </p>
                        <p className='contact_details'>
                            I am very sorry for any inconvenience this may cause.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactDetails;