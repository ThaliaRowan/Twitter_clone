import React, {forwardRef} from "react";
import "./posts.css";
import {Avatar} from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Posts = forwardRef(({displayName, username, verified, text, image, avatar}, ref) => {
    return (
        <div className="post">
            <div className="postAvatar">
                <Avatar src={avatar}/> 
            </div>
            <div className="postBody">
                <div className="postHeader">
                    <div className="headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="headerSpecial">
                                {verified && <CheckCircleIcon className="postBadge" fontSize="small" />} @{username}
                            </span> 
                        </h3>
                    </div>
                    <div className="postHeaderDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" /> 
                <div className="postFoot">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />

                </div>
            </div>

        </div>
    );
});

export default Posts;