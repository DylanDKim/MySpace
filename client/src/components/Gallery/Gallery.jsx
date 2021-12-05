import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FBSection, SocialHeader, GallerySection } from '../styles/fbstyles.js'
import Cell from './Cell.jsx';

function Gallery(props) {
  const [photos, setPhotos] = useState(['https://images.unsplash.com/photo-1638595780046-93133f5ce52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1638553507237-10ff908cda42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1638548719890-850eb54bd059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1638531289096-ebf2c272e498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', 'https://images.unsplash.com/photo-1638536879798-a87d8a3ca644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1638549900518-1ef1f85cfbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1634796847521-fa5810dfc322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1638547908152-a8406fc38d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80']);

  const posts =[];

  for (var n = 0; n < 6; n++) {
    posts.push(<Cell photoUrl={photos[n]}/>)
  }
  return (
    <FBSection>
      <SocialHeader>Gallery</SocialHeader>
      <GallerySection>
        {posts}
      </GallerySection>
    </FBSection>
  )
}
export default Gallery;