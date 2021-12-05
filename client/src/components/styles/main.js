import styled from 'styled-components';

const TitleHeader = styled.div`
  width: 16em;
  height: 1.5em;
  padding: 2em 2em 1em 1em;
  color: black;
  font-size: 48px;

`;

const SearchFlex=styled.div`
  display: flex;
  flex-direction: row;
  width: 30em;
`;

const RightFlex = styled.div`
  width: 56.5em;
  height: 40em;
  display: flex;
  background-color: #FAFAFA;
`;

const DownFlex = styled.div`
width: 19em;
height: 35.6em;
margin-top: 1em;
flex-direction: column;
background-color:#E3E3E3;
`;

const Searchbar=styled.input`
  width: 10em;
  font-size:48px;
  border-color: transparent;
  margin-right: 1em;

`;

const ColorSearchbar=styled.input`
  width: 6em;
  font-size:48px;
  border-color:transparent;
`;


const emptyPhoto = styled.div``;

export { TitleHeader, SearchFlex, RightFlex, DownFlex, Searchbar, ColorSearchbar };
