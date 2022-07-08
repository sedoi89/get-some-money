import styled, {keyframes} from 'styled-components';

const animation = keyframes`
  from {
    transform: rotate(0deg);

  }

  to {
    transform: rotate(360deg);

  }
`;

export const StyledXchangeArrowsContainer = styled.div`
  animation: ${animation} 7s linear infinite;
  position: absolute;
  top: 415px;
  z-index: 1;
  @media (max-width: 793px) {
    top: 480px;
  }
`
export const StyledXchangeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  width: 50%;
  position: relative;

  & span {
    font-weight: normal;
    font-size: 15px;
  }
`
export const StyledXchangeLabel = styled.label`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 50px;
  
  & input {
    width: 45%;
    height: 100px;
    font-size: 30px;
    text-align: center;
    border: none;
    background-color: rgba(239, 239, 239, 0.4);
    margin-top: 10px;
    border-radius: 10px;
    color: rgb(84, 84, 84);
  }
`
export const StyledXchangeContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`
