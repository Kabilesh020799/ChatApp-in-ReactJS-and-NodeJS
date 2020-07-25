import React from 'react';

import closeIcon from './../icons/closeIcon.png';
import onlineIcon from '../icons/onlineIcon.png'

import classes from './InfoBar/InfoBar.module.css';


const InfoBar = ({ room }) => (
    <div className={classes.infoBar}>
      <div className={classes.leftInnerContainer}>
        <img className={classes.onlineIcon} src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className={classes.rightInnerContainer}>
        <a href="/"><img src={closeIcon} alt="close icon" /></a>
      </div>
    </div>
  );
  
  export default InfoBar;
  