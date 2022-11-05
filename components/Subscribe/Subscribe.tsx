import React from 'react';
import Classes from './Subscribe.module.scss';
function Subscribe() {
  return (
    <div className={Classes.subscribeContainer}>
      <div className={Classes.subscribeContainer__heading}>Stay in Loop</div>
      <div className={Classes.subscribeContainer__subHeading}>
        Subscribe to our newsletter for all the latest updates:
      </div>
      <div className={Classes.subscribeContainer__inputFields}>
        <div className={Classes.subscribeContainer__inputFields__name}>
          <input type="text" name="" id="" placeholder="Name" />
        </div>
        <div className={Classes.subscribeContainer__inputFields__email}>
          <input type="email" name="" id="" placeholder="Email" />
        </div>
        <div className={Classes.subscribeContainer__inputFields__button}>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
