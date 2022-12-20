import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <div id="wrapper">
        <div id="quote-box">
          <div id="text">
            <p></p>
          </div>          
          <div id="author"></div>
          <div className="button">
            <div className="media">
            <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote"></a>
            <a href="" id="tmblr-quote"></a>
            </div>
            <button id="new-quote">New quote</button>
          </div>
        </div>
        <div className="footer">
          <p>by <a href="https://github.com/sepidsoroush">SepidSoroush</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
