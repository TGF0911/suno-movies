import { Nav, NavLink, SearchIcon, NavLogo, NavLinkContainer, Bars } from './NavbarElements'

interface NavBar{
  toggle : () => void;
}

export const Navbar = ({toggle} : NavBar) => {
  //Colocar o link para o catálogo (Scroll na página)


  return (
    <>
      <Nav>
        <Bars />
        <NavLogo>Suno<span>Movies</span></NavLogo>
        <NavLinkContainer>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/">Catálogo</NavLink> 
        </NavLinkContainer>
         <SearchIcon onClick={toggle} />
         
      </Nav>
    </>
  )
}