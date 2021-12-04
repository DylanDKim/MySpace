import styled from 'styled-components';

const SocialHeader=styled.div`
  color: grey;
  font-size: 18;
  margin-left: .5em;
`;

const FBSection = styled.div`
  width: 18em;
  height: 17em;
  margin: .5em .5em .5em .5em;
  flex-direction: column;
  background-color: white;
`;

const CellBoxDown = styled.div`
  width: 17em;
  height: 4.4em;
  background-color:pink;
  margin: .1em 0em .1em 0em;
  border: 1px solid black;
  flex-direction: column;
  padding: .3em .5em .3em .5em;
`;

const CellBoxAcross=styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`;


const CellHeader=styled.div`
  color: black;
  font-size: 16px;
  font-weight: bold;
  flex-direction: row;
`;

const CellText=styled.div`
  color: black;
  font-size:14px;
  flex-direction: row;
`;

const CellDate=styled.div`
  padding-top: .3em;
  color: grey;
  font-size:12px;
`;


export { SocialHeader, FBSection, CellBoxDown, CellBoxAcross, CellHeader, CellText, CellDate };
