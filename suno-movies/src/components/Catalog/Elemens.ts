import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

interface CatalogListProps {
  isList : boolean;
}

export const CatalogHeader = styled.div`
  margin-top: 10rem;
   height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
`;

export const CatalogDot = styled.div`
  margin-left: 22rem;
  margin-right: 1rem;
  width: 0.7rem;
  height: 0.7rem;
  background-color: #FE3189;
  border-radius: 50%;
`

export const CatalogTitle = styled.h2`
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;

  span{
    font-weight: 600;
  }
`

export const CatalogContainer = styled.div`
  margin-left: 12rem;
  width: calc(100vw - 400px);
`

export const SelectGroup = styled.div`
  margin-top: 2rem;
  padding: 2rem 10rem;
  display: 'flex';
  justify-content: space-between;
  align-items: center;
   
`

export const CatalogList = styled.ul<CatalogListProps>`
  margin: 0 4rem;
  padding: 3rem 4rem;
  list-style: none;
  // aqui Muda
  
`

export const ButtonConatiner = styled.div`
  margin: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.div`
  width: 200px;
  height: 50px;
  list-style: none;
  border-radius: 4px;
  filter: drop-shadow(0px 0px 6px #FF0772);
  background-color: #FE3189;
  color: #EAEAEA;
  line-height: 22px;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover{
    opacity: 0.8;
  }
`