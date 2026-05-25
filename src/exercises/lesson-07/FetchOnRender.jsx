import './Lesson07Styles.css';
import { getPosts } from './api.js';
import { useState, useEffect } from 'react';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    })();
  }, []);

  console.log(posts);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
