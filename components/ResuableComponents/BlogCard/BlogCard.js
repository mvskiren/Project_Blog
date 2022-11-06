import Classes from './BlogCard.module.scss';

import React from 'react';

function BlogCard({
  tags = ['Optimization', 'Design'], //default parameters
  imageUrl = '',
  title,
  description,
  readTime,
  authorName = '',
}) {
  return (
    <>
      <div className={Classes.post}>
        {' '}
        <div className={Classes.post__image}>{imageUrl}</div>
        <div className={Classes.post__content}>
          <div className={Classes.post__content__tags}>
            {tags.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </div>
          <div className={Classes.post__content__heading}>{title}</div>
          <div className={Classes.post__content__description}>
            {description}
          </div>
          <div className={Classes.post__content__readTime}>{readTime}</div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
