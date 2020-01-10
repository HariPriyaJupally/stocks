import React, { useState } from 'react';
import './App.css';
import Tweets from './components/Tweets/Tweets';
import Search from './components/Search/Search';

import 'bootstrap/dist/css/bootstrap.min.css';

let interval = null;

function App() {

  let [state, setState] = useState({tweets: [], search: ''});


  const fetchTweets = function (searchText) {
    if (interval) {
      clearInterval(interval);
    }
    if (searchText.trim() === '') {
      setState({tweets: [], search: searchText})
      return;
    }
    interval = setInterval(() => {
      fetch(`http://localhost:4000/${searchText}.json`)
      .then(res => res.json())
      .then(results => setState({tweets: results.messages, search: searchText}));
    }, 2000);
  }
  
  

  return (
    <div>
      <Search fetchTweets={(searchText) => fetchTweets(searchText)} />
      <Tweets tweets={state.tweets} search={state.search}/>
    </div>
  );
}

export default App;
