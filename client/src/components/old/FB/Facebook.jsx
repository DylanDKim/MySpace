import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FBSection, SocialHeader } from '../styles/fbstyles.js'
import Cell from './Cell.jsx';

function Facebook(props) {
  const posts = [];
  for (var n = 0; n < 3; n++) {
    posts.push(<Cell/>)
  }
  return (
    <FBSection>
      <SocialHeader>Latest Facebook Posts</SocialHeader>
      {posts}
    </FBSection>
  )
}
export default Facebook;