import { Navbar } from '../../components/Navbar';
import { Catalog } from '../../components/Catalog';
import { Latest } from '../../components/Latest';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { SearchBar } from '../../components/SearchBar';


export default function Home() {
  const [isSearcBarOpen, setIsSearchBarOpen] = useState(false)

  function toggle(){
    setIsSearchBarOpen(!isSearcBarOpen)
  }

  return (
    <div>
      <Navbar toggle={toggle}/>
      <SearchBar toggle={toggle} isOpen={isSearcBarOpen}/> 
      <Latest />
      <Catalog  />
      <Footer />
    </div>
  )
}
