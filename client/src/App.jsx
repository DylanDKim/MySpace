import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Instagram from './components/IG/Instagram.jsx';
import Facebook from './components/FB/Facebook.jsx';
import Twitter from './components/Twitter/Twitter.jsx';
import Login from './components/Login.jsx';
import { TitleHeader, RightFlex, DownFlex } from './components/styles/main.js'

// https://api.instagram.com/oauth/authorize?app_id=263221255869371&redirect_uri=18.119.158.29&scope=user_profile,user_media&response_type=code

//?u=https%3A%2F%2F18.119.158.29%2F%3Fcode%3DAQDMkuq8olFjByHliPCBkm0p8gcVbcgKOtqYJAskXuA6Majcx8PX5AUFpN05HUOWLLtCjZsG3eN9A6tUZH4ESW46yANgmAkt11NxCbqgi_wBeVzZmHKgOwrNrXHWJklBSwPX6mZAK7bYIoAby5LItRToWfSTnIP_xRI_4F0VfiEz45QBog1ho1phUY39H72bzVkQNvm3datarIlWzANCljoOpSS-d-PX-Ys_OOwinsoLng%23_&e=ATMVVuxqLLfvkecjQ8rr60THqs55j-7I-ebqmBypE7bvcJIf9YQuqDeGQw8b4oCI6crYxWXHnrO0rBCi1yczO4uyusKhp_RvyMQScA&s=1

function App(props) {
  const [name, setName] = useState('Dylan Kim');
  const [nameSet, setNameSet] = useState(false);
  // useEffect(() => {
  //   axios.post('https://api.instagram.com/oauth/access_token')
  // })

  useEffect(() => {
    console.log(widow.location.pathname);
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