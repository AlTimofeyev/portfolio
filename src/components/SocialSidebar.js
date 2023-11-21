import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useSidebarContext } from '../contexts/SidebarContext';
import { ReactComponent as GitHubSVGIcon } from '../src-assets/social-icons/Social_Icon-GitHub.svg';
import { ReactComponent as LinkedInSVGIcon } from '../src-assets/social-icons/Social_Icon-LinkedIn.svg';
import { ReactComponent as StackOverflowSVGIcon } from '../src-assets/social-icons/Social_Icon-StackOverflow.svg';
import './SocialSidebar.scss';

gsap.registerPlugin(ScrollTrigger);


export default function SocialSidebar() {
    const sidebarRef = useRef(null);
    const sidebarTimeline = useRef();
    const { homeContainerRef, redirectPageRef } = useSidebarContext();

    useEffect(() => {
        let mediaMatched = gsap.matchMedia([sidebarRef, homeContainerRef, redirectPageRef]);

        mediaMatched.add('(min-width: 926px)', () => {
            gsap.set(sidebarRef.current, {
                autoAlpha: 0    // Sets opacity to 0 and disables pointer events.
            });

            sidebarTimeline.current && sidebarTimeline.current.progress(0).kill();
            sidebarTimeline.current = gsap.timeline({ paused: false })
                .to(sidebarRef.current, {
                    autoAlpha: 1,
                    ease: "power2.in",
                    scrollTrigger: {
                        trigger: homeContainerRef.current,
                        start: '-10% bottom',
                        end: 'top center',
                        scrub: true,
                        invalidateOnRefresh: true, // to make it responsive (?)
                        markers: false,
                    }
                })
                .to(sidebarRef.current, {
                    autoAlpha: 0,
                    ease: "power2.in",
                    scrollTrigger: {
                        trigger: redirectPageRef.current,
                        start: '-20% center',
                        end: 'top 40%',
                        scrub: true,
                        invalidateOnRefresh: true, // to make it responsive (?)
                        markers: false,
                    }
                });
        });

        return () => {
            mediaMatched.revert();
        };

    }, [homeContainerRef, redirectPageRef]);

    return (
        <div className='social-sidebar' ref={sidebarRef}>
            <div className='social-sidebar-container'>
                <div className='sidebar-icons'>
                    <div className='sidebar-icon-container'>
                        <a
                            className='sidebar-icon-link'
                            href='https://github.com/AlTimofeyev'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <GitHubSVGIcon className='sidebar-icon' />
                        </a>
                    </div>
                    <div className='sidebar-icon-container'>
                        <a
                            className='sidebar-icon-link'
                            href='https://www.linkedin.com/in/al-timofeyev-235542129'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <LinkedInSVGIcon className='sidebar-icon' />
                        </a>
                    </div>
                    <div className='sidebar-icon-container'>
                        <a
                            className='sidebar-icon-link'
                            href='https://stackoverflow.com/users/17047816/al-timofeyev'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <StackOverflowSVGIcon className='sidebar-icon' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
