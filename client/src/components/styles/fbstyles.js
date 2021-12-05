import styled from 'styled-components';

const SocialHeader=styled.div`
  color: grey;
  font-size: 18;
  margin: .5em 0em 1em .5em;
  padding-top: .5em;
`;

const FBSection = styled.div`
  width: 18em;
  height: 14em;
  margin: .5em .5em 1em .5em;
  flex-direction: row;
  background-color: white;

`;


const CellBoxDown = styled.img`
  width: 4.2em;
  height: 4.2em;
  margin: .5em .5em .5em .5em;
  flex-direction: row;
  flex-wrap: wrap;
  object-fit:cover;
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

const GallerySection=styled.div`
  width: 18em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


export { SocialHeader, FBSection, GallerySection, CellBoxDown, CellHeader, CellText, CellDate };
