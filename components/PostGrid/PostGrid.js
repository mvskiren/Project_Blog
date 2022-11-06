import React, { useState, useEffect, useRef } from 'react';
import Classes from './PostGrid.module.scss';
import Filter from '../Filter/Filter';
import Modal from '../ResuableComponents/Modal/Modal';
import SearchIcon from '../../Utilities/Icons/SearchIcon';
import BlogCard from '../ResuableComponents/BlogCard/BlogCard';
import { sampleResponse } from '../../Utilities/const';

function PostGrid() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <div className={Classes.postGrid}>
        <div className={Classes.postGrid__filters}>
          <div
            style={{
              marginRight: 'auto',
              fontSize: '1.5rem',
              color: 'gray',
              fontWeight: 500,
            }}
          >
            BlogPosts
          </div>
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
            <div className={Classes.postGrid__filters__search__icon}>
              <SearchIcon />
            </div>
          </div>
          <div className={Classes.postGrid__filters__category}>
            <Filter />{' '}
          </div>
        </div>
        <div className={Classes.postGrid__posts}>
          {sampleResponse.map((item) => (
            <BlogCard
              title={item.title}
              description={item.description}
              authorName={item.authorName}
              readTime={item.readTime}
              tags={item.tags}
              imageUrl={item.imageUrl}
              key={item.title}
            />
          ))}
        </div>
      </div>
      {/****** Modal *******/}
      <div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            <input
              className={Classes.search_modal}
              type="text"
              name="modal_search"
              id="modal_search"
              placeholder="Search posts,tags,authors..."
              autofocus
              autoFocus
            />
          </div>
        </Modal>
      </div>
    </React.Fragment>
  );
}

export default PostGrid;
