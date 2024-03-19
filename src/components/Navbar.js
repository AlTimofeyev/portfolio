import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarPageSelectionContext } from '../contexts/NavbarContext';
import './Navbar.scss';


function Navbar() {
    const [mobileMenuOpen, setMobileMenu] = useState(false);
    const { pageSelected, setPageSelectionState } = useContext(NavbarPageSelectionContext);

    const handleMenuIconClick = () => setMobileMenu(!mobileMenuOpen);
    const closeMobileMenu = () => setMobileMenu(false);

    // const handleNavbarLinkClick = (index) => {
    //     setMobileMenu(false);
    //     setPageSelectionState(index);
    // };

    return (
        <div className='navbar'>
            <div className={mobileMenuOpen ? 'navbar-container active-navbar' : 'navbar-container'}>
                <div className='navbar-logo'>
                    <Link className='navbar-logo-link' onClick={closeMobileMenu} to='/'>
                        <div className='navbar-logo-container'>
                            <img className='portfolio-logo' src={process.env.PUBLIC_URL + '/portfolioLogo1024-Light.PNG'} alt='Logo' />
                        </div>
                        <div className='navbar-logo-name-container'>
                            <span className='navbar-name'>AL TIMOFEYEV</span>
                        </div>
                    </Link>
                </div>
                <div className='menu-icon'>
                    <div className='menu-icon-container' onClick={handleMenuIconClick}>
                        <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <div className={mobileMenuOpen ? 'navbar-menu active-menu' : 'navbar-menu'}>
                    <div className='navbar-menu-container'>
                        <div className='navbar-menu-links'>
                            <Link className={pageSelected[0] ? 'navbar-link active-link' : 'navbar-link'} onClick={closeMobileMenu} to='/'>Home</Link>
                            <Link className={pageSelected[1] ? 'navbar-link active-link' : 'navbar-link'} onClick={closeMobileMenu} to='/devlogs'>Devlogs</Link>
                            <Link className={pageSelected[2] ? 'navbar-link active-link' : 'navbar-link'} onClick={closeMobileMenu} to='/projects'>Projects</Link>
                            <Link className={pageSelected[3] ? 'navbar-link active-link' : 'navbar-link'} onClick={closeMobileMenu} to='/contact'>Contact</Link>
                        </div>
                        <div className='navbar-menu-buttons'>
                            <span className='navbar-button'>
                                <a
                                    className='navbar-github'
                                    href='https://github.com/AlTimofeyev/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    GitHub
                                </a>
                            </span>
                            <span className='navbar-button'>
                                <a
                                    className='navbar-linkedin'
                                    href='https://www.linkedin.com/in/al-timofeyev-235542129/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    LinkedIn
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

// Local Storage Resource Info Used:
// https://blog.logrocket.com/using-localstorage-react-hooks/
// https://www.geeksforgeeks.org/how-to-share-state-across-react-components-with-context/

// Figure out how to implement browser history in next iteration of website.
// Currently, the user using the browser back/forward buttons breaks navbar navigation.
// A janky solution to this for now could be having each page set the active navbar link
// in the useLayoutEffect component on page load.