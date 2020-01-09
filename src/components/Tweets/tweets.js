import React from "react";

import Tweet from "../Tweet/tweet";

function Tweets(props) {
    return (
        <div>
            {
                props.search.trim() !== '' ?
                    <div> 
                        Total Tweets found for the {props.search} symbol are {props.tweets.length}
                    </div>
                    : ''
            }
            {
                props.tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id}/>)
            }
        </div>
    );
}

export default Tweets;