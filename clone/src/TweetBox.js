import React from "react";
import "./tweetbox.css";
import {Avatar, Button} from "@material-ui/core"

function TweetBox() {
    return(
        <div className="tweetBox">
            <form>
                <div className="tweetbox_Input">
                <Avatar src="https://p.kindpng.com/picc/s/685-6851196_person-icon-grey-hd-png-download.png" />
                <input placeholder="What's happening?" type="text" />
            
                </div>
                <input className="tweetImage" placeholder="Optional: Enter image URL" type="text" />
                <Button className="tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;