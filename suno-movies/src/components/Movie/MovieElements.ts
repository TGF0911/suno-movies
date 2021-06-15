import { AiFillStar } from "react-icons/ai";
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieCard = styled.li`
  margin: 2rem;
  padding-bottom: 6rem;
  display: flex;
  margin-bottom: 3rem;
`

export const MovieImageContainer = styled.div`
  width: 14rem;
  height: 8rem;

  img{
    width: 13rem;
    height: 20rem;
    object-fit: cover;
  }

  :hover{
  transition: 0.5s;
    .play {
      opacity: 0.8;
    }
  }
`
export const PlayLinkContainer = styled(Link)`
 position: absolute;
  width: 13rem;
  height: 20rem;
  background-color: rgba(254, 49, 137, 0.7);
  opacity: 0;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PlayLink = styled(FaRegPlayCircle)`
  font-size: 8rem;
  color: #fff;
  background-color: transparent; 
`

export const MovieInfo = styled.div`
  height: 14rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`

export const MovieTitle = styled(Link)`
  color: #EAEAEA;
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  :hover{
    text-decoration: underline;
  }
`

export const MovieGenre = styled.p`
  font-size: 1.2rem;
  color: #FE3189;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
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
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`
export const DescriptionContainer = styled.div`
  p{
  margin-top: 1rem;
  height: 8rem;
  width: 20rem;
  color: #9F9FA0;
  font-size: 0.9rem;
  font-weight: 300;
  text-align: justify;
  text-overflow: clip ellipsis;
  direction: ltr;
  overflow: hidden;
  }
`
