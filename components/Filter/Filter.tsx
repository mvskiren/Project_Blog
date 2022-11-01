import React from 'react';
import Classes from './Filter.module.scss';
function Filter() {
  return (
    <div>
      <select className={Classes.filter} name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}

export default Filter;
