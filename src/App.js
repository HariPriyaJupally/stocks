import React, { useState } from 'react';
import './App.css';
import Tweets from './components/Tweets/Tweets';
import Search from './components/Search/Search';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  let [state, setState] = useState({tweets: [], search: ''});

  const fetchTweets = function (searchText) {
    fetch(`https://api.stocktwits.com/api/2/streams/symbol/${searchText}.json`)
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
