import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'

export const Nav = styled.nav`
  /* background-color: #212125; */
  height: 90px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
`;

export const NavLogo = styled.h1`
  padding: 1rem 3rem;
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;

  span{
    font-weight: 700;
    color: #FF559E ;
  }
`
export const NavLinkContainer = styled.div`
  display: flex;
  margin: 2rem 3rem;
  align-items: center;

`

export const NavLink = styled(Link)`
  color: #fff;
  margin: 2rem 3rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  cursor: pointer;

  @media screen and (max-width: 400px){
    position: absolute;
    top: 10px;
    left: 25px;
  }
`

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
`

export const SearchIcon = styled(GoSearch)`
  margin-left: 1rem;
  font-size: 1.4rem;
  color: #fff;
`