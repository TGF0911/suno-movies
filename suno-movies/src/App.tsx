import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import { Navbar } from './components/Navbar';
import { CatalogProvider } from './contexts/CatalogContext';
import { Catalog } from './components/Catalog';
import { Latest } from './components/Latest';

function App() {
  return (
    <Router>
      <CatalogProvider>
      <GlobalStyle />
      <Navbar />
      <Latest />
      <Catalog />
      </CatalogProvider>
    </Router>
  );
}

export default App;
