import React, { useState } from 'react';
import './TweetBox.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { db }  from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const [posts, setPosts] = useState([]);

   const sendTweet = async (e) => {
    e.preventDefault();

      const tweetData = {
        displayName: "Kygo",
        username: "KygoMusic",
        verified: true,
        text: tweetMessage,
        avatar:
          "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
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
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />

            <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type='text'></input>
        </div>

         <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type='text'></input>

            <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
}


export default TweetBox;
