import React from 'react';

import './form.css';

export default function Form(props) {
  return (
    <form>
      <input type="text" className="userGuess" id="userGuess" maxLength="3" placeholder="Enter your Guess" required/>
      <input type="submit" id="guessButton" className="guessButton" value="Guess"/>
    </form>
  )
}