import { SearchBar } from '../SearchBar'
import { Nav, NavLink, SearchIcon, NavLogo, NavLinkContainer } from './NavbarElements'

export const Navbar = () => {

  function search(){
    return <SearchBar />
  }

  return (
    <>
      <Nav>
        <NavLogo>Suno<span>Movies</span></NavLogo>
        <NavLinkContainer>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/">Catálogo</NavLink>
          <SearchIcon onClick={search} />
        </NavLinkContainer>
      </Nav>
    </>
  )
}