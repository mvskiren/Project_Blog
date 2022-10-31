import React from 'react';
import Classes from './PopularTags.module.scss';

function PopularTags() {
  return (
    <div className={Classes.popularTagsContainer}>
      <div className={Classes.popularTagsContainer__heading}>Popular Tags</div>
      <ul className={Classes.popularTagsContainer__cards}>
        <li className={Classes.popularTagsContainer__cards__card}>
          <span>System Design</span>
        </li>
        <li className={Classes.popularTagsContainer__cards__card}>
          <span>Front End</span>
        </li>
        <li className={Classes.popularTagsContainer__cards__card}>
          <span>Back End</span>
        </li>
        <li className={Classes.popularTagsContainer__cards__card}>
          <span>Performance</span>
        </li>
        <li className={Classes.popularTagsContainer__cards__card}>
          <span>Databases</span>
        </li>
        <li className={Classes.popularTagsContainer__cards__card}>
          <span>Design Patterns</span>
        </li>
        <li className={Classes.popularTagsContainer__cards__card}>
          <span>React</span>
        </li>
      </ul>
    </div>
  );
}

export default PopularTags;
