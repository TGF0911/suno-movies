
import {
  Nav,
  NavLink,
  SearchIcon,
  NavLogo,
  NavLinkContainer,
  Bars,
  CloseIcon,
  LinkScroll
} from './NavbarElements'

interface NavBar {
  toggle: () => void;
  toggleBar: () => void;
  isOpen: boolean;
}

export const Navbar = ({ toggle, isOpen, toggleBar }: NavBar) => {
  //Colocar o link para o catálogo (Scroll na página)
  return (
    <>
      <Nav>
        {isOpen ? <CloseIcon onClick={toggleBar} /> : <Bars onClick={toggleBar}/>}
        <NavLogo>Suno<span>Movies</span></NavLogo>
        <NavLinkContainer theme={{ isOpen }}>
          <NavLink to="/">Início</NavLink>
          <LinkScroll smooth={true} to='catalog'>Catálogo</LinkScroll>
        </NavLinkContainer>
        <SearchIcon onClick={toggle} />
      </Nav>
    </>
  )
}