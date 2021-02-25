import React from "react";
import "./widget.css";
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";


function Widget() {
    return(
        <div className="widgets">
          <div className="widgetInput">
            <SearchIcon className="widgetSearch"/>
            <input placeholder=" Search Twitter" type="text" />
          </div>
          <div className="widgetContainer">
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={"933354946111705097"} />

            <TwitterShareButton 
                 url={'https://facebook.com/saurabhnemade'}
                 options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
            />
          </div>
        </div>
    )
};

export default Widget;