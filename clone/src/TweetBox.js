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
            avatar: "https://cdn-us.anidb.net/images/main/4318.png"
        });

        setTweet("");
        setTweetImage("");
    }

    return(
        <div className="tweetBox">
            <form>
                <div className="tweetbox_Input">
                <Avatar src="https://p.kindpng.com/picc/s/685-6851196_person-icon-grey-hd-png-download.png" />
                <input onChange={(e) => setTweet(e.target.value)} value={tweet} placeholder="What's happening?" type="text" />
            
                </div>
                <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} className="tweetImage" placeholder="Optional: Enter image URL" type="text" />
                <Button type="submit" onClick={submitTweet} className="tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;