
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
  isSearchBarOpen : boolean;
}

export const Navbar = ({ toggle, isOpen, toggleBar, isSearchBarOpen }: NavBar) => {
  return (
    <>
      <Nav>
        {isOpen ? <CloseIcon onClick={toggleBar} /> : <Bars onClick={toggleBar}/>}
        <NavLogo>Suno<span>Movies</span></NavLogo>
        <NavLinkContainer>
          <NavLink to="/">Início</NavLink>
          <LinkScroll smooth={true} to='catalog'>Catálogo</LinkScroll>
        </NavLinkContainer>
        {isSearchBarOpen ? <CloseIcon onClick={toggle} theme={{isSearchBarOpen}} /> : <SearchIcon onClick={toggle}/>}
      </Nav>
    </>
  )
}