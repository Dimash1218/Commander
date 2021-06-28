import React from 'react'
import '../App.css';
import { Button, Checkbox, Form,Grid,Segment} from 'semantic-ui-react'
const Forminput = (text) =>{
    return(<Form.Field size='small'>
              
        <input style={{color: '#132743 50 %', border: '1px solid #07B3EA', padding:'15px 20px 15px 30px'}}placeholder={(text.text)} />
    </Form.Field>);
}
export default Forminput;