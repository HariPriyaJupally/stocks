import React, {useState} from "react";

function Search(props) {

    const [ search, setSearch ] = useState('')

    const fetchTweets = function($event) {
        $event.preventDefault();
        props.fetchTweets($event.target.value);
        setSearch($event.target.value);
    }
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
              <a class="navbar-brand">Stock-ing</a>
                 <input class="form-control mr-sm-2" type="search" placeholder="Enter tweet here" value={search} onChange={(e) => fetchTweets(e)} aria-label="Search"/>
               </nav>
        </div>
    );
}

export default Search;