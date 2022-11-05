import React, { useState, useEffect, useRef } from 'react';
import Classes from './PostGrid.module.scss';
import Filter from '../Filter/Filter';
import Modal from '../ResuableComponents/Modal/Modal';
import SearchIcon from '../../Utilities/Icons/SearchIcon';

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
          <div className={Classes.postGrid__posts__post}>
            {' '}
            <div className={Classes.postGrid__posts__post__image}></div>
            <div className={Classes.postGrid__posts__post__content}>
              <div className={Classes.postGrid__posts__post__content__tags}>
                <li>optimization</li> <li>design</li>
              </div>
              <div className={Classes.postGrid__posts__post__content__heading}>
                Optimizing Web optimzation
              </div>
              <div
                className={Classes.postGrid__posts__post__content__description}
              >
                Lorem ipsum dolor sit amet consecoptimizationur adipisicing
                elit. Ducimus aperiam itaque assumenda. Natus omnis tenetur,
                repellendus, at officiis accusantium eos, et cupiditate quod
                labore rem expedita consequatur beatae id doloremque!
              </div>
              <div
                className={Classes.postGrid__posts__post__content__readTime}
              ></div>
            </div>
          </div>
          <div className={Classes.postGrid__posts__post}>
            {' '}
            <div className={Classes.postGrid__posts__post__image}></div>
            <div className={Classes.postGrid__posts__post__content}>
              <div className={Classes.postGrid__posts__post__content__tags}>
                <li>optimization</li> <li>design</li>
              </div>
              <div className={Classes.postGrid__posts__post__content__heading}>
                Optimizing Web optimzation
              </div>
              <div
                className={Classes.postGrid__posts__post__content__description}
              >
                Lorem ipsum dolor sit amet consecoptimizationur adipisicing
                elit. Ducimus aperiam itaque assumenda. Natus omnis tenetur,
                repellendus, at officiis accusantium eos, et cupiditate quod
                labore rem expedita consequatur beatae id doloremque!
              </div>
              <div
                className={Classes.postGrid__posts__post__content__readTime}
              ></div>
            </div>
          </div>
          <div className={Classes.postGrid__posts__post}>
            {' '}
            <div className={Classes.postGrid__posts__post__image}></div>
            <div className={Classes.postGrid__posts__post__content}>
              <div className={Classes.postGrid__posts__post__content__tags}>
                <li>optimization</li> <li>design</li>
              </div>
              <div className={Classes.postGrid__posts__post__content__heading}>
                Optimizing Web optimzation
              </div>
              <div
                className={Classes.postGrid__posts__post__content__description}
              >
                Lorem ipsum dolor sit amet consecoptimizationur adipisicing
                elit. Ducimus aperiam itaque assumenda. Natus omnis tenetur,
                repellendus, at officiis accusantium eos, et cupiditate quod
                labore rem expedita consequatur beatae id doloremque!
              </div>
              <div
                className={Classes.postGrid__posts__post__content__readTime}
              ></div>
            </div>
          </div>
          <div className={Classes.postGrid__posts__post}>
            {' '}
            <div className={Classes.postGrid__posts__post__image}></div>
            <div className={Classes.postGrid__posts__post__content}>
              <div className={Classes.postGrid__posts__post__content__tags}>
                <li>optimization</li> <li>design</li>
              </div>
              <div className={Classes.postGrid__posts__post__content__heading}>
                Optimizing Web optimzation
              </div>
              <div
                className={Classes.postGrid__posts__post__content__description}
              >
                Lorem ipsum dolor sit amet consecoptimizationur adipisicing
                elit. Ducimus aperiam itaque assumenda. Natus omnis tenetur,
                repellendus, at officiis accusantium eos, et cupiditate quod
                labore rem expedita consequatur beatae id doloremque!
              </div>
              <div
                className={Classes.postGrid__posts__post__content__readTime}
              ></div>
            </div>
          </div>
          <div className={Classes.postGrid__posts__post}>
            {' '}
            <div className={Classes.postGrid__posts__post__image}></div>
            <div className={Classes.postGrid__posts__post__content}>
              <div className={Classes.postGrid__posts__post__content__tags}>
                <li>optimization</li> <li>design</li>
              </div>
              <div className={Classes.postGrid__posts__post__content__heading}>
                Optimizing Web optimzation
              </div>
              <div
                className={Classes.postGrid__posts__post__content__description}
              >
                Lorem ipsum dolor sit amet consecoptimizationur adipisicing
                elit. Ducimus aperiam itaque assumenda. Natus omnis tenetur,
                repellendus, at officiis accusantium eos, et cupiditate quod
                labore rem expedita consequatur beatae id doloremque!
              </div>
              <div
                className={Classes.postGrid__posts__post__content__readTime}
              ></div>
            </div>
          </div>
          <div className={Classes.postGrid__posts__post}>
            {' '}
            <div className={Classes.postGrid__posts__post__image}></div>
            <div className={Classes.postGrid__posts__post__content}>
              <div className={Classes.postGrid__posts__post__content__tags}>
                <li>optimization</li> <li>design</li>
              </div>
              <div className={Classes.postGrid__posts__post__content__heading}>
                Optimizing Web optimzation
              </div>
              <div
                className={Classes.postGrid__posts__post__content__description}
              >
                Lorem ipsum dolor sit amet consecoptimizationur adipisicing
                elit. Ducimus aperiam itaque assumenda. Natus omnis tenetur,
                repellendus, at officiis accusantium eos, et cupiditate quod
                labore rem expedita consequatur beatae id doloremque!
              </div>
              <div
                className={Classes.postGrid__posts__post__content__readTime}
              ></div>
            </div>
          </div>
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
            />
          </div>
        </Modal>
      </div>
    </React.Fragment>
  );
}

export default PostGrid;
