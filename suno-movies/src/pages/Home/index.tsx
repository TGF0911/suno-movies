import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Catalog } from '../../components/Catalog';
import { Latest } from '../../components/Latest';
import { Footer } from '../../components/Footer';
import { SearchBar } from '../../components/SearchBar';
import { LinkScroll, Menu, NavLink } from '../../components/Navbar/NavbarElements';

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
      <Navbar toggle={toggle} toggleBar={toggleBars} isOpen={isBarsOpen} isSearchBarOpen={isSearchBarOpen}/>
      <SearchBar toggle={toggle} isOpen={isSearchBarOpen} />
      <Menu theme={{ isBarsOpen }}>
        <NavLink to="/">Início</NavLink>
        <LinkScroll smooth={true} to='catalog'>Catálogo</LinkScroll>
      </Menu>
      <Latest />
      <Catalog />
      <Footer />
    </div>
  )
}
