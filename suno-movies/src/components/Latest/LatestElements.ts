import styled from 'styled-components';
import { IoIosArrowForward,  IoIosArrowBack} from 'react-icons/io'

import backImg from '../../assets/movie.jpg'

export const LatestContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: block;
  justify-content: center;
  background-image: url(${backImg}) no-repeat ;
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

  @media screen and (max-width: 800px){
  display: none;
  }
`
export const ArrowLeft = styled(IoIosArrowBack)`
  font-size: 80px;
  color: #fff;
`

export const ArrowRight = styled(IoIosArrowForward)`
  font-size: 80px;
  color: #fff;
`

export const CarouselInner = styled.ul`
 display: grid;
 grid-template-columns: repeat(4,16rem);
 align-items: center;
 justify-content: center;

 transition: transform 0.3s;


`
