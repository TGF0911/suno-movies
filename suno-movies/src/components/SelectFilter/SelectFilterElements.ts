import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: absolute;
`;

export const SelectWrap = styled.div`
  width: 24rem;
  margin: 1rem auto;
  position: relative;
  user-select: none;
`

export const SelectDefault = styled.ul`
    background: #fff;
    border-radius: 5px;
    position: relative;
    cursor: pointer;

    li{
      padding: 10px 20px;
    }
`
export const SelectList = styled.ul`
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  display: none;
`

export const SelectItem = styled.li`
  padding: 10px;
  cursor: pointer;

  :first-child:hover{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  :last-child:hover{
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  :hover{
    background: #fff4dd;
  }
`



