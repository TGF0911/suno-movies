import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
//http://localhost:3000/movie/details/297762
import { CatalogProvider } from './contexts/CatalogContext';

import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <CatalogProvider>
      <GlobalStyle />
      <Route path='/home' component={Home} />
      <Route path='/movie/details/:id' component={Details}/>
      </CatalogProvider>
    </Router>
  );
}

export default App;
