import './App.css';

import 'semantic-ui-css/semantic.min.css'

import FormValue from './/FormValue'

import MainBg from './/img/mainBg.svg'

import teamphoto from '../src/img/tream.svg'

import logo from '../src/img/Grouporig.svg'

import Slider from "react-slick";

import Buttonmain from './buttonmain';

import Wifiteam from '../src/img/wifiteam.svg'

import CardsWrapper from './Components/cardsWrapper';

import Sections from './sections';

import _, { reverse } from 'lodash'

import { Grid, Image, Segment, Container } from 'semantic-ui-react'

import { Component } from 'react';

import HeaderPage from './Heading';

import CardCarousel from './cardcarousel';

import Centersegmentmainbody from './centersegmentmainbody';

import Sec1 from './sec1';

import Sec2 from './sec2';

import Cards from './Components/Cards';

import WhiteCards from './Components/WhiteCard';
import Formmain from './Components/Forminpage'
import Sms from './Components/smspage';
import Footer from './footer';
class Nav extends Component {
  render() {

    return (
      <img src={teamphoto} alt={"teamphoto"} />
    )
  }
}
class Naves extends Component {
  render() {

    return (
      <img src={MainBg} alt={"MainBG"} />
    )
  }
}
class Nave extends Component {
  render() {
    return (
      <img src={logo} alt={"logo"} />
    )
  }
}

const App = () => {
  return (
    <div>

      <HeaderPage />
      <div inverted className="app">
        <Container><Centersegmentmainbody /></Container>

      </div>
      <Container>
        <div className="sec">  <Sec1 />
          <Sec2 /></div>

      </Container>
      <Segment basic className="grey_wrap">
        <Container><CardsWrapper title="Возможности" />
          <Cards />
        </Container>

      </Segment>
      <Segment basic>
        <Container centered>
          <CardsWrapper reverse={reverse} title="Способы авторизации" />
          <WhiteCards />
          
        </Container>
      </Segment>
      <Segment basic style={{
        background: '#07B3EA'
      }}>
        <Container style={{margin: '0 0 80px 0'}}textAlign="center" centered>
          <Sms />
        </Container>
      </Segment>
      <Container centered><Formmain /></Container>
    
      

      <Footer />
    </div>





  );
}

export default App;
