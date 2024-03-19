import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { NavbarPageSelectionContext } from '../contexts/NavbarContext';
import { DevlogPostContext } from '../contexts/DevlogPostContext';
import Header from '../components/Header';
import DevlogPost from '../components/DevlogPost';
import { ReactComponent as GitHubIcon } from '../src-assets/social-icons/Social_Icon-GitHub.svg';
import { ReactComponent as PyPIIcon } from '../src-assets/social-icons/Social_Icon-PyPI.svg';
import './Devlogs.scss';

function Devlogs() {
    const [posts, setPosts] = useState([]);
    const [currentReadMorePost, setReadMorePost] = useState(null);
    const { pageSelected, setPageSelectionState } = useContext(NavbarPageSelectionContext);
    const { devlogPostReadMoreOpened, setdevlogPostReadMoreOpened } = useContext(DevlogPostContext);

    const handleReadMoreClick = (post) => {
        setdevlogPostReadMoreOpened(true);
        setReadMorePost(post);
    };

    // Run this once when the page is loaded/mounted.
    useLayoutEffect(() => {
        setPageSelectionState(1);   // Set this page as active in navbar.

        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant",
        });

        fetch(process.env.PUBLIC_URL + '/data/devlog-posts.json')
            .then(res => {
                if (!res.ok) {
                    console.log("Request for JSON file was not successful");
                    return;
                }

                const contentType = res.headers.get('content-type');

                if (contentType && contentType.indexOf('application/json') === -1) {
                    throw new Error("File for Devlogs does not exist");
                }

                return res.json();
            })
            .then((data) => {
                setPosts(data);
            })
            .catch(error => {
                console.log(error);     // Only when JSON file is completely empty or doesn't exist.
            });
    }, []);

    return (
        <div className='devlogs'>
            <Header
                img_src='/assets/header-images/ArnoSmit-CherryBlossoms.jpeg'
                img_alt='Arno Smit - Cherry Blossoms - TWITTER: @_entreprenerd - SOURCE: https://unsplash.com/photos/low-angle-photo-of-cherry-blossoms-tree-sKJ7zSylUao'
                heading='Devlogs'
                subheading='Development Archives'
            />
            <div className='devlogs-container'>
                <div className='posts'>
                    {posts.map((post, index) => (
                        <div className='post' key={index}>
                            <div className='post-publication-date'>
                                <div className='publication-date-container'>
                                    <span className='day'>{post.day}</span>
                                    <span className='month'>{post.month}</span>
                                    <span className='year'>{post.year}</span>
                                </div>
                            </div>
                            <div className='post-body'>
                                <div className='post-header'>
                                    <h2 className='post-project'>{post.project}</h2>
                                    <h1 className='post-subject'>{post.subject}</h1>
                                    <div className='post-publication-date-mobile'>
                                        <span className='publication-date'>{post.month} {post.day}, {post.year}</span>
                                    </div>
                                </div>
                                <div className='post-summary'>
                                    <div className='post-summary-container'>
                                        <p className='summary'>{post.summary}</p>
                                    </div>
                                </div>
                                {(post.content || post.githubLink || post.pypiLink) &&
                                    <div className='post-buttons'>
                                        {post.content &&
                                            <div className='read-more-btn-container'>
                                                <button className='read-more' onClick={() => handleReadMoreClick(post)}>
                                                    Read More
                                                </button>
                                            </div>
                                        }
                                        {(post.githubLink || post.pypiLink) &&
                                            <div className='project-buttons-container'>
                                                {post.githubLink &&
                                                    <div className='project-btn'>
                                                        <a
                                                            className='btn-link'
                                                            href={post.githubLink}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <div className='btn-logo-container'>
                                                                <GitHubIcon className='btn-logo' />
                                                            </div>
                                                        </a>
                                                    </div>
                                                }
                                                {post.pypiLink &&
                                                    <div className='project-btn'>
                                                        <a
                                                            className='btn-link'
                                                            href={post.pypiLink}
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
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {devlogPostReadMoreOpened &&
                <DevlogPost post={currentReadMorePost} />
            }
        </div>
    )
}

export default Devlogs



{/* < div className = 'devlogs-container' >
    <div className='posts'>
        {posts.map((post, index) => (
            <div className='post' key={index}>
                <div className='post-publication-date'>
                    <div className='publication-date-container'>
                        <span className='day'>{post.day}</span>
                        <span className='month'>{post.month}</span>
                        <span className='year'>{post.year}</span>
                    </div>
                </div>
                <div className='post-body'>
                    <div className='post-header'>
                        <h2 className='post-project'>{post.project}</h2>
                        <h1 className='post-subject'>{post.subject}</h1>
                        <div className='post-publication-date-mobile'>
                            <span className='publication-date'>{post.month} {post.day}, {post.year}</span>
                        </div>
                    </div>
                    {post.content &&
                        <div className='post-content'>
                            {post.content.map((section, index) => (
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
                    }
                </div>
            </div>
        ))}
    </div>
</div> */}