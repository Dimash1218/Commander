import React from 'react'
import '../App.css';
import { Button, Checkbox, Form,Grid,Segment} from 'semantic-ui-react'
import Forminput from './forminput';
import Maintitle from './titlemainforalltitles';

const Formmain = () => {
    return(
    <Segment basic centered>
    <Grid container stackable>
        <Grid.Row>
            <Grid.Column textAlign="center" centered widths={4}>
                <Maintitle text="Оставить заявку" />
        <Form style={{padding:'0 20%'}} size='small'>
            <Forminput text="ФИО"/>
            <Forminput text="Наименование компании"/>
            <Forminput text="Телефон"/>
            <Forminput text="E-mail"/>
            
        </Form>

    
    <Button style={{margin:'50px 0 0 0'}} size="large" centered className="button">Начать</Button>
    </Grid.Column>
    </Grid.Row>
    </Grid>
    </Segment>);



}
export default Formmain;