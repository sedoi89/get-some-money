import styled from 'styled-components';

export const StyledCurrencyTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

`

export const StyledCurrencySelect = styled.select`

  width: 50%;
  margin-bottom: 10px;
  color: rgb(84, 84, 84);
  font-weight: bold;
  border: none;
  text-align: center;
  padding-right: 10px;
  font-size: 15px;
  align-self: ${(props => props.align ? 'cener' : 'flex-start')}; 
  z-index: 1;
  &:focus {
    border: none;
    outline: #4db0c4 1px solid;
    text-align: center;
  }
`
export const StyledCurrencyTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  & td {
    padding: 10px;
    border-bottom: 1px solid rgb(84, 84, 84);
  }
  & td:nth-child(3) {
    background: rgb(252, 252, 252);
    background: linear-gradient(180deg, rgba(252, 252, 252, 0) 70%, rgba(242, 242, 242, 1) 100%);
    border-radius: 50% 50% 3px 3px;
  }
  
  & td:nth-child(3):hover:not(& tr:nth-child(1) td:nth-child(3)) {
    box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
    cursor: pointer;
  }
  & tr:nth-child(1) td:nth-child(3) {
    background: white;
  }
  @media (max-width: 530px) {
    & td:nth-child(1),
      td:nth-child(5),
      td:nth-child(6) {
      display: none;
    }
  }
`
