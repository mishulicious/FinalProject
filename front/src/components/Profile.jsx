import React, {Component} from 'react'
import {Button, Card} from 'antd';
import {Link} from 'react-router-dom'
import Tilt from 'react-tilt';



class Profile extends Component{

    render(){
        
        return(

            <div style={{backgroundImage: 'url("https://res.cloudinary.com/mishulicious/image/upload/v1539614428/gogasmakeup/498093.jpg")',backgroundSize: 'cover',display: 'flex', alignItems: 'center', justifyContent:'center', width: '100vw', height: '82vh'}}>
            <Card
            bordered={false}
                style={{ backgroundColor:"rgb(1,1,1,0.0)", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '40vw', height: '40vw' }}
                cover={<Tilt className="Tilt" options={{ max : 30, speed: 500 }}><img style={{width:'400px',marginBottom: "5%"}} alt="logo" src="https://res.cloudinary.com/mishulicious/image/upload/v1539615295/gogasmakeup/logo1-01.png" /></Tilt>}
            >
                {/* <Button type="primary" style={{border: 'none', backgroundColor:'#4A65FB', width: "100%"}}>
                    <Link to="/login">Entrar</Link>
                </Button> */}
            
                <Button type="primary" style={{marginTop: "10%",width: "100%"}}>
                    <Link to="/signup">Quiero Promociones Exclusivas</Link>
                </Button>
                
            </Card>


            </div>
            
        )
    }
}

export default Profile


// {/* <Button type="primary" size='large' style={{border: 'none', backgroundColor:'hotpink', minheight:'10%', minwidth: "30%"}}>
// <Link to="/value">Cotizar Maquillaje</Link>
// </Button> */}