import React from 'react';
import Classes from './HeroBlog.module.scss';

function HeroBlog() {
  return (
    <div>
      <div className={Classes.heroBlog__container}>
        <div className={Classes.heroBlog__container__image}></div>
        <div className={Classes.heroBlog__container__content}>Hello </div>
      </div>
    </div>
  );
}
export default HeroBlog;

{
  /* <div className={Classes.bg_right}>
<div className={Classes.circle1}></div>
<div className={Classes.circle2}></div>
<div className={Classes.circle3}></div>
</div> */
}
