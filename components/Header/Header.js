import React from 'react';
import Classes from './Header.module.scss';

// import MynterioLogo from "../../Svgs/MynterioLogo";
// import { mynterioLogo } from "../../Assets/Images";

function Header() {
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
          <button onClick={() => window.location.replace('/#contactForm')}>
            Toggle
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
