import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'

import Buttonmain from './buttonmain'

import teamphoto from '../src/img/tream.svg'


const Centersegment = () =>{
    return(
<Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
       
          <Grid.Column width={8}>
            <Header className="intro_title"size="massive"   as='h1' style={{ fontSize: '4em', lineHeight:'0.9',maxWidth:'950px',margin:'20px 0 0 0' }}>
            Публичный 
Wi-Fi с авторизацией

            </Header>
            <div></div>
            <p style={{ fontSize: '1.33em', margin:'270px  0 20px 0' }}>
            Мы создаем гостевые сети Wi-Fi и управлям ими для отелей и других предприятий, работающих с клиентами, не говоря уже о оффшорных Wi-Fi для экипажей.
            </p>

            <Button color="linkedin">Подробнее</Button>
          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <Image  rounded size='big' src={teamphoto} />
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
    </Segment>
    );

    }
    export default Centersegment; 