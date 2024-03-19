import React, { useContext, useEffect, useRef } from 'react';
import { DevlogPostContext } from '../contexts/DevlogPostContext';
import { ReactComponent as GitHubIcon } from '../src-assets/social-icons/Social_Icon-GitHub.svg';
import { ReactComponent as PyPIIcon } from '../src-assets/social-icons/Social_Icon-PyPI.svg';
import './DevlogPost.scss';

function DevlogPost(prop) {
    const currentPost = prop.post;
    const overlayRef = useRef();
    const { devlogPostReadMoreOpened, setdevlogPostReadMoreOpened } = useContext(DevlogPostContext);

    const handleClosingReadMorePost = () => {
        console.log("Handling closing devlog post")
        overlayRef.current.classList.remove('overlay-opened');
        document.body.classList.remove('suspend-body-scrolling');

        // Wait 0.25 seconds before setting the Read More Post to false.
        setTimeout(() => {
            setdevlogPostReadMoreOpened(false);
        }, 250);
    }

    useEffect(() => {
        document.body.classList.add('suspend-body-scrolling');

        // There needs to be a slight delay before this class is added, otherwise it'll activate instantly.
        setTimeout(() => {
            overlayRef.current.classList.add('overlay-opened');
        }, 1);

        const handleKeyPress = (event) => {
            if (event.key === "Escape") {
                handleClosingReadMorePost();
            }
        }


        // console.log("Inside Devlog POST");
        // console.log(currentPost.year, currentPost.month, currentPost.day);
        // console.log("LEAVING Devlog POST");


        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);   // Cleanup to prevent memory leak.
        };

    }, []);

    return (
        <div className='devlog-post-overlay' ref={overlayRef}>
            <div className='devlog-post'>
                <div className='devlog-post-container'>
                    <div className='close-button'>
                        <div className='close-button-container'>
                            <button className='close-btn' onClick={handleClosingReadMorePost}>
                                <i className="fa-solid fa-xmark close-icon"></i>
                            </button>
                        </div>
                    </div>
                    <div className='post'>
                        <div className='post-body'>
                            <div className='post-header'>
                                <h2 className='post-project'>{currentPost.project}</h2>
                                <h1 className='post-subject'>{currentPost.subject}</h1>
                                <div className='post-subheading'>
                                    <div className='post-publication-date'>
                                        <span className='publication-date'>{currentPost.month} {currentPost.day}, {currentPost.year}</span>
                                    </div>
                                    {(currentPost.githubLink || currentPost.pypiLink) &&
                                        <span className='spacer'> | </span>
                                    }
                                    {(currentPost.githubLink || currentPost.pypiLink) &&
                                        <div className='project-buttons-container'>
                                            {currentPost.githubLink &&
                                                <div className='project-btn'>
                                                    <a
                                                        className='btn-link'
                                                        href={currentPost.githubLink}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        <div className='btn-logo-container'>
                                                            <GitHubIcon className='btn-logo' />
                                                        </div>
                                                    </a>
                                                </div>
                                            }
                                            {currentPost.pypiLink &&
                                                <div className='project-btn'>
                                                    <a
                                                        className='btn-link'
                                                        href={currentPost.pypiLink}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        <div className='btn-logo-container'>
                                                            <PyPIIcon className='btn-logo' />
                                                        </div>
                                                    </a>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='post-content'>
                                {currentPost.content.map((section, index) => (
                                    <div className='content-section' key={index}>
                                        {section.title &&
                                            <h4 className='section-title'>{section.title}</h4>
                                        }
                                        <div className='section-body'>
                                            {section.desc.map((paragraph, index) => (
                                                <div className='paragraph-container' key={index}>
                                                    <p className='paragraph'>{paragraph.paragraphBlock}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevlogPost