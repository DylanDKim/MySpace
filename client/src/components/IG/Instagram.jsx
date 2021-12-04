import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InstaSection } from '../styles/instagramstyles.js'
import Photo from './Photo.jsx';

function Instagram(props) {
  const [photos, setPhotos] = useState([]);
  for (var n = 0; n < 9; n++) {
    photos.push(<Photo/>)
  }

  return (
    <InstaSection>
      {photos}
    </InstaSection>
  )
}
export default Instagram