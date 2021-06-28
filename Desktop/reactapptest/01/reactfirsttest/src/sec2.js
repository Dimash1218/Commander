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
import Wifiteam from '../src/img/WiFi-Marketing.svg'
import teamphoto from '../src/img/tream.svg'

class Navese extends Component {
    render() {
  
      return (
        <img src={teamphoto} alt={"teamphoto"} />
      )
    }
  }
const Sec2= () =>{
    return(
        <div className="seg_wrapper">
<Segment basic style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          
          <Grid.Column width={8}>
            <Header className="section_title"size="massive"   as='h1' style={{ fontSize: '4em', lineHeight:'0.9',maxWidth:'950px',margin:'20px 0 0 0' }}>
            Лучший Маркетинг

            </Header>
            <div></div>
            <p style={{ fontSize: '16px', margin:'170px  0 20px 0' }}>
            Изменился маркетинг. На самом деле ваших клиентов интересует только то, что для них важно. Итак, что, если бы вы могли больше узнать о людях, которые на самом деле посещают ваш бизнес? Сегментированная информация, такая как возраст, пол и социальные интересы вашей аудитории, позволит вам не только лучше понять, кого привлекает ваша текущая услуга, но и создать целевые рекламные акции, соответствующие вашим различным группам клиентов. Представьте себе возможность сообщить женщинам определенного возраста об одном подходящем продвижении по службе; и пошлите мужчинам еще один. Ваши целевые маркетинговые кампании должны предлагать лучшую сквозную проработку, потому что они более актуальны. Это то, что предлагает решение Vital Wifi.
            </p>

            <Button color="linkedin">Начать</Button>
          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <Image  rounded size='massive' src={Wifiteam} />
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
    </Segment>
    </div>
    );

    }
    export default Sec2; 