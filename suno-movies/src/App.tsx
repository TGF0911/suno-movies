import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import { Navbar } from './components/Navbar';
import { CatalogProvider } from './contexts/CatalogContext';
import { Catalog } from './components/Catalog';
import { Latest } from './components/Latest';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <CatalogProvider>
      <GlobalStyle />
      {/* <Navbar />
      <Latest />
      <Catalog /> */}
      <Route path='/movie/details/:id' component={Details}/>
      </CatalogProvider>
    </Router>
  );
}

export default App;
