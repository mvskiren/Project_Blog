import React, { useState, useEffect } from 'react';
import Classes from './Header.module.scss';

// import MynterioLogo from "../../Svgs/MynterioLogo";
// import { mynterioLogo } from "../../Assets/Images";

function Header() {
  const [darkTheme, setDarkTheme] = useState(false); //

  useEffect(() => {
    document.body.style.backgroundColor = darkTheme ? '#1f2028' : 'white';
  }, [darkTheme]);

  return (
    <div className={Classes.header}>
      <div className={Classes.header__logo}>
        {/* <MynterioLogo height={'150'} width={'200'} /> */}
      </div>
      <nav tabIndex="0">
        <ul className={Classes.header__menu}>
          <li onClick={() => window.location.replace('/home')}>Home</li>
          <li onClick={() => window.location.replace('/#services')}>Blogs</li>
          <li onClick={() => window.location.replace('/#aboutUs')}>About</li>
          <li onClick={() => window.location.replace('/#testimonials')}>
            Subscribe
          </li>
          <li onClick={() => window.location.replace('/#contactForm')}>
            Trending
          </li>
          <button onClick={() => window.location.replace('/#contactForm')}>
            New Post
          </button>
          <button
            onClick={() => {
              setDarkTheme((prev) => !prev);
              localStorage.setItem('ThemePreference', !darkTheme);
            }}
          >
            Dark/Light Mode
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
