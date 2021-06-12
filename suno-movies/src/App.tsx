import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import { Navbar } from './components/Navbar';
import { CatalogProvider } from './contexts/CatalogContext';
import { Catalog } from './components/Catalog';

function App() {
  return (
    <Router>
      <CatalogProvider>
      <GlobalStyle />
      <Navbar />
      <Catalog />
      </CatalogProvider>
    </Router>
  );
}

export default App;
