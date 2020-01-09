import React, { useState } from 'react';
import './App.css';
import Tweets from './components/Tweets/tweets';
import Search from './components/Search/search';
// import Navbar from './components/Navbar/navbar';


function App() {

  let [state, setState] = useState({tweets: [], search: ''});

  const fetchTweets = function (searchText) {
    fetch(`https://api.stocktwits.com/api/2/search/symbols.json?q=${searchText}`)
    .then(res => res.json())
    .then(results => setState({tweets: results.results, search: searchText}));
  }

  return (
    <div>
      <Search fetchTweets={(searchText) => fetchTweets(searchText)} />
      <Tweets tweets={state.tweets} search={state.search}/>
    </div>
  );
}

export default App;
