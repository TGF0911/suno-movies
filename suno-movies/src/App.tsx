import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import { CatalogProvider } from './contexts/CatalogContext';
import Details from './pages/Details';
import Home from './pages/Home';
import { SearchBar } from './components/SearchBar';



function App() {
  return (
    <Router>
      <CatalogProvider>
      <GlobalStyle />
      <Route path='/' exact component={Home} />
      <Route path='/movie/details/:id' component={Details}/>
      </CatalogProvider>
    </Router>
  );
}

export default App;
