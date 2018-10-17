import React, {Component} from 'react'
import Diagnostico from './Diagnostico/Diagnostico';

class Value extends Component{
    state = {

    }
    render(){
        return(
            <section id='value'>
            <h2 style={{textAlign:'center', lineHeigt:'3rem'}}>COTIZACIÓN</h2>
               
               <Diagnostico/>
            

            </section>

            
        )
    }
}

export default Value