import { AiFillStar } from "react-icons/ai";
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const MovieCard = styled.li`
  margin: 2rem;
  padding-bottom: 6rem;
  width: ${props => (props.theme.isLatest && '15rem')};
  height: ${props => (props.theme.isLatest && '20rem')};
  display: flex;
  flex-direction: ${props => (props.theme.isLatest ? 'column' : 'row')};
  align-items: ${props => (props.theme.isLatest && 'flex-start')};
  margin-bottom: 3rem;
  `

export const MovieImageContainer = styled.div`
  width: 14rem;
  height: ${props => (props.theme.isLatest ? '18rem' : '8rem')};

  img{
    width: 13rem;
    height: ${props => (props.theme.isLatest ? '18rem' : '22rem')};
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
  height: ${props => (props.theme.isLatest ? '18rem' : '22rem')};
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
  width: ${props => (props.theme.isLatest ? '15rem' : '14rem')};
  height: ${props => (props.theme.isLatest ? '8rem' : '14rem')};
  margin-left: ${props => (props.theme.isLatest ? '0' : '2rem')};
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.theme.isLatest && 'flex-start')};
`

export const MovieTitle = styled(Link)`
  width: ${props => (props.theme.isLatest ? '12rem' : !props.theme.isGrid  && '50rem')};
  color: #EAEAEA;
  font-size: ${props => (props.theme.isLatest ? '1.2rem' : '1.5rem')};
  font-weight: 400;
  text-decoration: none;
  white-space: ${props => (props.theme.isLatest && 'nowrap')};
  text-overflow: ${props => (props.theme.isLatest && 'ellipsis')};
  overflow: ${props => (props.theme.isLatest && 'hidden')};
  :hover{
    text-decoration: underline;
  }

  @media screen and (max-width: 1300px){
    width: ${props => (!props.theme.isGrid && '30rem')};
  }

  @media screen and (max-width: 800px){
    width: ${props => (!props.theme.isGrid && '16rem')};
  }
`

export const MovieGenre = styled.p`
  width: ${props => (props.theme.isGrid | props.theme.isLatest ? '12rem' : '30rem')};
  font-size: 1.2rem;
  color: #FE3189;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  white-space: ${props => (props.theme.isLatest && 'nowrap')};
  text-overflow: ${props => (props.theme.isLatest && 'ellipsis')};
  overflow: ${props => (props.theme.isLatest && 'hidden')};

  @media screen and (max-width: 1300px){
    width: ${props => (!props.theme.isGrid && '30rem')};
  }

  @media screen and (max-width: 800px){
    width: ${props => (!props.theme.isGrid && '16rem')};
  }
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RatingStar = styled(AiFillStar)`
  font-size: 1.8rem;
  color: #FE3189;

`

export const MovieRating = styled.p`
  color: #EAEAEA;
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 10px;
`
export const DescriptionContainer = styled.div`
  display: ${props => (props.theme.isLatest && 'none')};
  text-overflow: clip ellipsis;
  p{
  margin-top: 1rem;
  height: 7rem;
  width: ${props => (props.theme.isGrid ? '18rem' : '50rem')};
  color: #9F9FA0;
  font-size: 0.9rem;
  font-weight: 300;
  text-align: left;

  direction: ltr;
  overflow: hidden;
  @media screen and (max-width: 1300px){
    width: ${props => (!props.theme.isGrid && '20rem')};
  }

  @media screen and (max-width: 800px){
    width: ${props => (!props.theme.isGrid && '14rem')};
  }
  
  }
`
