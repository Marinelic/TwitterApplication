/* import { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublishIcon from "@mui/icons-material/Publish";


const Post = ({ text, username }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);
  const [retweets, setRetweets] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleComment = () => {
    setComments(comments + 1);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  const handleRetweet = () => {
    setRetweets(retweets + 1);
  };


   return (
    <div className="post border p-4 rounded-lg shadow-md">
      <h3 className="font-bold">@{username}</h3>
      <p>{text}</p>
      <div className="post__footer flex justify-between mt-2 text-gray-500">
        <button onClick={handleComment} className="flex items-center space-x-1">
          <ChatBubbleOutlineIcon fontSize="small" />
          <span>{comments}</span>
        </button>
        <button onClick={handleRetweet} className="flex items-center space-x-1">
          <RepeatIcon fontSize="small" />
          <span>{retweets}</span>
        </button>
        <button onClick={handleLike} className="flex items-center space-x-1 text-red-500">
          {liked ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
          <span>{likes}</span>
        </button>
        <button onClick={handleShare} className="flex items-center space-x-1">
          <PublishIcon fontSize="small" />
          <span>{shares}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
 */
 


import React, { forwardRef } from 'react';
import { useState } from "react";
import './Post.css';
import Avatar from '@mui/material/Avatar';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;