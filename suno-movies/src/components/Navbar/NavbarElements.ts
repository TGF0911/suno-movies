import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { GoSearch } from 'react-icons/go'
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export const Nav = styled.nav`
  padding: 0.5rem calc((100vw - 1400px)/ 2 ) ;
  width: 100vw;
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

  @media screen and (max-width: 830px){
   display: none;
  }

`

export const Menu = styled.div`
     margin-top: 1rem;
     transition: .4s;
    display: ${props => props.theme.isBarsOpen ? 'block' : 'none'};
    width: ${props => props.theme.isBarsOpen && '100%'};
    height: ${props => props.theme.isBarsOpen && '10rem'};
    left: ${props => props.theme.isBarsOpen && '0'};
    box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
    align-items: center;
    z-index: 999;
    transition: 0.3s ease-in ease;
    position: absolute;
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

  :hover{
    border-bottom: 2px solid #FE3189;
  }

`

export const LinkScroll = styled(ScrollLink)`
  color: #fff;
  margin: 2rem 3rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  cursor: pointer;
  :hover{
    border-bottom: 2px solid #FE3189;
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
export const CloseIcon = styled(IoClose)`
  display: ${props => props.theme.isSearchBarOpen ? 'flex' : 'none'};
  font-size: 3rem;
  color: #fff;

  @media screen and (max-width : 830px){
    display: flex;
  }
`

export const SearchIcon = styled(GoSearch)`
  font-size: 1.6rem;
  color: #fff;

  @media screen and (max-width: 830px){
    font-size: 2rem;
  }
`