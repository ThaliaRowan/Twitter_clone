import React from "react";
import "./feed.css";
import TweetBox from "./TweetBox";
import Posts from "./Posts";


function Feed() {
    return(
         <div className="feed">
             <div className="feed_header">
             <h2>Home</h2>
             </div>
             <TweetBox />
             <Posts />
             <Posts />
             <Posts />
             <Posts />
             <Posts />
             <Posts />
             <Posts />
             <Posts />
             <Posts />
         </div>
    ); 

}

export default Feed;