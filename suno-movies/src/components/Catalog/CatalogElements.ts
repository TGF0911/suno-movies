import styled from 'styled-components';

interface CatalogListProps{
  isList: boolean;
}

export const CatalogDiv = styled.div`
  margin-top: 3rem;
`

export const CatalogHeader = styled.div`
  margin-top: 1rem;
  width: 100vw;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid  #FE3189;

  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 900px){
    justify-content: center;
  }
`

export const CatalogDot = styled.div`
  margin-left: 20rem;
  margin-right: 1rem;
  width: 14px;
  height: 14px;
  background-color: #FE3189;
  border-radius: 50%;

  @media screen and (max-width: 1300px){
    margin-left: 14rem;
  }

  @media screen and (max-width: 800px){
    margin-left: 0;
  }
`

export const CatalogTitle = styled.h2`
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;

  span{
    font-weight: 600;
  }
`
//Mudar margin - 800px
export const CatalogContainer = styled.div`
  margin: 2rem 12rem;
  width: calc(100vw - 250px);
  display: block;
  justify-content: center;

  @media screen and (max-width: 1200px){
    margin: 4rem 6rem;
  }

  @media screen and (max-width: 800px){
    margin: 4rem 2rem;
  }
`

export const SelectGroup = styled.div`
    margin-top: 2rem;
    padding: 4rem 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    @media screen and (max-width: 1200px){
      padding-left: 2rem;
    .list-type {
      display: none;
    }
  }
`
export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1200px){
      margin-left: 0;
  }
`

export const CatalogList = styled.ul`
  margin: 5rem calc((100vw - 1500px) /2);
  list-style: none;

  display: grid;
  grid-gap: 2fr;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 1300px){
    margin: 0 3rem;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 800px){
    margin: 0;
  }
`

export const ButtonConatiner = styled.div`
  margin: 6rem 0;
  margin-right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.div`
  width: 150px;
  height: 50px;
  list-style: none;
  border-radius: 4px;
  filter: drop-shadow(0px 0px 6px #FF0772);
  background-color: #FE3189;
  color: #EAEAEA;
  line-height: 22px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover{
    opacity: 0.8;
  }

  @media screen and (max-width: 1000px){
    width: 12rem;
    height: 4rem;
    font-size: 1.2rem;
  }
`