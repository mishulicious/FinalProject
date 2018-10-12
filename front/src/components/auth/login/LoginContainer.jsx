import React, {Component} from 'react'
// import LoginForm from './LoginForm';
import WrappedNormalLoginForm from './LoginForm';
//import {loginServ} from "../../../services/authService"

class LoginContainer extends Component{


    render(){
        
        return(
            <div style={{ backgroundImage: 'url("https://res.cloudinary.com/mishulicious/image/upload/v1539303263/gogasmakeup/Photography-Viktoria-Stutz-2-680x510.jpg")',backgroundSize: 'cover', backgroundPosition: 'center',display: 'flex', alignItems: 'center', justifyContent:'center', width: '100vw', height: '100vh'}}>
                <WrappedNormalLoginForm {...this.props}/>
            </div>
        )
    }
}

export default LoginContainer