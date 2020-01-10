import React from "react";

function Tweet(props) {
    return (
        <div>
            {props.tweet.title}
        </div>
    );
}

export default Tweet;