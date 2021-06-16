import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  /* background-color: #212125; */
  padding: 0.5rem calc((100vw - 1400px)/ 2 ) ;
  width: 100vw;
  height: 90px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;


  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 830px){
  }
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

  &.active{
    border-bottom: 2px solid #FE3189;
  }

  @media screen and (max-width: 830px){
    display: none;
  }

`

export const NavLink = styled(Link)`
  color: #fff;
  margin: 2rem 3rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  cursor: pointer;

  .search{
    display: ${props => props.theme.isOpen ? 'block' : 'none'};
  }


  @media screen and (max-width: 400px){
    position: absolute;
    top: 10px;
    left: 25px;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  font-size: 2rem;
  color: #fff;

  @media screen and (max-width : 830px){
    display: flex;
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
  font-size: 1.6rem;
  color: #fff;

  @media screen and (max-width: 830px){
    font-size: 2rem;
  }
`