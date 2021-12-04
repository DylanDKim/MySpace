import styled from 'styled-components';

const TitleHeader = styled.div`
  width: 16em;
  height: 1.5em;
  padding: 2em 2em 1em 1em;
  color: black;
  font-size: 48px;
  background-color: teal;

`;

const RightFlex = styled.div`
  width: 56.5em;
  height: 40em;
  display: flex;

  background-color: purple;
`;

const DownFlex = styled.div`
width: 19em;
height: 35.6em;
margin-top: 1em;
flex-direction: column;
background-color:blue;
`;

const emptyPhoto = styled.div``;

export { TitleHeader, RightFlex, DownFlex };
