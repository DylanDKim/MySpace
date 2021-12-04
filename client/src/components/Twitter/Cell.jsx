import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CellBoxDown, CellBoxAcross, CellHeader, CellText, CellDate } from '../styles/fbstyles.js'

function Cell(props) {
  const [header, setHeader] = useState('header');
  const [text, setText] = useState('text text text');
  const [date, setDate] = useState('2/13/23');

  return (
    <CellBoxDown>
      <CellBoxAcross>
        <CellHeader>{header}</CellHeader>
        <CellDate>{date}</CellDate>
      </CellBoxAcross>
      <CellText>{text}</CellText>
    </CellBoxDown>
  )
}
export default Cell;