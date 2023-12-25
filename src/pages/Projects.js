import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { NavbarPageSelectionContext } from '../contexts/NavbarContext';
import Header from '../components/Header';
import Video from '../components/Video';
import CardItem from '../components/CardItem';
import { ReactComponent as SkillBackground } from '../src-assets/Skill_Background.svg';
import { ReactComponent as GitHubIcon } from '../src-assets/social-icons/Social_Icon-GitHub.svg';
import { ReactComponent as PyPIIcon } from '../src-assets/social-icons/Social_Icon-PyPI.svg';
import { ReactComponent as ArchiveIcon } from '../src-assets/Enso_Circle.svg';
import './Projects.scss';


gsap.registerPlugin(ScrollTrigger);


function Projects() {
    const { pageSelected, setPageSelectionState } = useContext(NavbarPageSelectionContext);
    const featuredProjectsRef = useRef(null);
    const mentionedProjectsRef = useRef(null);


    // Run this once when the page is loaded/mounted.
    useLayoutEffect(() => {
        setPageSelectionState(2);   // Set this page as active in navbar.

        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    useEffect(() => {
        let gcontext = gsap.context(() => {
            gsap.fromTo(mentionedProjectsRef.current, {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: mentionedProjectsRef.current,
                    scrub: true,
                    start: 'top bottom',
                    end: 'top 60%',
                    invalidateOnRefresh: true
                }
            });
        }, [mentionedProjectsRef]);

        let screenMediaMatched = gsap.matchMedia([featuredProjectsRef]);

        screenMediaMatched.add('(min-width: 1441px)', () => {
            let featured_media_samples = gsap.utils.toArray('.sample-container');
            let featured_project_descriptions = gsap.utils.toArray('.project-description');

            featured_media_samples.forEach((media_sample) => {
                gsap.fromTo(media_sample, {
                    opacity: 0,
                    y: 100
                }, {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: media_sample,
                        scrub: true,
                        start: 'top bottom',
                        end: 'top 60%',
                        invalidateOnRefresh: true
                    }
                });
                gsap.fromTo(media_sample, {
                    opacity: 1,
                    y: 0
                }, {
                    opacity: 0,
                    y: -100,
                    ease: 'power1',
                    duration: 100,
                    scrollTrigger: {
                        trigger: media_sample,
                        scrub: true,
                        start: 'bottom 30%',
                        end: 'bottom top',
                        invalidateOnRefresh: true
                    }
                });
            });

            featured_project_descriptions.forEach((project_description) => {
                gsap.fromTo(project_description, {
                    opacity: 0,
                    y: 100
                }, {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: project_description,
                        scrub: true,
                        start: 'top bottom',
                        end: 'top 60%',
                        invalidateOnRefresh: true
                    }
                });
                gsap.fromTo(project_description, {
                    opacity: 1,
                    y: 0
                }, {
                    opacity: 0,
                    y: -100,
                    ease: 'power1',
                    duration: 100,
                    scrollTrigger: {
                        trigger: project_description,
                        scrub: true,
                        start: 'bottom 30%',
                        end: 'bottom top',
                        invalidateOnRefresh: true
                    }
                });
            });
        });

        screenMediaMatched.add('(max-width: 1440px)', () => {
            let featured_projects = gsap.utils.toArray('.project');

            featured_projects.forEach((project) => {
                gsap.fromTo(project, {
                    opacity: 0,
                    y: 100
                }, {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: project,
                        scrub: true,
                        start: 'top bottom',
                        end: 'top 60%',
                        invalidateOnRefresh: true
                    }
                });
                gsap.fromTo(project, {
                    opacity: 1,
                    y: 0
                }, {
                    opacity: 0,
                    y: -100,
                    ease: 'power1',
                    duration: 100,
                    scrollTrigger: {
                        trigger: project,
                        scrub: true,
                        start: 'bottom 30%',
                        end: 'bottom top',
                        invalidateOnRefresh: true
                    }
                });
            });
        });
        
        return () => {
            gcontext.revert();
            screenMediaMatched.revert();
        };
    }, []);

    return (
        <div className='projects'>
            <Header
                img_src='/assets/header-images/OsmanRana-FirPinecones.JPG'
                img_alt='Osman Rana - Fir Pinecones - INSTAGRAM: @ranagraphsfamily - SOURCE: https://unsplash.com/photos/tilt-shit-lens-photography-of-pine-cones-IRSyulBDNc0'
                heading='Projects'
                subheading='Available on GitHub'
            />
            <div className='projects-container'>
                <div className='featured-section' ref={featuredProjectsRef}>
                    <div className='project'>
                        <div className='project-container'>
                            <div className='project-media'>
                                <div className='media-container'>
                                    <figure className='sample-container mobile-sample'>
                                        <img
                                            className='project-sample'
                                            src={process.env.PUBLIC_URL + '/assets/project-samples/python-palette-extractor-sample/tsujin_bohboh-Holiday-Sample.PNG'}
                                            alt='Tsujiko / つじこ - Holiday - TWITTER: @tsujin_bohboh - SOURCE: https://www.pixiv.net/en/artworks/100516589'
                                        />
                                        <figcaption className='sample-caption'>
                                            <div className='icon-container'>
                                                <i className='icon fa-solid fa-seedling'></i>
                                            </div>
                                            <div className='link-container'>
                                                <a
                                                    className='sample-link'
                                                    href='https://www.pixiv.net/en/artworks/100516589'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Holiday
                                                </a>
                                                &nbsp;by&nbsp;
                                                <a
                                                    className='sample-link'
                                                    href='https://twitter.com/tsujin_bohboh'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Tsujiko / つじこ
                                                </a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <figure className='sample-container'>
                                        <img
                                            className='project-sample'
                                            src={process.env.PUBLIC_URL + '/assets/project-samples/python-palette-extractor-sample/Osman_Rana-FirPinecones-Sample.PNG'}
                                            alt='Osman Rana - Fir Pinecones - INSTAGRAM: @ranagraphsfamily - SOURCE: https://unsplash.com/photos/tilt-shit-lens-photography-of-pine-cones-IRSyulBDNc0'
                                        />
                                        <figcaption className='sample-caption'>
                                            <div className='icon-container'>
                                                <i className='icon fa-solid fa-seedling'></i>
                                            </div>
                                            <div className='link-container'>
                                                <a
                                                    className='sample-link'
                                                    href='https://unsplash.com/photos/tilt-shit-lens-photography-of-pine-cones-IRSyulBDNc0'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Fir Pinecones
                                                </a>
                                                &nbsp;by&nbsp;
                                                <a
                                                    className='sample-link'
                                                    href='https://www.instagram.com/ranagraph/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Osman Rana
                                                </a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <figure className='sample-container'>
                                        <img
                                            className='project-sample'
                                            src={process.env.PUBLIC_URL + '/assets/project-samples/python-palette-extractor-sample/Mumuxi-Ganyu_Genshin_Impact-Sample.PNG'}
                                            alt='Mumuxi / 木木夕 / 木木西 - Ganyu Genshin Impact - Pixiv: https://www.pixiv.net/en/users/57067483 - SOURCE: https://www.pixiv.net/en/artworks/93920392'
                                        />
                                        <figcaption className='sample-caption'>
                                            <div className='icon-container'>
                                                <i className='icon fa-solid fa-seedling'></i>
                                            </div>
                                            <div className='link-container'>
                                                <a
                                                    className='sample-link'
                                                    href='https://www.pixiv.net/en/artworks/93920392'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Ganyu Genshin Impact
                                                </a>
                                                &nbsp;by&nbsp;
                                                <a
                                                    className='sample-link'
                                                    href='https://www.pixiv.net/en/users/57067483'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Mumuxi / 木木夕 / 木木西
                                                </a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <figure className='sample-container'>
                                        <img
                                            className='project-sample'
                                            src={process.env.PUBLIC_URL + '/assets/project-samples/python-palette-extractor-sample/Craig_Adderley-LongPondAutumnRoad-Sample.PNG'}
                                            alt='Craig Adderley - Long Pond Autumn Road - INSTAGRAM: @throughcoatedglass - SOURCE: https://www.pexels.com/photo/concrete-road-between-trees-1563356/'
                                        />
                                        <figcaption className='sample-caption'>
                                            <div className='icon-container'>
                                                <i className='icon fa-solid fa-seedling'></i>
                                            </div>
                                            <div className='link-container'>
                                                <a
                                                    className='sample-link'
                                                    href='https://www.pexels.com/photo/concrete-road-between-trees-1563356/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Autumn Road
                                                </a>
                                                &nbsp;by&nbsp;
                                                <a
                                                    className='sample-link'
                                                    href='https://www.instagram.com/throughcoatedglass/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Craig Adderley
                                                </a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className='project-description'>
                                <div className='description-container'>
                                    <div className='desc-section'>
                                        <div className='title-container'>
                                            <div className='title'>Python Palette Extractor (PyPalEx)</div>
                                        </div>
                                        <div className='tech-list'>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>Python</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>NumPy</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>Git</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>GitHub</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>CI / CD</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>Doxygen</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='desc-section'>
                                        <div className='summary-container'>
                                            <p className='summary'>
                                                PyPalEx is a tool for extracting color palettes from images and generating a
                                                JSON format file with light and dark color themes. This tool is intended to
                                                be OS independent, for use by the tech community for developing their own custom
                                                theme managers or by artists who want to extract color palettes for their art
                                                from images, pictures or wallpapers they adore.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='desc-section'>
                                        <div className='project-links'>
                                            <div className='link-container'>
                                                <a
                                                    className='link'
                                                    href='https://github.com/AlTimofeyev/pypalex'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <div className='logo-container'>
                                                        <GitHubIcon className='logo' />
                                                    </div>
                                                    <span className='label'>
                                                        GitHub
                                                    </span>
                                                    <div className='icon-container'>
                                                        <i className='icon visible fa-regular fa-circle-right'></i>
                                                        <i className='icon reveal fa-solid fa-circle-right'></i>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className='link-container'>
                                                <a
                                                    className='link'
                                                    href='https://pypi.org/project/pypalex/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <div className='logo-container'>
                                                        <PyPIIcon className='logo' />
                                                    </div>
                                                    <span className='label'>
                                                        PyPI
                                                    </span>
                                                    <div className='icon-container'>
                                                        <i className='icon visible fa-regular fa-circle-right'></i>
                                                        <i className='icon reveal fa-solid fa-circle-right'></i>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className='link-container'>
                                                <a
                                                    className='link'
                                                    href='https://github.com/AlTimofeyev/pypalex/wiki/Archive-of-Palette-Examples'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <div className='logo-container'>
                                                        <ArchiveIcon className='logo' />
                                                    </div>
                                                    <span className='label'>
                                                        Gallery
                                                    </span>
                                                    <div className='icon-container'>
                                                        <i className='icon visible fa-regular fa-circle-right'></i>
                                                        <i className='icon reveal fa-solid fa-circle-right'></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='project-container'>
                            <div className='project-media'>
                                <div className='media-container'>
                                    <figure className='sample-container mobile-sample'>
                                        <Video
                                            vid_src='/assets/project-samples/portfolio-website-sample/Portfolio-2v-Sample.mov'
                                            vid_type='video/mp4'
                                        />
                                        <figcaption className='sample-caption'>
                                            <div className='icon-container'>
                                                <i className='icon fa-solid fa-seedling'></i>
                                            </div>
                                            <div className='link-container'>
                                                Portfolio v2.0
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className='project-description'>
                                <div className='description-container'>
                                    <div className='desc-section'>
                                        <div className='title-container'>
                                            <div className='title'>React Portfolio Website</div>
                                        </div>
                                        <div className='tech-list'>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>React</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>JavaScript</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>HTML</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>CSS</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>Git</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>GitHub</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>JSON</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='desc-section'>
                                        <div className='summary-container'>
                                            <p className='summary'>
                                                My portfolio website, developed to demonstrate my skillsets and past
                                                experiences while also offering a way for others to contact me about
                                                future opportunities. The Devlogs page of the website is mainly meant
                                                for me to keep a log of my past experiences and things I've learned.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='desc-section'>
                                        <div className='project-links'>
                                            <div className='link-container'>
                                                <a
                                                    className='link'
                                                    href='https://github.com/AlTimofeyev/portfolio'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <div className='logo-container'>
                                                        <GitHubIcon className='logo' />
                                                    </div>
                                                    <span className='label'>
                                                        GitHub
                                                    </span>
                                                    <div className='icon-container'>
                                                        <i className='icon visible fa-regular fa-circle-right'></i>
                                                        <i className='icon reveal fa-solid fa-circle-right'></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='project-container'>
                            <div className='project-media'>
                                <div className='media-container'>
                                    <figure className='sample-container mobile-sample'>
                                        <Video
                                            vid_src='/assets/project-samples/optimization-algorithm-visualizer-sample/ParticleSwarmOptimization-Sample.mov'
                                            vid_type='video/mp4'
                                        />
                                        <figcaption className='sample-caption'>
                                            <div className='icon-container'>
                                                <i className='icon fa-solid fa-seedling'></i>
                                            </div>
                                            <div className='link-container'>
                                                Particle Swarm Optimization
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <figure className='sample-container'>
                                        <Video
                                            vid_src='/assets/project-samples/optimization-algorithm-visualizer-sample/GeneticAlgorithm-Sample.mov'
                                            vid_type='video/mp4'
                                        />
                                        <figcaption className='sample-caption'>
                                            <div className='icon-container'>
                                                <i className='icon fa-solid fa-seedling'></i>
                                            </div>
                                            <div className='link-container'>
                                                Genetic Algorithm
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <figure className='sample-container'>
                                        <Video
                                            vid_src='/assets/project-samples/optimization-algorithm-visualizer-sample/FireflyOptimization-Sample.mov'
                                            vid_type='video/mp4'
                                        />
                                        <figcaption className='sample-caption'>
                                            <div className='icon-container'>
                                                <i className='icon fa-solid fa-seedling'></i>
                                            </div>
                                            <div className='link-container'>
                                                Firefly Swarm Optimization
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className='project-description'>
                                <div className='description-container'>
                                    <div className='desc-section'>
                                        <div className='title-container'>
                                            <div className='title'>Optimization Algorithm Visualizer</div>
                                        </div>
                                        <div className='tech-list'>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>Java</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>Processing</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>Git</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>GitHub</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='desc-section'>
                                        <div className='summary-container'>
                                            <p className='summary'>
                                                A simple visualizer application developed to assist in achieving a better
                                                understanding of how evolutionary and swarm optimization algorithms
                                                operate. This project was created for the purpose of demonstrating these
                                                algorithms in an educational environment to help with visual learning.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='desc-section'>
                                        <div className='project-links'>
                                            <div className='link-container'>
                                                <a
                                                    className='link'
                                                    href='https://github.com/AlTimofeyev/Optimization-Algorithm-Visualizer'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <div className='logo-container'>
                                                        <GitHubIcon className='logo' />
                                                    </div>
                                                    <span className='label'>
                                                        GitHub
                                                    </span>
                                                    <div className='icon-container'>
                                                        <i className='icon visible fa-regular fa-circle-right'></i>
                                                        <i className='icon reveal fa-solid fa-circle-right'></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='project-container'>
                            <div className='project-media'>
                                <div className='media-container'>
                                    <figure className='sample-container mobile-sample'>
                                        <img
                                            className='project-sample'
                                            src={process.env.PUBLIC_URL + '/assets/project-samples/custom-data-structures-sample/TemplatedDataStructures-Sample.png'}
                                            alt='Templated data structures library written in C++'
                                        />
                                        <figcaption className='sample-caption'>
                                            <div className='icon-container'>
                                                <i className='icon fa-solid fa-seedling'></i>
                                            </div>
                                            <div className='link-container'>
                                                Templated Binary Tree Data Structure
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className='project-description'>
                                <div className='description-container'>
                                    <div className='desc-section'>
                                        <div className='title-container'>
                                            <div className='title'>Templated Data Structures Library</div>
                                        </div>
                                        <div className='tech-list'>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>C / C++</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>Git</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>GitHub</span>
                                            </div>
                                            <div className='list-item'>
                                                <SkillBackground className='skill-background' />
                                                <span className='tech'>Doxygen</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='desc-section'>
                                        <div className='summary-container'>
                                            <p className='summary'>
                                                A templated C++ library of data structures that can accept any
                                                primitive data type or object.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='desc-section'>
                                        <div className='project-links'>
                                            <div className='link-container'>
                                                <a
                                                    className='link'
                                                    href='https://github.com/AlTimofeyev/DataStructures'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <div className='logo-container'>
                                                        <GitHubIcon className='logo' />
                                                    </div>
                                                    <span className='label'>
                                                        GitHub
                                                    </span>
                                                    <div className='icon-container'>
                                                        <i className='icon visible fa-regular fa-circle-right'></i>
                                                        <i className='icon reveal fa-solid fa-circle-right'></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='honorable-mentions-section' ref={mentionedProjectsRef}>
                    <div className='honorable-container'>
                        <div className='project-cards group-1'>
                            <CardItem
                                className='project-card-1'
                                url='https://github.com/AlTimofeyev/Machine-Learning-Visualization'
                                src='/assets/project-samples/multidimensional-pattern-discovery-sample/PatterDiscovery-Sample.png'
                                alt='Interactive Pattern Discovery in Multi-Dimensional Data'
                                label='C / C++ | GitHub | Agile (Scrum) | Machine Learning'
                                title='Interactive Pattern Discovery in Multi-Dimensional Data'
                            />
                            <CardItem
                                className='project-card-2'
                                url='https://github.com/AlTimofeyev/BenchmarkFunctionOptimization'
                                src='/assets/project-samples/benchmark-function-optimization-sample/BenchmarkOptimization-Sample.png'
                                alt='Benchmark Function Optimization'
                                label='C / C++ | GitHub | Doxygen | LaTex'
                                title='Benchmark Function Optimization'
                            />
                        </div>
                        <div className='project-cards group-2'>
                            <CardItem
                                className='project-card-3'
                                url='https://github.com/AlTimofeyev/SimpleCalculator'
                                src='/assets/project-samples/calculator-app-sample/Calculator-Sample.png'
                                alt='Calculator Application'
                                label='Java | GitHub'
                                title='Calculator Application'
                            />
                            <CardItem
                                className='project-card-4'
                                url='https://github.com/AlTimofeyev/CWUShell'
                                src='/assets/project-samples/cwu-shell-sample/CWUShell-Sample.png'
                                alt='Custom Shell with Four Personal Commands'
                                label='C / C++ | GitHub'
                                title='Custom Shell with Four Personal Commands'
                            />
                            <CardItem
                                className='project-card-5'
                                url='https://github.com/AlTimofeyev/Client-ServerAirfare'
                                src='/assets/project-samples/client-server-app-sample/Client_Server-Sample.png'
                                alt='Client-Server Airfare Application'
                                label='C / C++ | GitHub | Linux'
                                title='Client-Server Airfare Application'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects