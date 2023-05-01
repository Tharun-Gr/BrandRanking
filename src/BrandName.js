import React, { useState } from 'react';
import './BrandName.css';
import myImage from './ranking-star-solid.svg'

function BrandName(props) {

  return (
    <div className="brand-name">
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <span style={{marginRight: "1rem", fontWeight: 800}}>Brand Ranking</span>
          <img style={{width: "3rem"}} src={myImage} alt="My Image"></img>
        </div>
        <span style={{fontWeight: 600}}>{props.name && props.name.charAt(0).toUpperCase() + props.name.slice(1)}</span>
    </div>
  );
}

export default BrandName;