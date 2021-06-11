import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
