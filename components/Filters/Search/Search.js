import React from 'react';
import Classes from './Search.module.scss';
import SearchIcon from '../../../Utilities/Icons/SearchIcon';

function Search({ setIsOpen }) {
  return (
    <>
      <div className={Classes.search}>
        <input
          className={Classes.inputSearch}
          type="text"
          name="search"
          id="modal_search"
          placeholder="Search posts,tags,authors..."
          readOnly
          onFocus={() => setIsOpen()}
        />
        <div className={Classes.search__icon}>
          <SearchIcon />
        </div>
      </div>
    </>
  );
}

export default Search;
