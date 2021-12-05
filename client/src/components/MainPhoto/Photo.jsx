import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InstaSection, PhotoStyle } from '../styles/instagramstyles.js'

function Photo(props) {

  return (
    <div>
      {console.log('photoUrl', props.photoUrl)}
    <PhotoStyle
      src={props.photoUrl}
      >
    </PhotoStyle>
    </div>
  )
}
export default Photo;