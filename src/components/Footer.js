import React from 'react';
import { ReactComponent as GitHubSVGIcon } from '../src-assets/social-icons/Social_Icon-GitHub.svg';
import { ReactComponent as LinkedInSVGIcon } from '../src-assets/social-icons/Social_Icon-LinkedIn.svg';
import { ReactComponent as StackOverflowSVGIcon } from '../src-assets/social-icons/Social_Icon-StackOverflow.svg';
import './Footer.scss';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='website-rights-container'>
                    <small className='website-rights'>AL TIMOFEYEV © 2023</small>
                </div>
                <section className='social-media'>
                    <div className='social-media-container'>
                        <div className='social-icons'>
                            <a
                                className='social-icon-link'
                                href='https://github.com/AlTimofeyev'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <GitHubSVGIcon className='social-icon' />
                            </a>
                            <a
                                className='social-icon-link'
                                href='https://www.linkedin.com/in/al-timofeyev-235542129'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <LinkedInSVGIcon className='social-icon' />
                            </a>
                            <a
                                className='social-icon-link'
                                href='https://stackoverflow.com/users/17047816/al-timofeyev'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <StackOverflowSVGIcon className='social-icon' />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer