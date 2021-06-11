import React from 'react'
import { Nav, NavLink, SearchIcon, NavLogo, NavLinkContainer } from './NavbarElements'

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo>Suno<span>Movies</span></NavLogo>
        <NavLinkContainer>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/">Catálogo</NavLink>
          <SearchIcon/>
        </NavLinkContainer>
      </Nav>
    </>
  )
}