import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { NavbarPageSelectionContext } from '../contexts/NavbarContext';
import { SidebarContext } from '../contexts/SidebarContext';
import ProfileHeader from '../components/ProfileHeader';
import SocialSidebar from '../components/SocialSidebar'
import { ReactComponent as SectionIcon } from '../src-assets/Section_Icon.svg';
import { ReactComponent as WavingIcon } from '../src-assets/hand-icons/Hand_Waving_Icon-Thick.svg';
import { ReactComponent as GitHubSVGIcon } from '../src-assets/social-icons/Social_Icon-GitHub.svg';
import { ReactComponent as LinkedInSVGIcon } from '../src-assets/social-icons/Social_Icon-LinkedIn.svg';
import { ReactComponent as StackOverflowSVGIcon } from '../src-assets/social-icons/Social_Icon-StackOverflow.svg';
import { ReactComponent as MLIcon } from '../src-assets/intro-icons/Intro_Icon-ML.svg';
import { ReactComponent as ReadingIcon } from '../src-assets/intro-icons/Intro_Icon-Reading.svg';
import { ReactComponent as GamingIcon } from '../src-assets/intro-icons/Intro_Icon-Gaming.svg';
import { ReactComponent as ArtIcon } from '../src-assets/intro-icons/Intro_Icon-Art.svg';
import { ReactComponent as BronzeIcon } from '../src-assets/proficiency-icons/Proficiency_Icon-Bronze.svg';
import { ReactComponent as SilverIcon } from '../src-assets/proficiency-icons/Proficiency_Icon-Silver.svg';
import { ReactComponent as GoldIcon } from '../src-assets/proficiency-icons/Proficiency_Icon-Gold.svg';
import { ReactComponent as DiamondIcon } from '../src-assets/proficiency-icons/Proficiency_Icon-Diamond.svg';
import { ReactComponent as MasterIcon } from '../src-assets/proficiency-icons/Proficiency_Icon-Master.svg';
import './Home.scss';

gsap.registerPlugin(ScrollTrigger);


