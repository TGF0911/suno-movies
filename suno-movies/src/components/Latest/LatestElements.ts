import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai'
import { IoIosArrowForward,  IoIosArrowBack} from 'react-icons/io'


//Colocar backgound

export const LatestContainer = styled.div`
  margin-bottom: 2rem;
`;

export const LatestHeader = styled.div`
  margin-top: 4rem;
  margin-left: 18rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

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
  height: 400px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const ArrowLeft = styled(IoIosArrowBack)`
margin-right: 2.3rem;
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
  grid-template-columns: repeat(1,16rem);
  }
`

export const MovieCard = styled.li`
  width: 15rem;
  height: 20rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  

  :hover{
   /* background-color: #FE3189; */
    opacity: 0.8;
  }
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

export const MovieTitle = styled.h4`
  width: 12rem;
  color: #EAEAEA;
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const MovieGenre = styled.p``

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