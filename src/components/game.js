import React from 'react';

import Form from './form';
import Count from './guess-count';
import List from './guess-list';

import './game.css';

export default function Game(props) {
  return (
    <section className="game">
     <h2 id="feedback">Make your Guess!</h2>
      <Form />
      <Count />
      <List />

    </section>
  )
}