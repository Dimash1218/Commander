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
import ologo1 from '../img/auth/1.svg'
import ologo2 from '../img/auth/2.svg'
import ologo3 from '../img/auth/3.svg'
import ologo4 from '../img/auth/4.svg'



const WhiteCards = (props) => {
    return (
        






<Segment basic>
            <Grid>
                <Grid.Row className="cards">

                    <Grid.Column className="cards_item" computer={4} tablet={8} style={{ margin: '150px 0 0 0' }}>
                       
                            <Card className="cardforwhite">
                                <Card.Content style={{ margin: '100px 0 0 0', font: '900' }}>
                                    <Card.Header className="card_header" style={{ margin: '1% 0 0 0' }}> <Image src={ologo1} /></Card.Header>
                                    <Card.Meta>
                                        <span as="h2" className='date' style={{ color: '#333' }}>Авторизация через социальные сети
</span>
                                    </Card.Meta>
                                    <Card.Description className="desc" style={{ color: '#fff' }}>
                                        Сбор и актуализация данных о ваших клиентах в удобном интерфейсе
                                    </Card.Description>
                                </Card.Content>
                            </Card>{/*CARD1*/}
                        
                    </Grid.Column>
                    <Grid.Column className="cards_item" computer={4} tablet={8} style={{ margin: '150px 0 0 0' }}>
                        <Card className="cardforwhite">
                            <Card.Content style={{ margin: '100px 0 0 0' }}>
                                <Card.Header style={{ margin: '1% 0 0 0' }}><Image src={ologo2} /></Card.Header>
                                <Card.Meta>
                                    <span className='date' style={{ color: '#333' }}>Авторизация по SMS</span>
                                </Card.Meta>
                                <Card.Description className="desc" style={{ color: '#fff' }}>
                                    Возможность сбора и актуализации данных о ваших клиентах
                                    <br></br>
                                    <br></br>
                                </Card.Description>
                            </Card.Content>
                        </Card>{/*CARD1*/}</Grid.Column>
                        <Grid.Column className="cards_item" computer={4} tablet={8} style={{ margin: '150px 0 0 0' }}>
                    
                        <Card className="cardforwhite">
                            <Card.Content style={{ margin: '100px 0 0 0' }}>
                                <Card.Header style={{ margin: '1% 0 0 0' }}><Image src={ologo3} /></Card.Header>
                                <Card.Meta>
                                    <span className='date' style={{ color: '#333' }}>Авторизация через вызов</span>
                                </Card.Meta>
                                <Card.Description className="desc" style={{ color: '#fff' }}>
                                    Размещение тематической рекламы, проведение опросов<br></br><br></br>
                                    
                                    
                                </Card.Description>
                            </Card.Content>
                        </Card>{/*CARD1*/}
                    
                    </Grid.Column>
                    <Grid.Column className="cards_item" computer={4} tablet={8} style={{ margin: '150px 0 0 0' }}>
                        <Card className="cardforwhite">
                            <Card.Content style={{ margin: '100px 0 0 0' }}>
                                <Card.Header style={{ margin: '1% 0 0 0' }}><Image src={ologo4} /></Card.Header>
                                <Card.Meta centered style={{width:'120%'}}>
                                    <span className='date' style={{ color: '#333', padding: '0'}}>Авторизация через интеграцию с системой управления гостиницы/рестораном</span>
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
export default WhiteCards;