import React, { useState } from 'react';
import './TweetBox.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { db }  from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  /* const [posts, setPosts] = useState([]); */

   const sendTweet = async (e) => {
    e.preventDefault();

      const tweetData = {
        displayName: "Marisol",
        username: "marichiu",
        verified: true,
        text: tweetMessage,
        avatar:
          "https://pbs.twimg.com/profile_images/476170088857751552/eE4zFTPF_400x400.jpeg",
    };

    if (tweetImage.trim() !== "") {
      tweetData.image = tweetImage;
    }

     await addDoc(collection(db, "posts"), tweetData);

        setTweetMessage("");
        setTweetImage("");
        
  };


  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
            <Avatar src="https://pbs.twimg.com/profile_images/476170088857751552/eE4zFTPF_400x400.jpeg" />

            <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type='text'></input>
        </div>

         <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type='text'></input>

            <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
}


export default TweetBox;
