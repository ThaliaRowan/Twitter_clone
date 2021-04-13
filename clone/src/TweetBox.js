import React, {useState} from "react";
import "./tweetbox.css";
import {Avatar, Button} from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const [tweet, setTweet] = useState("");
    const [tweetImage, setTweetImage] = useState("")

    const submitTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Thalia",
            username: "thaliaaaa",
            verified: true,
            text: tweet,
            image: tweetImage,
            avatar: "https://i.pinimg.com/originals/ff/a9/d2/ffa9d2dd2cd0f773e9b7ef59671116f0.jpg"
        });

        setTweet("");
        setTweetImage("");
    }

    return(
        <div className="tweetBox">
            <form>
                <div className="tweetbox_Input">
                <Avatar src="https://i.pinimg.com/originals/ff/a9/d2/ffa9d2dd2cd0f773e9b7ef59671116f0.jpg" />
                <input onChange={(e) => setTweet(e.target.value)} value={tweet} placeholder="What's happening?" type="text" />
            
                </div>
                <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} className="tweetImage" placeholder="Optional: Enter image URL" type="text" />
                <Button type="submit" onClick={submitTweet} className="tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;