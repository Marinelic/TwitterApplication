import React, {useState, useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { db }  from './firebase';
import { collection, onSnapshot } from "firebase/firestore";

function Feed() {

   const [posts, setPosts] = useState([]);

  useEffect(() => {
  const postsCollection = collection(db, "posts");

  const unsubscribe = onSnapshot(postsCollection, (snapshot) => {
    setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  });

  return () => unsubscribe();
}, []);


  return (
    <div className='feed'>
      
        {/* Header */}
        <div className="feed__header">
        <h2>Home</h2>
      </div>

        {/* TweetBox */}
        <TweetBox />

        {/* Post */}
        {posts.map(post => (
          <Post  
            dispayName={post.dispayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
        
        
    </div>
  )
}

export default Feed
