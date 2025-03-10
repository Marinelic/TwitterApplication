import React, {useState, useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { db }  from './firebase';
import { collection, onSnapshot } from "firebase/firestore";
import FlipMove from 'react-flip-move';


function Feed() {

   const [posts, setPosts] = useState([]);

  useEffect(() => {
  const postsCollection = collection(db, "posts");

   const unsubscribe = onSnapshot(postsCollection, (snapshot) => {
    const newPosts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log("Fetched posts:", newPosts);
    setPosts(newPosts);
  });

  return () => unsubscribe();
}, []);

console.log("Posts data:", posts);

  return (
    <div className='feed'>
      
        <div className="feed__header">
        <h2>Home</h2>
      </div>

        <TweetBox />

        <FlipMove>
          {posts.map((post) => (
          <Post  
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))} 
        </FlipMove>
    </div>
  )
}

export default Feed
