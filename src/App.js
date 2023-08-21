import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  const [quotes, setQuotes] = useState([])

  const fetchQuoteData = () => {
    fetch("https://type.fit/api/quotes")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setQuotes(data)
      })
  }

  useEffect(() => {
    fetchQuoteData()
  }, [])

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#16a085");
  const [textColor, setTextColor] = useState("#16a085");


  const getRandomQuote = () => {
    const newIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(newIndex);
  };

  const changeColors = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
    setTextColor(randomColor);
  };

  const currentQuote = quotes[quoteIndex];

  const backgroundColorStyle = { backgroundColor: backgroundColor };
  const colorStyle = { color: textColor };


  return (
    <div className="App" style={backgroundColorStyle}>
      <div className="wrapper">
        <div id="quote-box">
          {currentQuote && <>
            <div className="quote-text">
              <i className="fa fa-quote-left" style={colorStyle}></i>
              <span style={colorStyle} id="text"> {currentQuote.text}</span>
            </div>
            <div className="quote-author">
              <span style={colorStyle} id="author">- {currentQuote.author}</span>
            </div></>}
          <div className="buttons">
            <a
              className="button"
              id="tweet-quote"
              href="https://twitter.com/intent/tweet"
              title="Tweet this quote!"
              target="_blank"
              rel="noopener noreferrer"
              style={backgroundColorStyle}
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <button type="button"
              className="button"
              id="new-quote"
              onClick={() => { getRandomQuote(); changeColors(); }}
              style={backgroundColorStyle}>New quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;