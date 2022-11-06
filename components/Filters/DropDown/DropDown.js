import React from 'react';
import Classes from './DropDown.module.scss';
function DropDown() {
  return (
    <div>
      <select className={Classes.dropDown} name="cars" id="cars">
        <option value="volvo">Popularity</option>
        <option value="saab">Recent</option>
        <option value="mercedes">Trending</option>
        <option value="audi">Random</option>
      </select>
    </div>
  );
}

export default DropDown;
