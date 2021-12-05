import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SocialHeader } from '../styles/fbstyles.js'
import {InfoSection, InfoHolder, TextInfoHolder} from '../styles/infostyles.js';

function Info(props) {
  return (
    <InfoSection>
      <SocialHeader>Info</SocialHeader>
      <InfoHolder></InfoHolder>
    </InfoSection>
  )
}
export default Info;