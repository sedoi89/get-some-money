import styled, {keyframes} from 'styled-components';

const animationAbout = keyframes`
  from {
   
    opacity: 0;
  }
  to {
    
    opacity: 1;

  }
`

export const StyledAboutDiv = styled.div`
  opacity: 0;
  margin-left: 30px;
  margin-bottom: 30px;
  position: relative;
  animation: ${animationAbout} ${props => props.duration}s linear;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.delay}s;
`


export const StyledAboutUl = styled.ul`
  list-style: none;
  position: relative;

`
