import styled from 'styled-components';

export const StyledHeaderSpan = styled.span`
  margin-bottom: 16px;
  background: #BCD6D6;
  background: linear-gradient(to bottom right, #BCD6D6 0%, #3C414D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`

export const StyledHeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;
  font-size: 20px;
  gap: 15px;

  @media (max-width: 793px) {
    margin-bottom: 70px;

  }
`
export const StyledHeaderDivTitle = styled.div`
  margin-left: 40px;
  padding-top: 40px;
  margin-bottom: 30px;

  & h1 {
    max-width: 350px;
    font-size: 64px;
  }

  & a {
    color: rgb(84, 84, 84);
    text-decoration: none;
  }

  @media (max-width: 437px) {
    margin-left: 20px;
  }
`

export const StyledHeaderUl = styled.ul`
  margin-left: 50px;
  list-style: none;

  & li {
    margin-bottom: 30px;
    font-size: 25px;
  }

  & a {
    color: rgba(119, 184, 201, 0.5);
    text-decoration: none;
  }

  & a:hover {
    box-shadow: 6px 5px 60px 4px rgba(145, 184, 201, 0.29);
    background-color: rgba(119, 184, 201, 0.1);
    border-radius: 65px;
  }
`

export const StyledHeaderDivClock = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & button {
    min-width: 50%;
    height: 60px;
    align-self: center;
    background-color: #F5F5F5;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    color: rgb(84, 84, 84);
  }

  & button:hover {
    outline: #4db0c4 1px solid;
  }

  @media (max-width: 616px) {
    top: 181px;
  }

  @media (max-width: 437px) {
    top: 214px;
    width: 20%;
    & button {
      width: 100%;
    }
    & span {
      display: none
    }
  }
`
