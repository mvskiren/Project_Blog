import React, { useState, useEffect } from 'react';
import Classes from './PostGrid.module.scss';
import Filter from '../Filter/Filter';
import Modal from '../ResuableComponents/Modal/Modal';

function PostGrid() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <div className={Classes.postGrid}>
        <div className={Classes.postGrid__filters}>
          <div className={Classes.postGrid__filters__search}>
            <input
              className={Classes.postGrid__search}
              type="text"
              name="search"
              id="modal_search"
              placeholder="Search posts,tags,authors..."
              readOnly
              onFocus={() => setIsOpen(true)}
            />
          </div>
          <div className={Classes.postGrid__filters__category}>
            <Filter />{' '}
          </div>
        </div>
        <div className={Classes.postGrid__posts}>
          <div className={Classes.postGrid__posts__post}>Grid1</div>
          <div className={Classes.postGrid__posts__post}>Grid1</div>
          <div className={Classes.postGrid__posts__post}>Grid1</div>
          <div className={Classes.postGrid__posts__post}>Grid1</div>
          <div className={Classes.postGrid__posts__post}>Grid1</div>
          <div className={Classes.postGrid__posts__post}>Grid1</div>
        </div>
      </div>
      {/****** Modal *******/}
      <div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            <input
              className={Classes.search_modal}
              autofocus
              type="text"
              name="modal_search"
              id="modal_search"
              placeholder="Search posts,tags,authors..."
            />
          </div>
        </Modal>
      </div>
    </React.Fragment>
  );
}

export default PostGrid;
