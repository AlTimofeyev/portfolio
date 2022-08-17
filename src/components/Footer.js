import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <small className='website-rights'>AL TIMOFEYEV © 2022</small>
                <div className='social-icons'>
                    <a 
                      className='social-icon-link GitHub'
                      href='https://github.com/AlTimofeyev/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Footer;