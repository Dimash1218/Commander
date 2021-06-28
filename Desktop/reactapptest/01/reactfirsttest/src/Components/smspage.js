import React from 'react'
import '../App.css';
import { Button, Checkbox, Form, Grid, Segment, Image, Container } from 'semantic-ui-react'
import Forminput from './forminput';
import Maintitle from './titlemainforalltitles';
import Wifisave from '../img/picfor/wifisave.svg'
import Blank from '../img/picfor/blank.svg'
import Smartfone from '../img/picfor/smartphone.svg'
import Right from '../img/picfor/rightarrow.svg'
import Left from '../img/picfor/leftarrow.svg'
const Sms = () => {
    return (
        <Container>
            <Segment basic>
            <h1 centered class="title title--white" style={{margin:'0 0 80px 0'}}>Принцип работы авторизации по SMS</h1>
                <Grid centered >
                    <Grid.Column width={12} centered>
                        <Grid.Column style={{ margin: '0 0 0 0' }} centered>
                            <Grid.Row textAlign="left" width={8}>
                                <Grid.Column className="pic_item">
                                    <div className="pic_title" >01</div>
                                    <div className="pic_img" ><Image size='miny' src={Wifisave} /></div>
                                    <div className="pic_arrow"><Image src={Right}/></div>

                                </Grid.Column>
                                <Grid.Column className="pic_text">
                                    Пользователь подключается к открытой Wi-Fi сети

                                </Grid.Column>
                                
                            </Grid.Row>


                        </Grid.Column>

                        <Grid.Column  style={{ margin: '130px 0 0 0' }} centered>
                            <Grid.Row className="pic" textAlign="left" width={8}>
                                <Grid.Column className="pic_item">
                                    <div className="pic_title" >02</div>
                                    <div className="pic_img" ><Image size='miny' src={Blank} /></div>
                                    <div className="pic_arrow pic-arrow--left"><Image src={Left}/></div>
                                </Grid.Column>
                                <Grid.Column className="pic_text">
                                Пользователь автоматически переходит на страницу входа

                                </Grid.Column>
                                <Grid.Column className="pic_text pic_text--grid">
                                На странице входа может отображаться промо-страница, соц. опрос, рекламный блок.

                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column style={{ margin: '100px 0 0 0' }} centered>
                            <Grid.Row textAlign="left" width={8}>
                                <Grid.Column className="pic_item">
                                    <div className="pic_title" >03</div>
                                    <div className="pic_img" ><Image size='miny' src={Smartfone} /></div>

                                </Grid.Column>
                                <Grid.Column className="pic_text">
                                Пользователь авторизуется по SMS

                                </Grid.Column>
                                <Grid.Column className="pic_text pic_text--grid">
                                Пользователь вводит свой номер телефона и получает SMS с паролем для доступа к сети.

                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    );
}
export default Sms;