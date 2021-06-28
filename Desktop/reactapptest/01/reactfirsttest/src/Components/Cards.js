import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Card,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import logo1 from '../img/opportunities/1.svg'
import logo2 from '../img/opportunities/2.svg'
import logo3 from '../img/opportunities/3.svg'
import logo4 from '../img/opportunities/4.svg'



const Cards = (props) => {
    return (
        <Segment basic>
            <Grid>
                <Grid.Row className="cards">

                    <Grid.Column className="cards_item" computer={4} tablet={8} style={{ margin: '150px 0 0 0' }}>
                       
                            <Card className="cardfor">
                                <Card.Content style={{ margin: '130px 0 0 0' }}>
                                    <Card.Header style={{ margin: '1% 0 0 0' }}> <Image src={logo1} /></Card.Header>
                                    <Card.Meta>
                                        <span as="h2" className='date' style={{ color: '#fff' }}>Сбор данных</span>
                                    </Card.Meta>
                                    <Card.Description className="desc" style={{ color: '#fff' }}>
                                        Сбор и актуализация данных о ваших клиентах в удобном интерфейсе
                                    </Card.Description>
                                </Card.Content>
                            </Card>{/*CARD1*/}
                        
                    </Grid.Column>
                    <Grid.Column className="cards_item" computer={4} tablet={8} style={{ margin: '150px 0 0 0' }}>
                        <Card className="cardfor">
                            <Card.Content style={{ margin: '130px 0 0 0' }}>
                                <Card.Header style={{ margin: '1% 0 0 0' }}><Image src={logo2} /></Card.Header>
                                <Card.Meta>
                                    <span className='date' style={{ color: '#fff' }}>Анкетирование</span>
                                </Card.Meta>
                                <Card.Description className="desc" style={{ color: '#fff' }}>
                                    Возможность сбора и актуализации данных о ваших клиентах
                                   
                                </Card.Description>
                            </Card.Content>
                        </Card>{/*CARD1*/}</Grid.Column>
                        <Grid.Column className="cards_item" computer={4} tablet={8} style={{ margin: '150px 0 0 0' }}>
                    
                        <Card className="cardfor">
                            <Card.Content style={{ margin: '130px 0 0 0' }}>
                                <Card.Header style={{ margin: '1% 0 0 0' }}><Image src={logo3} /></Card.Header>
                                <Card.Meta>
                                    <span className='date' style={{ color: '#fff' }}>Реклама</span>
                                </Card.Meta>
                                <Card.Description className="desc" style={{ color: '#fff' }}>
                                    Размещение тематической рекламы, проведение опросов<br></br><br></br>
                                    
                                    
                                </Card.Description>
                            </Card.Content>
                        </Card>{/*CARD1*/}
                    
                    </Grid.Column>
                    <Grid.Column className="cards_item" computer={4} tablet={8} style={{ margin: '150px 0 0 0' }}>
                        <Card className="cardfor">
                            <Card.Content style={{ margin: '130px 0 0 0' }}>
                                <Card.Header style={{ margin: '1% 0 0 0' }}><Image src={logo4} /></Card.Header>
                                <Card.Meta>
                                    <span className='date' style={{ color: '#fff' }}>Аналитика</span>
                                </Card.Meta>
                                <Card.Description className="desc" style={{ color: '#fff' }}>
                                    Статистика посещений Статистика по количеству клиентов <br></br><br></br>
                                </Card.Description>
                            </Card.Content>
                        </Card>{/*CARD1*/}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}
export default Cards;