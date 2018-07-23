import React from 'react';

import Navigation from './navigation';

import './header.css';

export default function Header(props) {
  return (
    <header>
      <Navigation />
      <h1>HOT or COLD</h1>
    </header>
  );
}