import React , { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter , faTumblr} from '@fortawesome/free-brands-svg-icons'
import './App.css';
const data = require("./data.json");

//declare variables
function App() {
  let text = "";
  let writer = '';
  let randomIndex;
  let randomColor;
  let randomQuote;
  let randomAuthor;
  text = data.quotes[0].quote;
  writer = data.quotes[0].author;
  const [quote , setQuote] = useState(text);
  const [author , setAuthor] = useState(writer);
  const [ color , setColor] = useState("black");

    function GetQuote() {
      //change quote & author
      randomIndex = Math.floor(Math.random()*(data.quotes.length));
      randomQuote = data.quotes[randomIndex].quote;
      randomAuthor = data.quotes[randomIndex].author;
      setQuote(randomQuote);
      setAuthor(randomAuthor);

      // change color
      randomColor = "#"+(Math.floor(Math.random()*16777215).toString(16));
      setColor(randomColor);
    }

  return (
    <div className="App" style={{backgroundColor : `${color}`}}>
      <div id="wrapper" >
        <div id="quote-box">
          <div className="text-container" style={{color : `${color}`}}>
            <span><FontAwesomeIcon icon={faQuoteLeft} className="quote-left" /></span><span id="text" >{quote}</span>
          </div>          
          <div className="author-container" style={{color : `${color}`}}>
            <span>- </span><span id="author">{author}</span>
          </div>
          <div className="button-container">
            <div className='media'>
              <a href="https://twitter.com/intent/tweet" target="_blank" className='button' id="tweet-quote" style={{backgroundColor : `${color}`}}><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.tumblr.com/" target="_blank" id="tmblr-quote" className='button' style={{backgroundColor : `${color}`}}><FontAwesomeIcon icon={faTumblr} /></a>
            </div>
            <button id="new-quote" className='button' style={{backgroundColor : `${color}`}} onClick={()=> GetQuote()} >New quote</button>
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
