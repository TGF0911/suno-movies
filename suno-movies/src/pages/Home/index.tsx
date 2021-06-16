import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Catalog } from '../../components/Catalog';
import { Latest } from '../../components/Latest';
import { Footer } from '../../components/Footer';
import { SearchBar } from '../../components/SearchBar';

export default function Home() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const [isBarsOpen, setIsBarsOpen] = useState(false)

  function toggle() {
    setIsSearchBarOpen(!isSearchBarOpen)
  }

  function toggleBars() {
    setIsBarsOpen(!isBarsOpen)
  }

  return (
    <div>
      <Navbar toggle={toggle} toggleBar={toggleBars} isOpen={isBarsOpen} />
      <SearchBar toggle={toggle} isOpen={isSearchBarOpen} />
        <Latest />
        <Catalog />
        <Footer />
    </div>
  )
}
