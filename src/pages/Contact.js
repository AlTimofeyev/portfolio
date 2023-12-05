import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { NavbarPageSelectionContext } from '../contexts/NavbarContext';
import Header from '../components/Header';
import './Contact.scss';

function Contact() {
    const formRef = useRef(null);
    const [successAlert, setSuccessAlert] = useState(false);
    const [failureAlert, setFailureAlert] = useState(false);
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

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // If you see this, no you didn't, please look at something else.
        emailjs.sendForm('service_1md6a4j', 'template_3p3zuuj', formRef.current, 'XSEA2sjnLVrIw0otx')
            .then((response) => {
                if (response.status === 200) {
                    formRef.current.reset();    // Only reset form AFTER successful submission of message.
                    setSuccessAlert(true);
                    setFailureAlert(false);
                }
                else {
                    setSuccessAlert(false);
                    setFailureAlert(true);
                }

            }, (error) => {
                setSuccessAlert(false);
                setFailureAlert(true);
            });
    }

    return (
        <div className='contact'>
            <Header
                img_src='/assets/header-images/Gemi-TimeToDyeWithYou.jpeg'
                img_alt='Gemi - Time To Dye With You'
                heading='Contact'
                subheading='Call me, Beep me, If you wanna reach me'
            />
            {/* Contact - Under maintenance for transition to portfolio v2.0 - Nov. 30, 2023 */}
            <div className='contact-container'>
                <div className='contact-section'>
                    <div className='message'>
                        <div className='message-container'>
                            <div className='message-group'>
                                <h3 className='message-subtitle'>Contact Me</h3>
                                <h1 className='message-title'>Get In Touch</h1>
                            </div>
                            <div className='message-group'>
                                <p className='message-details'>
                                    I am available through LinkedIn or you can get in contact
                                    with me by using the provided form.
                                    Please feel free to reach out.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-section'>
                    <div className='form'>
                        <form
                            className='form-container'
                            onSubmit={handleFormSubmit}
                            ref={formRef}
                        >
                            <div className='form-content'>
                                <div className='form-input'>
                                    <input
                                        className='input-field'
                                        name='name'
                                        type='text'
                                        placeholder='Name'
                                        autoComplete='off'
                                        required
                                    />
                                </div>
                                <div className='form-input'>
                                    <input
                                        className='input-field'
                                        name='email'
                                        type='email'
                                        placeholder='Email'
                                        autoComplete='off'
                                        required
                                    />
                                </div>
                                <div className='form-input'>
                                    <input
                                        className='input-field'
                                        name='subject'
                                        type='text'
                                        placeholder='Subject'
                                        autoComplete='off'
                                        required
                                    />
                                </div>
                                <div className='form-message'>
                                    <textarea
                                        className='text-field'
                                        name='message'
                                        type='text'
                                        placeholder='Message'
                                        autoComplete='on'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='form-actions'>
                                <div className='button-container'>
                                    <button className='send-button' type='submit'>Send Message</button>
                                </div>
                                <div className='alert-messages'>
                                    <div className={successAlert ? 'alert alert-active' : 'alert'}>
                                        <span className='success-alert'>Sent Successfully</span>
                                    </div>
                                    <div className={failureAlert ? 'alert alert-active' : 'alert'}>
                                        <span className='failure-alert'>Failed to Send Message</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact