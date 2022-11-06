import React from 'react';
import Classes from './PopularTags.module.scss';
import { defaultPopularTags } from '../../Utilities/const';

function PopularTags() {
  return (
    <div className={Classes.popularTagsContainer}>
      <div className={Classes.popularTagsContainer__heading}>Popular Tags</div>
      <ul className={Classes.popularTagsContainer__cards}>
        {defaultPopularTags.map((tagName) => (
          <li className={Classes.popularTagsContainer__cards__card}>
            <span>{tagName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularTags;
