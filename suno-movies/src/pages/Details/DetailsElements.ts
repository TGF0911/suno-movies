import styled from "styled-components";
import { AiFillStar } from 'react-icons/ai'
import {Link} from 'react-router-dom'

export const DetailsContainer = styled.div`
  margin: 5rem 22rem;
`

export const MovieDetails = styled.div`
  margin: 6rem 0;
  display: flex;
  justify-content: space-evenly;
`

export const MovieImage = styled.img`
  width: 26rem;
  height: 30rem;
`

export const MovieInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`

export const MovieInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MovieTitle = styled.h2`
  color: #EAEAEA;
  font-size: 3.4rem;
  font-weight: 700;`

export const MovieGenre = styled.p`
  color: #FE3189;
  font-size: 1.4rem;
  font-weight: 300;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RatingStar = styled(AiFillStar)`
  font-size: 2rem;
  color: #FE3189;
`

export const MovieRating = styled.p`
   color: #EAEAEA;
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`

export const DetailTitle = styled.h4`
    margin-top: 3rem;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 600;
`

export const MovieDescription = styled.p`
  margin-top: 30px;
  color: #9F9FA0;
  width: 100%;
  height: 5rem;
  font-size: 1.1rem;
  font-weight: 300;
  text-overflow: ellipsis;
`

export const TrailerContainer = styled.div`
  margin: 5rem 2rem,;
  h4{
    color: #EAEAEA;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.2rem;
    margin-bottom: 1.2rem;
  }
  hr{
    color: #FE3189;
  }
  .trailer{
    margin-top: 3rem;
    width: 62rem;
    height: 34rem;
  }
`

export const ButtonContainer = styled.div`
  margin: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BackButton = styled(Link)`
  width: 10rem;
  height: 3rem;
  list-style: none;
  text-decoration: none;
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
