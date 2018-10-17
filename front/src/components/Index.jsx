import React, {Component} from 'react'

// import Aheader from './Aheader';
import {Menu, Layout} from 'antd';


import Profile from './Profile';
import Us from './Us';
import Gallery from './Gallery';
import Order from './Order';
import Value from './Value';
import Zfooter from './Zfooter';

const { Header} = Layout;


class Index extends Component{

    myRef = React.createRef()

    click = (item) => {
        const mish = item.key
        console.log(mish)
        this.refs[mish].scrollIntoView({block: 'end', behavior: 'smooth'})
    }


    render(){
        return(
            <section>
                <Header style={{backgroundColor:'#ffffff ', display:'flex', justifyContent:'center', width:'100%'}}>
                    
                    <Menu
                        onClick={this.click} 
                        mode="horizontal"
                        defaultSelectedKeys={['']}
                        style={{ lineHeight: '64px', backgroundColor:'#ffffff'}}>
                            <Menu.Item key="us"><span>Nosotros</span></Menu.Item>
                            <Menu.Item key="gallery"><span>Galería</span></Menu.Item>
                            <Menu.Item key="value"><span>Cotizar</span></Menu.Item>
                            <Menu.Item key="order"><span>Agendar</span></Menu.Item>
                    </Menu>
                </Header>
                <Profile/>
                <div ref="us"> <Us/> </div>
                <div ref="gallery"> <Gallery/> </div>
                <div ref="value"> <Value/> </div>
                <div ref="order"> <Order/> </div>
                <Zfooter/>  
                <div ref="bye"></div>
            </section>
            
        )
    }
}

export default Index