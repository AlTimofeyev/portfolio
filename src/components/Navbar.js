import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EButton } from './EButton';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []); // So that Button doesn't show up every time you refresh page.

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            AL TIMOFEYEV <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <a 
              className='nav-links-mobile' 
              onClick={closeMobileMenu}
              href='https://github.com/AlTimofeyev/'
              target='_blank'
              rel='noopener noreferrer'
              >
                GITHUB
              </a>
            </li>
          </ul>
          {button && <EButton url='https://github.com/AlTimofeyev/' buttonStyle='btn--outline'>GITHUB</EButton>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;