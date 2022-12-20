import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter , faTumblr} from '@fortawesome/free-brands-svg-icons'


import './App.css';

function App() {

  return (
    <div className="App">
      <div id="wrapper">
        <div id="quote-box">
          <div className="text-container">
            <span><FontAwesomeIcon icon={faQuoteLeft} className="quote-left" /></span><span id="text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</span>
          </div>          
          <div className="author-container">
            <span>- </span><span id="author">Lorem Ipsum</span>
          </div>
          <div className="button-container">
            <div className='media'>
              <a href="https://twitter.com/intent/tweet" target="_blank" className='button' id="tweet-quote"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="" target="_blank" id="tmblr-quote" className='button'><FontAwesomeIcon icon={faTumblr} /></a>
            </div>
            <button id="new-quote" className='button'>New quote</button>
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
