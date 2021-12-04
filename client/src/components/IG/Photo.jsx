import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PhotoStyle } from '../styles/instagramstyles.js'

function Photo(props) {
  return (
    <PhotoStyle
      loading="lazy"
      src={'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/c0.180.1440.1440a/s240x240/206379239_199869281920119_1950901642958192556_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=CQt4Z2hYpusAX_xtpKR&edm=ABfd0MgBAAAA&ccb=7-4&oh=5dc68d6d2a2aab27170cacc80499433d&oe=61B1E76C&_nc_sid=7bff83'}
    />
  )
}
export default Photo