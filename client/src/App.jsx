import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Instagram from './components/IG/Instagram.jsx';
import Facebook from './components/FB/Facebook.jsx';
import Twitter from './components/Twitter/Twitter.jsx';
import Login from './components/Login.jsx';
import { TitleHeader, RightFlex, DownFlex } from './components/styles/main.js'

// https://www.instagram.com/oauth/authorize?client_id=263221255869371&redirect_uri=https://localhost:443/&scope=user_profile,user_media&response_type=code

function App(props) {
  const [name, setName] = useState('Dylan Kim');
  const [nameSet, setNameSet] = useState(false);
  useEffect(() => {
    axios.post('https://api.instagram.com/oauth/access_token')
  })

  return (
    <div>
      <TitleHeader>{name}</TitleHeader>
      <RightFlex>
        <Instagram></Instagram>
        <DownFlex>
          <Facebook></Facebook>
          <Twitter></Twitter>
        </DownFlex>
    </RightFlex>
    </div>
  )
}

export default App;