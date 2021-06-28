import './App.css';
import React from 'react'
import { Button } from 'semantic-ui-react'
import { Children, Component } from 'react';

const Buttonmain = (title) => {
    return (
  
  <div>
    <Button className="button" float="right"   compact size="medium" >{title.text}</Button>
  </div>
    );
  }
 



export default Buttonmain;