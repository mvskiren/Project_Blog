import Classes from './BlogCard.module.scss';

import React from 'react';

const genericDescription = `Lorem ipsum dolor sit amet consecoptimizationur adipisicing elit.
Ducimus aperiam itaque assumenda. Natus omnis tenetur, repellendus,
at officiis accusantium eos, et cupiditate quod labore rem expedita
consequatur beatae id doloremque!`;

function BlogCard({
  tags = ['Optimization', 'Design'],
  imageUrl = '',
  title,
  description = genericDescription,
  readTime,
  authorName,
}) {
  return (
    <>
      <div className={Classes.post}>
        {' '}
        <div className={Classes.post__image}>{imageUrl}</div>
        <div className={Classes.post__content}>
          <div className={Classes.post__content__tags}>
            {tags.map((item) => (
              <li>{item}</li>
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
