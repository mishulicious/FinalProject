import React, {Component} from 'react'
import WrappedNormalSignupForm from './SignupForm'




class SignupContainer extends Component{

    render(){
        return(

            <div style={{ backgroundImage: 'url("https://res.cloudinary.com/mishulicious/image/upload/v1539301148/gogasmakeup/flying-paint__605.jpg")',backgroundSize: 'cover',display: 'flex', alignItems: 'center', justifyContent:'center', width: '100vw', height: '100vh'}}>
                <WrappedNormalSignupForm {...this.props}/>
            </div>
            
        )
    }
}

export default SignupContainer