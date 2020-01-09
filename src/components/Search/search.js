import React, {useState} from "react";

function Search(props) {

    const [ search, setSearch ] = useState('')

    const fetchTweets = function($event) {
        $event.preventDefault();
        props.fetchTweets(search);
    }
    return (
        <div>
            <form onSubmit={fetchTweets}>
                <input name="search" placeholder="Enter Symbols" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Search;