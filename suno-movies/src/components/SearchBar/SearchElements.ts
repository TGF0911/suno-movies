import styled from "styled-components";
import { AiFillStar } from 'react-icons/ai'
import {Link} from 'react-router-dom'

export const SearcContainer = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #212125;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
  /* background: rgba(24, 24, 28, 0.95); */
  transition: .4s;
  display: flex;
  flex-direction: column;
`

export const SearchText = styled.p`
  margin-bottom: 2rem;
  color: #FE3189;
  font-size: 1.4rem;
  font-weight: 300;
`

export const Search = styled.form`
  background-color: #212125;
  padding: 2rem 6rem;
`

export const SearchInput = styled.input`
  margin: 1rem 5rem;
  
  width: calc(100% - 30rem);
  height: 5rem;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid  #FE3189;

  outline: none;
  color: #EAEAEA;
  font-weight: 500;
  font-size: 2rem;
  line-height: 4rem;
`
export const SearchList = styled.div`
  padding: 0 8rem ;
  width: 100%;
  background-color: #212125;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;

  /* @media screen and (max-width: 400px){
    display: flex;
    flex-direction: column;
    margin: 2rem;
  } */
`

export const MovieCard = styled.div`
  padding: 1rem;
  margin: 1rem 4rem;
  width: 24rem;
  height: 14rem;
  background-color: #252529;
  /* background-color: #EAEAEA; */
  border: 1px solid #313136; 
  border-radius: 4px;
  display: flex;
`

export const MovieImage = styled.img`
  width: 10rem;
  height: 12rem;
`

export const MovieInfos = styled.div`
  background-color: #252529;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`

export const MovieTitle = styled(Link)`
  width: 12rem;
  background-color: #252529;
  color: #EAEAEA;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 3.3rem;
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  :hover{
    text-decoration: underline;
  }
`

export const MovieGenres = styled.p`
  background-color: #252529;
  color: #FE3189;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.2rem;
  text-overflow: ellipsis;
`

export const RatingContainer = styled.div`
  background-color: #252529;
  display: flex;
  align-items: center;
`

export const RatingStar = styled(AiFillStar)`
  background-color: #252529;
  font-size: 1rem;
  color: #FE3189;
`

export const MovieRating = styled.p`
  background-color: #252529;
  color: #EAEAEA;
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`