function Home() {
    const { pageSelected, setPageSelectionState } = useContext(NavbarPageSelectionContext);
    const [proficiencySelected, setProficiency] = useState([false, false, false, false, false]);
    const homeContainerRef = useRef(null);
    const redirectPageRef = useRef(null);
    const redirectIconTimeline = useRef();

    const setProficiencyState = (index) => {
        setProficiency(prevState => prevState.map((proficiencyState, idx) => idx === index ? !proficiencyState : proficiencyState));
    }

    // Run this once when the page is loaded/mounted.
    useLayoutEffect(() => {
        setPageSelectionState(0);   // Set this page as active in navbar.

        // window.scrollTo(0, 0);

        // window.scroll({
        //     top: 0,
        //     left: 0,
        //     behavior: "smooth",
        // });

        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant",
        });

        let gcontext = gsap.context(() => {

            redirectIconTimeline.current && redirectIconTimeline.current.progress(0).kill();
            redirectIconTimeline.current = gsap.timeline({
                paused: false, repeat: -1, scrollTrigger: {
                    trigger: redirectPageRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: false,
                    toggleActions: 'play reset play reset',
                    markers: false
                }
            })
                .to('.redirect-icon', {
                    x: 50,
                    duration: 2,
                    ease: 'bounce.out'
                })
                .to('.redirect-icon', {
                    x: 0,
                    duration: 0.5
                });

        }, [redirectPageRef]);

        return () => {
            gcontext.revert();
        };

    }, []);


    return (
        <div className='home'>
            <ProfileHeader />
            <SidebarContext.Provider value={{ homeContainerRef, redirectPageRef }}>
                <SocialSidebar />
            </SidebarContext.Provider>
            <div className='home-container' ref={homeContainerRef}>
                <div className='home-section'>
                    <div className='section-container'>
                        <div className='section-title'>
                            <div className='section-icon-container'>
                                <SectionIcon className='section-icon' />
                            </div>
                            <div className='section-title-container'>
                                <h1 className='title'>About Me</h1>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-group'>
                                <div className='introduction'>
                                    <div className='introduction-container'>
                                        <div className='profile-picture'>
                                            <div className='profile-picture-container'>
                                                <img className='pfp' src={process.env.PUBLIC_URL + '/assets/ProfilePicture_SoupThiefOfDiagonAlley.jpg'} alt='PFP - Soup Thief Of Diagon Alley'></img>
                                            </div>
                                        </div>
                                        <div className='about-me'>
                                            <div className='about-me-container'>
                                                <div className='about-me-snippet'>
                                                    <p className='snippet-text'>Hi there, I'm Al!</p>
                                                    <div className='waving-icon-container'>
                                                        <WavingIcon className='waving-icon' />
                                                    </div>
                                                </div>
                                                <div className='about-me-snippet'>
                                                    <p className='snippet-text'>
                                                        I'm a passionate and inquisitive computer scientist who enjoys building software.
                                                        Fascinated by the creativity and ingenuity of Tony Stark as he built his first Iron
                                                        Man armor with the help of his A.I. assistant, I started my journey to becoming a
                                                        software engineer by tinkering with robotics and programming tools when I began attending high school.
                                                        Today, I specialize in back-end development with a focus on research and development
                                                        and a knack for building tools and software aimed at improving the lives of those around me.
                                                    </p>
                                                </div>
                                                <div className='about-me-snippet'>
                                                    <p className='snippet-text'>Please feel free to take a look around!</p>
                                                </div>
                                                <div className='about-me-socials'>
                                                    <div className='about-me-icons'>
                                                        <div className='about-me-icon-container'>
                                                            <a
                                                                className='about-me-icon-link'
                                                                href='https://github.com/AlTimofeyev'
                                                                target='_blank'
                                                                rel='noopener noreferrer'
                                                            >
                                                                <GitHubSVGIcon className='about-me-icon' />
                                                            </a>
                                                        </div>
                                                        <div className='about-me-icon-container'>
                                                            <a
                                                                className='about-me-icon-link'
                                                                href='https://www.linkedin.com/in/al-timofeyev-235542129'
                                                                target='_blank'
                                                                rel='noopener noreferrer'
                                                            >
                                                                <LinkedInSVGIcon className='about-me-icon' />
                                                            </a>
                                                        </div>
                                                        <div className='about-me-icon-container'>
                                                            <a
                                                                className='about-me-icon-link'
                                                                href='https://stackoverflow.com/users/17047816/al-timofeyev'
                                                                target='_blank'
                                                                rel='noopener noreferrer'
                                                            >
                                                                <StackOverflowSVGIcon className='about-me-icon' />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='interests'>
                                    <div className='interest-group'>
                                        <div className='interest-container'>
                                            <div className='interest-short'>
                                                <span className='interest'>ML, AI, VR, AR</span>
                                            </div>
                                            <div className='interest-icon'>
                                                <div className='interest-icon-container'>
                                                    <MLIcon className='icon' />
                                                </div>
                                            </div>
                                            <div className='interest-long'>
                                                <span className='interest-title'>Tech</span>
                                                <div className='interest-list'>
                                                    <span className='interest'>Machine Learning</span>
                                                    <span className='interest'>Artificial Intelligence</span>
                                                    <span className='interest'>Augmented Reality</span>
                                                    <span className='interest'>Virtual Reality</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='interest-container'>
                                            <div className='interest-short'>
                                                <span className='interest'>The Underland Chronicles</span>
                                            </div>
                                            <div className='interest-icon'>
                                                <div className='interest-icon-container'>
                                                    <ReadingIcon className='icon' />
                                                </div>
                                            </div>
                                            <div className='interest-long'>
                                                <span className='interest-title'>Reading</span>
                                                <div className='interest-list'>
                                                    <span className='interest'>The Bible</span>
                                                    <span className='interest'>Underland Chronicles</span>
                                                    <span className='interest'>The Sisters Grimm</span>
                                                    <span className='interest'>The Throne of Glass</span>
                                                    <span className='interest'>Manga / Manhwa</span>
                                                    <span className='interest'>Webtoons</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='interest-group'>
                                        <div className='interest-container'>
                                            <div className='interest-short'>
                                                <span className='interest'>FFXIV & CoD</span>
                                            </div>
                                            <div className='interest-icon'>
                                                <div className='interest-icon-container'>
                                                    <GamingIcon className='icon' />
                                                </div>
                                            </div>
                                            <div className='interest-long'>
                                                <span className='interest-title'>Gaming</span>
                                                <div className='interest-list'>
                                                    <span className='interest'>FFXIV</span>
                                                    <span className='interest'>Uncharted</span>
                                                    <span className='interest'>God of War</span>
                                                    <span className='interest'>Call of Duty</span>
                                                    <span className='interest'>Overwatch</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='interest-container'>
                                            <div className='interest-short'>
                                                <span className='interest'>Digital Art</span>
                                            </div>
                                            <div className='interest-icon'>
                                                <div className='interest-icon-container'>
                                                    <ArtIcon className='icon' />
                                                </div>
                                            </div>
                                            <div className='interest-long'>
                                                <span className='interest-title'>Art</span>
                                                <div className='interest-list'>
                                                    <span className='interest'>Digital Art</span>
                                                    <span className='interest'>Animation</span>
                                                    <span className='interest'>Graphic Design</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-group'>
                                <div className='fact-cards'>
                                    <div className='fact-card-group'>
                                        <div className='fact-card'>
                                            <div className='visible-fact'>
                                                <div className='fact-container'>
                                                    <p className='fact'>
                                                        I enjoy taking full ownership of the products, tools and features I develop and will see them through to completion.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='reveal-fact'>
                                                <span className='reveal-fact-icon'>i</span>
                                                <div className='fact-container'>
                                                    <p className='fact'>
                                                        I relishing the challenge of learning new skills and technologies in the process.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='fact-card'>
                                            <div className='visible-fact'>
                                                <div className='fact-container'>
                                                    <span className='fact'>
                                                        I follow two mindsets:
                                                        <div className='fact-list'>
                                                            <span className='listed-fact'>
                                                                Never Stop Learning
                                                            </span>
                                                            <span className='listed-fact'>
                                                                Success is not Final ; Failure is not Fatal
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='reveal-fact'>
                                                <span className='reveal-fact-icon'>i</span>
                                                <div className='fact-container'>
                                                    <p className='fact'>
                                                        The cycle of success is infinite as there is always something more to learn and failure breeds success when combined with the determination to improve.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='fact-card-group'>
                                        <div className='fact-card'>
                                            <div className='visible-fact'>
                                                <div className='fact-container'>
                                                    <p className='fact'>
                                                        I adore helping others and won't hesitate to step in and assist them, especially if we both can learn something new from the experience.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='reveal-fact'>
                                                <span className='reveal-fact-icon'>i</span>
                                                <div className='fact-container'>
                                                    <p className='fact'>
                                                        My time working as a teaching assistant in both an elementary school and in higher education has allowed me to grow fond of fostering a learning environment wherever I go.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='fact-card'>
                                            <div className='visible-fact'>
                                                <div className='fact-container'>
                                                    <p className='fact'>
                                                        I am mainly a Back-end developer working with C++, Python and Java.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='reveal-fact'>
                                                <span className='reveal-fact-icon'>i</span>
                                                <div className='fact-container'>
                                                    <p className='fact'>
                                                        I love branching out to work with other technologies like Front-end, UI/UX Design, Data Engineering, Analytics and Machine Learning.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-section'>
                    <div className='section-container'>
                        <div className='section-title'>
                            <div className='section-icon-container'>
                                <SectionIcon className='section-icon' />
                            </div>
                            <div className='section-title-container'>
                                <h1 className='title'>Skills</h1>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-group'>
                                <div className='skill-proficiency-menu skill-proficiency-menu-reveal'>
                                    <div className='skill-proficiency-menu-container'>
                                        <div className='menu-title'>
                                            <h3 className='title'>Proficiency Chart</h3>
                                        </div>
                                        <div className='proficiency-menu'>
                                            <div className={proficiencySelected[0] ? 'menu-item-group active' : 'menu-item-group'} onClick={() => setProficiencyState(0)}>
                                                <div className='proficiency-icon-container'>
                                                    <MasterIcon className='proficiency-icon' />
                                                </div>
                                                <div className='proficiency-level'>
                                                    <span className='level' >Expert</span>
                                                </div>
                                            </div>

                                            <div className={proficiencySelected[1] ? 'menu-item-group active' : 'menu-item-group'} onClick={() => setProficiencyState(1)}>
                                                <div className='proficiency-icon-container'>
                                                    <DiamondIcon className='proficiency-icon' />
                                                </div>
                                                <div className='proficiency-level'>
                                                    <span className='level' >Advanced</span>
                                                </div>
                                            </div>

                                            <div className={proficiencySelected[2] ? 'menu-item-group active' : 'menu-item-group'} onClick={() => setProficiencyState(2)}>
                                                <div className='proficiency-icon-container'>
                                                    <GoldIcon className='proficiency-icon' />
                                                </div>
                                                <div className='proficiency-level'>
                                                    <span className='level' >Intermediate</span>
                                                </div>
                                            </div>

                                            <div className={proficiencySelected[3] ? 'menu-item-group active' : 'menu-item-group'} onClick={() => setProficiencyState(3)}>
                                                <div className='proficiency-icon-container'>
                                                    <SilverIcon className='proficiency-icon' />
                                                </div>
                                                <div className='proficiency-level'>
                                                    <span className='level' >Novice</span>
                                                </div>
                                            </div>

                                            <div className={proficiencySelected[4] ? 'menu-item-group active' : 'menu-item-group'} onClick={() => setProficiencyState(4)}>
                                                <div className='proficiency-icon-container'>
                                                    <BronzeIcon className='proficiency-icon' />
                                                </div>
                                                <div className='proficiency-level'>
                                                    <span className='level' >Basic Knowledge</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='subsection'>
                                    <div className='subsection-container'>
                                        <div className='subsection-title'>
                                            <h3 className='title'>Languages</h3>
                                        </div>
                                        <div className='skill-list'>
                                            <span className={proficiencySelected[0] ? 'skill active' : 'skill'}>C / C++</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>Java</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>Python</span>
                                            <span className={proficiencySelected[3] ? 'skill active' : 'skill'}>SQL</span>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>JavaScript</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>HTML</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>CSS</span>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>Visual Basic</span>
                                            <span className={proficiencySelected[3] ? 'skill active' : 'skill'}>Shell Scripting</span>
                                            <span className={proficiencySelected[3] ? 'skill active' : 'skill'}>Assembly</span>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>Markdown</span>
                                            <span className={proficiencySelected[4] ? 'skill active' : 'skill'}>LaTeX</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-group'>
                                <div className='subsection'>
                                    <div className='subsection-container'>
                                        <div className='subsection-title'>
                                            <h3 className='title'>Tools & Frameworks</h3>
                                        </div>
                                        <div className='skill-list'>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>Git</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>GitHub</span>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>React</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>NumPy</span>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>Doxygen</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>JSON</span>
                                            <span className={proficiencySelected[3] ? 'skill active' : 'skill'}>Unit Testing</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>Multithreading</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>Multiprocessing</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='skill-proficiency-menu'>
                                    <div className='skill-proficiency-menu-container'>
                                        <div className='menu-title'>
                                            <h3 className='title'>Proficiency Chart</h3>
                                        </div>
                                        <div className='proficiency-menu'>
                                            <div className={proficiencySelected[0] ? 'menu-item-group active' : 'menu-item-group'} onClick={() => setProficiencyState(0)}>
                                                <div className='proficiency-icon-container'>
                                                    <MasterIcon className='proficiency-icon' />
                                                </div>
                                                <div className='proficiency-level'>
                                                    <span className='level' >Expert</span>
                                                </div>
                                            </div>

                                            <div className={proficiencySelected[1] ? 'menu-item-group active' : 'menu-item-group'} onClick={() => setProficiencyState(1)}>
                                                <div className='proficiency-icon-container'>
                                                    <DiamondIcon className='proficiency-icon' />
                                                </div>
                                                <div className='proficiency-level'>
                                                    <span className='level' >Advanced</span>
                                                </div>
                                            </div>

                                            <div className={proficiencySelected[2] ? 'menu-item-group active' : 'menu-item-group'} onClick={() => setProficiencyState(2)}>
                                                <div className='proficiency-icon-container'>
                                                    <GoldIcon className='proficiency-icon' />
                                                </div>
                                                <div className='proficiency-level'>
                                                    <span className='level' >Intermediate</span>
                                                </div>
                                            </div>

                                            <div className={proficiencySelected[3] ? 'menu-item-group active' : 'menu-item-group'} onClick={() => setProficiencyState(3)}>
                                                <div className='proficiency-icon-container'>
                                                    <SilverIcon className='proficiency-icon' />
                                                </div>
                                                <div className='proficiency-level'>
                                                    <span className='level' >Novice</span>
                                                </div>
                                            </div>

                                            <div className={proficiencySelected[4] ? 'menu-item-group active' : 'menu-item-group'} onClick={() => setProficiencyState(4)}>
                                                <div className='proficiency-icon-container'>
                                                    <BronzeIcon className='proficiency-icon' />
                                                </div>
                                                <div className='proficiency-level'>
                                                    <span className='level' >Basic Knowledge</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='subsection'>
                                    <div className='subsection-container'>
                                        <div className='subsection-title'>
                                            <h3 className='title'>Environments</h3>
                                        </div>
                                        <div className='skill-list'>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>VSCode</span>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>IntelliJ</span>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>CLion</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>PyCharm</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>XCode</span>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>CLI</span>
                                            <span className={proficiencySelected[3] ? 'skill active' : 'skill'}>Android Studio</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>Windows</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>Linux</span>
                                            <span className={proficiencySelected[0] ? 'skill active' : 'skill'}>MacOS</span>
                                            <span className={proficiencySelected[4] ? 'skill active' : 'skill'}>AWS</span>
                                            <span className={proficiencySelected[4] ? 'skill active' : 'skill'}>GCP</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-group'>
                                <div className='subsection'>
                                    <div className='subsection-container'>
                                        <div className='subsection-title'>
                                            <h3 className='title'>Interpersonal</h3>
                                        </div>
                                        <div className='skill-list'>
                                            <span className={proficiencySelected[0] ? 'skill active' : 'skill'}>Bilingual</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>Teamwork</span>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>Customer Service</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='subsection'>
                                    <div className='subsection-container'>
                                        <div className='subsection-title'>
                                            <h3 className='title'>Productive</h3>
                                        </div>
                                        <div className='skill-list'>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>Technical Documentation</span>
                                            <span className={proficiencySelected[0] ? 'skill active' : 'skill'}>Data Entry</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>MS Word</span>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>MS Excel</span>
                                            <span className={proficiencySelected[3] ? 'skill active' : 'skill'}>MS Access</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>Detail-Oriented</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>Time Management</span>
                                            <span className={proficiencySelected[1] ? 'skill active' : 'skill'}>Resourcefullness</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='subsection'>
                                    <div className='subsection-container'>
                                        <div className='subsection-title'>
                                            <h3 className='title'>Creative</h3>
                                        </div>
                                        <div className='skill-list'>
                                            <span className={proficiencySelected[3] ? 'skill active' : 'skill'}>Photoshop</span>
                                            <span className={proficiencySelected[2] ? 'skill active' : 'skill'}>Procreate</span>
                                            <span className={proficiencySelected[3] ? 'skill active' : 'skill'}>SketchUp</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-section' ref={redirectPageRef}>
                    <div className='page-redirect'>
                        <div className='page-redirect-container'>
                            <Link className='page-redirect-link' to='/projects'>
                                <div className='redirect-title'>Projects</div>
                                <div className='redirect-icon'>
                                    <i className='fa-solid fa-right-long'></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

// This one works in development, there's a forward slash in front of assets.
// href={process.env.PUBLIC_URL + '/assets/ProfilePicture_SoupThiefOfDiagonAlley.jpg'}
// For published view, I should probably delete the first forward slash?