import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PhotoStyle } from '../styles/instagramstyles.js'

function Photo(props) {
  return (
    <PhotoStyle
      loading="lazy"
      src={props.photoSource}
    />
  )
}
export default Photo