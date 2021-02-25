import React from "react";
import "./posts.css";
import {Avatar} from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Posts({displayName, username, verified, text, image, avatar}){
    return (
        <div className="post">
            <div className="postAvatar">
                <Avatar src="https://pyxis.nymag.com/v1/imgs/6c0/570/056961772f9239c7ad26e784b020e410ae-beyonce.rsquare.w1200.jpg"/> 
            </div>
            <div className="postBody">
                <div className="postHeader">
                    <div className="headerText">
                        <h3>
                            Beyonce{" "}
                            <span className="headerSpecial">
                                <CheckCircleIcon className="postBadge" fontSize="small" /> @beyonce
                            </span> 
                        </h3>
                    </div>
                    <div className="postHeaderDescription">
                        <p>I love using REACT!</p>
                    </div>
                </div>
                <img src="https://cdn.shopify.com/s/files/1/0848/8898/files/beyonce-dance_large.gif?v=1484659922" alt="" /> 
                <div className="postFoot">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />

                </div>
            </div>

        </div>
    );
};

export default Posts;