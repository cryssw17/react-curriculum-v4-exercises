import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api.js';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);

  function handleClick() {
    (async () => {
      const fetchedPost = await getSinglePost(1);
      setPost(fetchedPost);
    })();
  }

  console.log(post);

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleClick}>
        Get post
      </button>
      <div className="content">
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
      </div>
    </div>
  );
}
