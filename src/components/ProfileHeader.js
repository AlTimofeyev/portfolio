import React, { useState, useRef, useLayoutEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import SplitType from 'split-type';
import { NavbarPageSelectionContext } from '../contexts/NavbarContext';
import './ProfileHeader.scss';


function ProfileHeader() {
    const { pageSelected, setPageSelectionState } = useContext(NavbarPageSelectionContext);
    const [isTitleHovered, setTitleHovered] = useState(null);
    const profileIntro = useRef(null);
    const profileButtons = useRef(null);
    const profileTitleVisible = useRef(null);
    const profileTitleReveal = useRef(null);
    const profileOpeningTimeline = useRef();
    const visibleTitleHoverTimeline = useRef();
    const revealTitleHoverTimeline = useRef();

    useLayoutEffect(() => {
        const visibleTitleText = new SplitType(profileTitleVisible.current, { charClass: 'visible-char' });
        const revealTitleText = new SplitType(profileTitleReveal.current, { charClass: 'reveal-char' });

        let mediaMatched = gsap.matchMedia([profileIntro, profileButtons]);

        mediaMatched.add('(min-width: 1201px)', () => {
            // The opening timeline for the profile header.
            profileOpeningTimeline.current && profileOpeningTimeline.current.progress(0).kill();
            profileOpeningTimeline.current = gsap.timeline()
                .set(visibleTitleText.chars, { y: -55 })
                .set(revealTitleText.chars, { y: -55 })
                .set('.name', { y: -10, opacity: 0 })
                .set(profileButtons.current, { opacity: 0, pointerEvents: 'none' })
                .to('.name', {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: 0.5,
                    ease: 'power1.in'
                })
                .to(visibleTitleText.chars, {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    delay: 0.5,
                    ease: 'power1.inOut'
                })
                .to(profileButtons.current, {
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power2.in',
                    pointerEvents: 'all'
                });

            // The visible title hover timeline, only plays when the title is hovered.
            visibleTitleHoverTimeline.current && visibleTitleHoverTimeline.current.progress(0).kill();
            visibleTitleHoverTimeline.current = gsap.timeline({ paused: true })
                .to('.visible-char', {
                    y: 55,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });

            // The reveal title hover timeline, only plays when the title is hovered.
            revealTitleHoverTimeline.current && revealTitleHoverTimeline.current.progress(0).kill();
            revealTitleHoverTimeline.current = gsap.timeline({ paused: true })
                .to('.reveal-char', {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });
        });

        mediaMatched.add('(max-width: 1200px)', () => {
            // The opening timeline for the profile header.
            profileOpeningTimeline.current && profileOpeningTimeline.current.progress(0).kill();
            profileOpeningTimeline.current = gsap.timeline()
                .set(visibleTitleText.chars, { y: -43 })
                .set(revealTitleText.chars, { y: -43 })
                .set('.name', { y: -10, opacity: 0 })
                .set(profileButtons.current, { opacity: 0, pointerEvents: 'none' })
                .to('.name', {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: 0.5,
                    ease: 'power1.in'
                })
                .to(visibleTitleText.chars, {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    delay: 0.5,
                    ease: 'power1.inOut'
                })
                .to(profileButtons.current, {
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power2.in',
                    pointerEvents: 'all'
                });

            // The visible title hover timeline, only plays when the title is hovered.
            visibleTitleHoverTimeline.current && visibleTitleHoverTimeline.current.progress(0).kill();
            visibleTitleHoverTimeline.current = gsap.timeline({ paused: true })
                .to('.visible-char', {
                    y: 43,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });

            // The reveal title hover timeline, only plays when the title is hovered.
            revealTitleHoverTimeline.current && revealTitleHoverTimeline.current.progress(0).kill();
            revealTitleHoverTimeline.current = gsap.timeline({ paused: true })
                .to('.reveal-char', {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });
        });

        mediaMatched.add('(max-width: 950px)', () => {
            // The opening timeline for the profile header.
            profileOpeningTimeline.current && profileOpeningTimeline.current.progress(0).kill();
            profileOpeningTimeline.current = gsap.timeline()
                .set(visibleTitleText.chars, { y: -35 })
                .set(revealTitleText.chars, { y: -35 })
                .set('.name', { y: -10, opacity: 0 })
                .set(profileButtons.current, { opacity: 0, pointerEvents: 'none' })
                .to('.name', {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: 0.5,
                    ease: 'power1.in'
                })
                .to(visibleTitleText.chars, {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    delay: 0.5,
                    ease: 'power1.inOut'
                })
                .to(profileButtons.current, {
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power2.in',
                    pointerEvents: 'all'
                });

            // The visible title hover timeline, only plays when the title is hovered.
            visibleTitleHoverTimeline.current && visibleTitleHoverTimeline.current.progress(0).kill();
            visibleTitleHoverTimeline.current = gsap.timeline({ paused: true })
                .to('.visible-char', {
                    y: 35,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });

            // The reveal title hover timeline, only plays when the title is hovered.
            revealTitleHoverTimeline.current && revealTitleHoverTimeline.current.progress(0).kill();
            revealTitleHoverTimeline.current = gsap.timeline({ paused: true })
                .to('.reveal-char', {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });
        });

        mediaMatched.add('(max-width: 650px)', () => {
            // The opening timeline for the profile header.
            profileOpeningTimeline.current && profileOpeningTimeline.current.progress(0).kill();
            profileOpeningTimeline.current = gsap.timeline()
                .set(visibleTitleText.chars, { y: -28 })
                .set(revealTitleText.chars, { y: -28 })
                .set('.name', { y: -10, opacity: 0 })
                .set(profileButtons.current, { opacity: 0, pointerEvents: 'none' })
                .to('.name', {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: 0.5,
                    ease: 'power1.in'
                })
                .to(visibleTitleText.chars, {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    delay: 0.5,
                    ease: 'power1.inOut'
                })
                .to(profileButtons.current, {
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power2.in',
                    pointerEvents: 'all'
                });

            // The visible title hover timeline, only plays when the title is hovered.
            visibleTitleHoverTimeline.current && visibleTitleHoverTimeline.current.progress(0).kill();
            visibleTitleHoverTimeline.current = gsap.timeline({ paused: true })
                .to('.visible-char', {
                    y: 28,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });

            // The reveal title hover timeline, only plays when the title is hovered.
            revealTitleHoverTimeline.current && revealTitleHoverTimeline.current.progress(0).kill();
            revealTitleHoverTimeline.current = gsap.timeline({ paused: true })
                .to('.reveal-char', {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });
        });

        mediaMatched.add('(max-width: 460px)', () => {
            // The opening timeline for the profile header.
            profileOpeningTimeline.current && profileOpeningTimeline.current.progress(0).kill();
            profileOpeningTimeline.current = gsap.timeline()
                .set(visibleTitleText.chars, { y: -25 })
                .set(revealTitleText.chars, { y: -25 })
                .set('.name', { y: -10, opacity: 0 })
                .set(profileButtons.current, { opacity: 0, pointerEvents: 'none' })
                .to('.name', {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: 0.5,
                    ease: 'power1.in'
                })
                .to(visibleTitleText.chars, {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    delay: 0.5,
                    ease: 'power1.inOut'
                })
                .to(profileButtons.current, {
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power2.in',
                    pointerEvents: 'all'
                });

            // The visible title hover timeline, only plays when the title is hovered.
            visibleTitleHoverTimeline.current && visibleTitleHoverTimeline.current.progress(0).kill();
            visibleTitleHoverTimeline.current = gsap.timeline({ paused: true })
                .to('.visible-char', {
                    y: 25,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });

            // The reveal title hover timeline, only plays when the title is hovered.
            revealTitleHoverTimeline.current && revealTitleHoverTimeline.current.progress(0).kill();
            revealTitleHoverTimeline.current = gsap.timeline({ paused: true })
                .to('.reveal-char', {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });
        });

        mediaMatched.add('(max-width: 395px)', () => {
            // The opening timeline for the profile header.
            profileOpeningTimeline.current && profileOpeningTimeline.current.progress(0).kill();
            profileOpeningTimeline.current = gsap.timeline()
                .set(visibleTitleText.chars, { y: -15 })
                .set(revealTitleText.chars, { y: -15 })
                .set('.name', { y: -10, opacity: 0 })
                .set(profileButtons.current, { opacity: 0, pointerEvents: 'none' })
                .to('.name', {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: 0.5,
                    ease: 'power1.in'
                })
                .to(visibleTitleText.chars, {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    delay: 0.5,
                    ease: 'power1.inOut'
                })
                .to(profileButtons.current, {
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power2.in',
                    pointerEvents: 'all'
                });

            // The visible title hover timeline, only plays when the title is hovered.
            visibleTitleHoverTimeline.current && visibleTitleHoverTimeline.current.progress(0).kill();
            visibleTitleHoverTimeline.current = gsap.timeline({ paused: true })
                .to('.visible-char', {
                    y: 15,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });

            // The reveal title hover timeline, only plays when the title is hovered.
            revealTitleHoverTimeline.current && revealTitleHoverTimeline.current.progress(0).kill();
            revealTitleHoverTimeline.current = gsap.timeline({ paused: true })
                .to('.reveal-char', {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });
        });

        
        return () => {
            mediaMatched.revert();
        };
    }, []);

    useLayoutEffect(() => {
        // Don't use this effect if the title element hasn't been 
        // hovered on or if the profile opening timeline is active.
        if (isTitleHovered === null || profileOpeningTimeline.current.isActive()) {
            return;
        }

        if (isTitleHovered) {
            visibleTitleHoverTimeline.current.timeScale(1.2).play();
            revealTitleHoverTimeline.current.timeScale(1).play();
        }
        else {
            visibleTitleHoverTimeline.current.timeScale(-1).reverse();
            revealTitleHoverTimeline.current.timeScale(-1.2).reverse();
        }

    }, [isTitleHovered]);

    return (
        <div className='profile'>
            <div className='profile-container'>
                <div className='portfolio-introducation' ref={profileIntro}>
                    <div className='profile-name'>
                        <div className='profile-name-container'>
                            <h1 className='name'>Al Timofeyev</h1>
                        </div>
                    </div>
                    <div className='profile-title' onMouseOver={() => setTitleHovered(true)} onMouseOut={() => setTitleHovered(false)}>
                        <div className='profile-title-container'>
                            <h2 className='title' ref={profileTitleReveal}>Computer Scientist</h2>
                        </div>
                        <div className='profile-title-container'>
                            <h2 className='title' ref={profileTitleVisible}>Software Engineer</h2>
                        </div>
                    </div>
                </div>
                <div className='profile-buttons' ref={profileButtons}>
                    <div className='profile-button-container'>
                        <Link
                            className='profile-button primary-btn'
                            onClick={() => setPageSelectionState(3)}
                            to='/contact'
                        >
                            Contact Me
                        </Link>
                    </div>
                    <div className='profile-button-container'>
                        <a
                            className='profile-button highlighted-btn'
                            href={process.env.PUBLIC_URL + '/data/Resume-AlTimofeyev-Anonymized-NoContactInfo.pdf'}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Get Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader

// This one works in development, there's a forward slash in front of data.
// href={process.env.PUBLIC_URL + '/data/Resume-AlTimofeyev-Anonymized-NoContactInfo.pdf'}
// For published view, I should probably delete the first forward slash?