import React , { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter , faTumblr} from '@fortawesome/free-brands-svg-icons'


import './App.css';
const data = require("./data.json");
function App() {
  let quote = "";
  let author = '';
  let randomIndex;
  let randomColor;
  let randomQuote;
  let randomAuthor;
  quote = data.quotes[0].quote;
  author = data.quotes[0].author;

    function GetQuote() {
      //chnage quote
      randomIndex = Math.floor(Math.random()*(data.quotes.length));
      randomQuote = data.quotes[randomIndex].quote;
      randomAuthor = data.quotes[randomIndex].author;
      const [quote , setQuote] = useState(quote);
      const [author , setAuthor] = useState(author);
      
      // change color
      randomColor = "#"+(Math.floor(Math.random()*16777215).toString(16));
    }

  return (
    <div className="App">
      <div id="wrapper">
        <div id="quote-box">
          <div className="text-container" style={{color : `${randomColor}`}}>
            <span><FontAwesomeIcon icon={faQuoteLeft} className="quote-left" /></span><span id="text" >{quote}</span>
          </div>          
          <div className="author-container" style={{color : `${randomColor}`}}>
            <span>- </span><span id="author">{author}</span>
          </div>
          <div className="button-container">
            <div className='media'>
              <a href="https://twitter.com/intent/tweet" target="_blank" className='button' id="tweet-quote" style={{backgroundColor : `${randomColor}`}}><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="" target="_blank" id="tmblr-quote" className='button' style={{backgroundColor : `${randomColor}`}}><FontAwesomeIcon icon={faTumblr} /></a>
            </div>
            <button id="new-quote" className='button' style={{backgroundColor : `${randomColor}`}} onClick={()=> setQuote(randomQuote)} >New quote</button>
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
