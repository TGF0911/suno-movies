import styled from 'styled-components';

export const CatalogHeader = styled.div`
  
`;

export const CatalogContainer = styled.div`
  /* width: 50rem; */
  width: calc(100vw - 400px);
`

export const CatalogList = styled.ul`
  margin: 4rem;
  padding: 2rem 4rem;
  list-style: none;
`

export const CatalogItem = styled.li`
  margin: 2rem;
  padding-bottom: 4rem;
  display: flex;
  margin-bottom: 2rem;
`
export const MovieImageContainer = styled.div`
  width: 14rem;
  height: 8rem;
`

export const MovieImage = styled.img`
  
`

export const MovieInfo = styled.div`
  height: 14rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`

export const MovieTitle = styled.h4`
  color: #EAEAEA;
  font-size: 1.5rem;
  font-weight: 400;
 
`

export const MovieGenre = styled.p`
  color: #FE3189;
  margin-bottom: 2rem;
`

export const MovieRating = styled.p`
  color: #EAEAEA;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 3rem;
`

export const MovieDescription = styled.p`
  color: #9F9FA0;
  width: 100%;
  height: 5rem;
  font-size: 0.8rem;
  font-weight: 300;
  text-overflow: ellipsis;
`

export const ButtonConatiner = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingButton = styled.div`
  width: 200px;
  height: 50px;
  list-style: none;
  border-radius: 4px;
  border: 1px solid #fff;
  background-color: #FE3189;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover{
    opacity: 0.8;
  }
`