import React from "react";

function Tweet(props) {
    return (
        <div>
            {props.tweet.body}
        </div>
    );
}

export default Tweet;