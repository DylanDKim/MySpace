import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InstaSection } from '../styles/instagramstyles.js'
import Photo from './Photo.jsx';

function MainPhoto(props) {
  const [photoData, setPhotoData] = useState({ urls: {
    regular:
    'https://images.unsplash.com/photo-1638550499214-5b0d2994373b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80'
  }
}

  );

  console.log('state', photoData);

    useEffect(() => {
      setPhotoData(props.photoData);
      console.log(photoData.urls.regular);
      console.log(Object.keys(photoData.urls));

    }, [props.photoData])

  return (
    <InstaSection>
      <Photo
      photoUrl={photoData === undefined? null : photoData.urls.regular}
      />
    </InstaSection>
  )
}
export default MainPhoto;