import React, {useState} from "react";

function Search(props) {

    const [ search, setSearch ] = useState('')

    const fetchTweets = function($event) {
        $event.preventDefault();
        props.fetchTweets(search);
    }
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
              <a class="navbar-brand">Stock-ing</a>
               <form class="form-inline" onSubmit={fetchTweets}>
                 <input class="form-control mr-sm-2" type="search" placeholder="Enter tweet here" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
               </form>
               </nav>
        </div>
    );
}

export default Search;