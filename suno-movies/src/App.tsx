import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import { Navbar } from './components/Navbar';
import { ListProvider } from './contexts/CatalogContext';
import { MovieList } from './components/MovieList';

function App() {
  return (
    <Router>
      <ListProvider>
      <GlobalStyle />
      <Navbar />
      <MovieList />
      </ListProvider>
    </Router>
  );
}

export default App;
