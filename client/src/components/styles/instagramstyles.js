import styled from 'styled-components';

const InstaSection = styled.div`
  width: 35em;
  height: 35.5em;
  margin: 1em 1em 1em 1em;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: black;
`;

const EmptyPhoto = styled.div``;

const PhotoStyle = styled.img`
height: 10.6em;
width:10.6em;
margin 0.5em 0.5em 0.5em 0.5em;
object-fit:cover;
background-color:grey;
`;


export { InstaSection, EmptyPhoto, PhotoStyle };
