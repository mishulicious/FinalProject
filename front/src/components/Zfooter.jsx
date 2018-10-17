import React, {Component} from 'react'
import {Layout, Icon} from 'antd';





const { Footer} = Layout;

class Zfooter extends Component{

    render(){
        return(

            <section>
                <Footer style={{ textAlign: 'center' }}>
                <p>Síguenos en nustras redes sociales o envíanos un correo con tus comentarios.</p>
                    <div className="icons-list">
                        <a rel="noopener noreferrer" target="_blank" href='https://www.facebook.com/gogasmakeupmx/'> <Icon style={{fontSize:'25px'}} type="facebook" theme="filled" /></a>
                        <a rel="noopener noreferrer" target="_blank" href='https://www.instagram.com/gogasmakeupmx/'>  <Icon style={{fontSize:'25px', padding:'0 50px'}} type="instagram" theme="filled"/></a>
                        <a rel="noopener noreferrer" target="_blank" href='mailto:makeupgogas@gmail.com'><Icon style={{fontSize:'25px'}} type="mail" theme="filled"/></a>
                      
                    </div>
                </Footer>  
            </section>
            
        )
    }
}

export default Zfooter