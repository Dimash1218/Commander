import _ from 'lodash'

import './App.css';

import React from 'react'

import { Grid, Image,Container,Button } from 'semantic-ui-react'

import logo from '../src/img/Grouporig.svg'

import { Header } from 'semantic-ui-react'

import Buttonmain from './buttonmain';






const HeaderPage = () => {
  return(
  <div>
    <Header  as="h1"  className="headerjs" size="huge" primary fluid dividing block inverted color="blue" >
      <Container>
        <Grid.Row>
          <Grid.Column className="headerinitems">
            <Image size="small" src={logo} />
            <Buttonmain text={"Связаться"}/>
            </Grid.Column>
    </Grid.Row>
    </Container>
    </Header>
    
 
  </div>
  );
  }

export default HeaderPage;
  
  