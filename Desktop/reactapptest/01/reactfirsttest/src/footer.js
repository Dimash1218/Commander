import './/App.css';
import { Button, Checkbox, Form, Grid, Segment, Image, Container } from 'semantic-ui-react'
import logo from './/img/picfor/footerlogo.svg'
import what from './/img/picfor/whatsapp.svg'
import face from './/img/picfor/face.svg'
import ig from './/img/picfor/ig.svg'

const Footer = () => {
    return (
        <Segment style={{background:'#07B3EA'}} basic>
            <Container>
                <div className="footer">
                    <Image size='small' src={logo}/>
                    <div verticalAlign="middle"  className="logos">
                        <a href="#"><Image style={{margin:' 0 5px 0 0'}}src={what} /></a>
                        <a href="#"><Image src={face} style={{margin:' 0 5px 0 0'}} /></a>
                        <a href="#"><Image src={ig} /></a>
                        
                        
                    </div>
                </div>
            
            </Container>
        </Segment>);
        }
        export default Footer;
        
            