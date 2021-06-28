import React from 'react'
import '../App.css';
import clsx from 'clsx';

const Maintitle = (title) =>{
    return(
        <h1 centered class="title" style={{margin:'0 0 80px 0'}}>{title.text}</h1>
    );
}
export default Maintitle; 