import { SearchBar } from '../SearchBar'
import { Nav, NavLink, SearchIcon, NavLogo, NavLinkContainer, Bars } from './NavbarElements'

export const Navbar = () => {
  //Colocar o link para o catálogo (Scroll na página)
  function search(){ //Fazer isso funcionar
    return <SearchBar />
  }

  return (
    <>
      <Nav>
        <Bars />
        <NavLogo>Suno<span>Movies</span></NavLogo>
        <NavLinkContainer>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/">Catálogo</NavLink> 
        </NavLinkContainer>
          <SearchIcon onClick={search} />
      </Nav>
    </>
  )
}