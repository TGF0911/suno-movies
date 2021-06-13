import styled from 'styled-components';


export const Select = styled.select`
  margin-right: 2rem;
  width: 10rem;
  height: 3rem;
  background: linear-gradient(180deg, #212125 0%, #2E2E35 100%), #212125;
  border: 2px solid #2E2D31;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
 
`

export const Option = styled.option`
  color: #212125;
    background: #fff;
    display: flex;
    min-height: 20px;
    padding: 0px 2px 1px;
    border-radius: 10px;
    border: 2px solid #2E2D31;
    ::-webkit-scrollbar-thumb{
      background: #525861;
      border-radius: 0 8px 8px 0;
    }
`





