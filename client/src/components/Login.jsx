import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login(props) {
  return (
    <div>
      <div>Login</div>
      <button onClick={() => setNameSet(true)}>Login</button>
    </div>
  )
}
export default Login;