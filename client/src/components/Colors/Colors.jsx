import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SocialHeader } from '../styles/fbstyles.js'
import { ColorSection, ColorHolder, RedDot, OrangeDot, YellowDot, GreenDot, BlueDot, PurpleDot, WhiteDot, BlackDot, GreyDot, ClearDot } from '../styles/colorstyles.js';

function Colors(props) {
  return (
    <ColorSection>
      <SocialHeader>Colors</SocialHeader>
      <ColorHolder>
        <RedDot onClick={() => alert('clicked!')}></RedDot>
        <OrangeDot/>
        <YellowDot/>
        <GreenDot/>
        <BlueDot/>
        <PurpleDot/>
        <WhiteDot/>
        <GreyDot/>
        <BlackDot/>
        <ClearDot>X</ClearDot>
      </ColorHolder>
    </ColorSection>
  )
}
export default Colors;