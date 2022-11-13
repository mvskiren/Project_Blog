import React, { useState, useEffect, useRef } from 'react';
import Classes from './PostGrid.module.scss';
import DropDown from '../Filters/DropDown/DropDown';
import Modal from '../ResuableComponents/Modal/Modal';
import SearchIcon from '../../Utilities/Icons/SearchIcon';
import BlogCard from '../ResuableComponents/BlogCard/BlogCard';
import Search from '../Filters/Search/Search';
import { sampleResponse } from '../../Utilities/const';
import Link from 'next/link';

function PostGrid(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <div className={Classes.postGrid}>
        <div className={Classes.postGrid__filters}>
          <div className={Classes.postGrid__filters__sectionTitle}>
            BlogPosts
          </div>
          <Search setIsOpen={toggleModal} />
          <div className={Classes.postGrid__filters__category}>
            <DropDown />{' '}
          </div>
        </div>
        <div className={Classes.postGrid__posts}>
          {props.posts.map((item) => (
            <BlogCard
              title={item.title}
              description={item.body}
              authorName={item.authorName}
              readTime={item.readTime}
              tags={item.tags}
              imageUrl={item.imageUrl}
              key={item.title}
              id={item.id}
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
