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
import Wifiteam from '../src/img/wifiteam.svg'
import teamphoto from '../src/img/tream.svg'


const Sec1 = () =>{
    return(
<Segment basic style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column floated='right' width={8}>
            <Image  rounded size='massive' src={Wifiteam} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header className="section_title"size="massive"   as='h1' style={{ fontSize: '4em', lineHeight:'0.9',maxWidth:'950px',margin:'20px 0 0 0' }}>
            Будущее WiFi

            </Header>
            <div></div>
            <p style={{ fontSize: '16px', margin:'170px  0 20px 0' }}>
            Настройка и управление бесплатным гостевым Wi-Fi для вашего бизнеса не должно вызывать затруднений. Мы знаем наиболее эффективный способ обследовать, спроектировать и установить ваше гостевое решение Wi-Fi, чтобы вы могли предоставить своим пользователям отличный сервис, не создавая для вас дополнительных проблем. Более того, наш юридически совместимый Wi-Fi позволяет вам взаимодействовать с вашими клиентами с помощью набора маркетинговых инструментов, помогая вам анализировать и сегментировать свою аудиторию, как никогда раньше.
            </p>

            <Button color="linkedin">Начать</Button>
          </Grid.Column>
          
        </Grid.Row>
        
      </Grid>
    </Segment>
    );

    }
    export default Sec1; 