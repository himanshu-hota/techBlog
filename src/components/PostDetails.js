import React from 'react';
import { getPostData } from '../firebase';
import { useLoaderData } from 'react-router';
const PostDetails = () => {

  const post = useLoaderData();

  console.log(post);

  

  return (
    <div className='post-detail'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export const loader = ({params})  => {
  const data = getPostData(params.postId);
  return data;
}

export default PostDetails;