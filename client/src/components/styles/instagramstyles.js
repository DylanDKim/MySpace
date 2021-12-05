import styled from 'styled-components';

const InstaSection = styled.div`
  width: 35em;
  height: 35.5em;
  margin: 1em 1em 1em 1em;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 1%;
  background-color: #E3E3E3;
`;

const EmptyPhoto = styled.div``;

const PhotoStyle = styled.img`
height: 34em;
width:34em;
margin 0.5em 0.5em 0.5em 0.5em;
object-fit:cover;
`;


export { InstaSection, EmptyPhoto, PhotoStyle };
