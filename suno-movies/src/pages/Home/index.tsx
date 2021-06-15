import { Navbar } from '../../components/Navbar';
import { Catalog } from '../../components/Catalog';
import { Latest } from '../../components/Latest';
import { Footer } from '../../components/Footer';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Latest />
      <Catalog  />
      <Footer />
    </div>
  )
}
