import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InstaSection } from '../styles/instagramstyles.js'
import Photo from './Photo.jsx';

function Instagram(props) {
  const [photo, setPhoto] = useState(
    'https://images.unsplash.com/photo-1638550499214-5b0d2994373b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80']);

  const gallery = [];
  for (var n = 0; n < 9; n++) {
    gallery.push(<Photo
    photoSource={photos[n]}
    />)
  }

  return (
    <InstaSection>
      {gallery}
    </InstaSection>
  )
}
export default Instagram