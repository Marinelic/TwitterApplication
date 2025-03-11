import React from 'react';
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";


function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <SearchIcon className='widgets__searchIcon' />

            <input placeholder='Search Twitter' type='text' />
        </div>

        <div className='widgets__widgetContainer'>
            <h2>What's happening</h2>

            <TwitterTweetEmbed tweetId={"1685396372575707136"} />

            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="KygoMusic"
              options={{ height: 400 }}
        />

       {/*  <TwitterShareButton
          url={"https://twitter.com/KygoMusic/status/1880300451582935271"}
        /> */}

        <TwitterTweetEmbed tweetId={"1880300451582935271"} />

        </div>
    </div>
  )
}

export default Widgets;
