import React from 'react';
import Classes from './Filter.module.scss';
function Filter() {
  return (
    <div>
      <select className={Classes.filter} name="cars" id="cars">
        <option value="volvo">Popularity</option>
        <option value="saab">Recent</option>
        <option value="mercedes">Trending</option>
        <option value="audi">Random</option>
      </select>
    </div>
  );
}

export default Filter;
