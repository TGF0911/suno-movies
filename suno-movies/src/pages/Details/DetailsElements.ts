import styled from "styled-components";
import { AiFillStar } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import backImg from '../../assets/movie.jpg'

export const DetailsContainer = styled.div`
  margin: 5rem calc((100vw - 1000px) /2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  filter: ${props => props.theme.isBarsOpen | props.theme.isSearchBarOpen && 'opacity(0.1)'};
  background-image: url(${backImg}) no-repeat ;
  @media screen and (max-width: 1700px){
    margin: 1rem 10rem;
  }

  @media screen and (max-width: 1400px){
    margin: 1rem 3rem;
  }
`

export const MovieDetails = styled.div`
  margin: 6rem 0;
  margin-bottom: 10rem;
  display: flex;
  justify-content: space-evenly;

  background: url('../../assets/section 1.jpg');

  @media screen and (max-width: 800px){
    display: block;

    img{
      width: 28rem;
      height: 32rem;
    }
  }
`

export const MovieImage = styled.img`
  width: 26rem;
  height: 32rem;
`

export const MovieInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  @media screen and (max-width: 800px){
    margin-left: 0;
    margin-top: 1rem;
  }
`

export const MovieInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MovieTitle = styled.h2`
  color: #EAEAEA;
  font-size: 3.4rem;
  font-weight: 700;
  @media screen and (max-width: 800px){
    font-size: 2rem;
  }
  `

export const MovieGenre = styled.p`
  color: #FE3189;
  font-size: 1.4rem;
  font-weight: 300;
  @media screen and (max-width: 800px){
    font-size: 1.2rem;
  }
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RatingStar = styled(AiFillStar)`
  font-size: 2rem;
  color: #FE3189;
  @media screen and (max-width: 800px){
    font-size: 1.2rem;
  }
`

export const MovieRating = styled.p`
   color: #EAEAEA;
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;

  @media screen and (max-width: 800px){
    font-size: 1.2rem;
  }
`

export const DetailTitle = styled.h4`
    margin-top: 3rem;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 600;

    @media screen and (max-width: 800px){
    font-size: 1.2rem;
  }
`

export const MovieDescription = styled.p`
  margin-top: 30px;
  color: #9F9FA0;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: justify;
  @media screen and (max-width: 800px){
    font-size: 1rem;
  }
`

export const TrailerContainer = styled.div`
position: relative;
  margin: 10rem 2rem,;
  height: 30rem;
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
    width: 100%;
    height: 100%;
  }

  
`

export const ButtonContainer = styled.div`
  margin: 14rem 2rem;
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
