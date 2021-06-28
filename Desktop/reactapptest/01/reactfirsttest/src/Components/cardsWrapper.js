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
import clsx from 'clsx';
import Maintitle from './titlemainforalltitles';




const CardsWrapper = ({ reverse, title }) =>{
    return(
        <Header as="h3" textAlign="center" className={clsx('cards_wrapper',{
            'noreverse': !reverse,
            'reverse': reverse

        })}  style={{padding:"90px 0px 90px 0"}}><span className="title">{(title)}</span></Header>


    );
}
export default CardsWrapper;