import React from 'react';

function PostDetailPage({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticProps(context) {
  let { params } = context;

  const detailedPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const response = await detailedPost.json();
  console.log(response, 'response');
  return {
    props: {
      post: response,
    },
  };
}

export async function getStaticPaths(context) {
  const featuredPost = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const resp = await featuredPost.json();
  const totalPosts = resp.slice(0, 6);
  const ids = totalPosts.map((post) => post.id);
  const pathWithParams = ids.map((id) => ({
    params: { postId: id.toString() },
  }));
  console.log(pathWithParams, 'path with params');

  return {
    paths: pathWithParams,
    fallback: false,
  };
}
export default PostDetailPage;
