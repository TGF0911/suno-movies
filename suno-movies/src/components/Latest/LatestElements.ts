import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai'
import { IoIosArrowForward,  IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom';
import { FaRegPlayCircle } from 'react-icons/fa';

export const LatestContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: block;
  justify-content: center;
  background: url('../../assets/movie.jpg') no-repeat;
`;

export const LatestHeader = styled.div`
  margin-top: 4rem;
  margin-left: 22rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 900px){
    justify-content: center;
  }
  @media screen and (max-width: 1300px){
    margin-left: 14rem;
  }

  @media screen and (max-width: 800px){
    margin-left: 0;
  }
`

export const LatestDot = styled.div`
  margin-right: 1rem;
  width: 0.7rem;
  height: 0.7rem;
  background-color: #FE3189;
  border-radius: 50%;
 
`

export const LatestTitle = styled.h2`
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;

  span{
    font-weight: 600;
  }
`

export const Carousel = styled.div`
  height: 500px;
  padding: 2rem 5rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const ArrowLeft = styled(IoIosArrowBack)`
  margin-right: 3rem;
  font-size: 3rem;
  color: #fff;
`

export const ArrowRigth = styled(IoIosArrowForward)`
  font-size: 3rem;
  color: #fff;
`

export const CarouselInner = styled.ul`
 display: grid;
 grid-template-columns: repeat(4,16rem);
 align-items: center;
 justify-content: center;

 transition: transform 0.3s;

 @media screen and (max-width: 400px){
  display: grid;
  grid-template-columns: repeat(1,1fr);
  }
`

export const MovieCard = styled.li`
  width: 15rem;
  height: 20rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
export const MovieImageContainer = styled.div`
  width: 14rem;
  height: 20rem;

  :hover{
  transition: 0.5s;
    .play {
      opacity: 0.8;
    }
  }
`
export const PlayLinkContainer = styled(Link)`
 position: absolute;
  width: 12rem;
  height: 18rem;
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

export const MovieImage = styled.img`
  width: 12rem;
  height: 18rem;
  margin-bottom: 10px;
`

export const MovieDetails = styled.div`
  width: 15rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`

export const MovieTitle = styled(Link)`
  width: 12rem;
  color: #EAEAEA;
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  :hover{
    text-decoration: underline;
  }
`

export const MovieGenre = styled.p`
  font-size: 1rem;
  color: #FE3189;
  margin-top: 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RatingStar = styled(AiFillStar)`
  font-size: 1.5rem;
  color: #FE3189;

`

export const MovieRating = styled.p`
  color: #EAEAEA;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 9px;
  margin-bottom: 10px;
  margin-left: 8px;
`