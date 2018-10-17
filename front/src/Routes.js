import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginContainer from './components/auth/login/LoginContainer'
import SignupContainer from './components/auth/signup/SignupContainer'
import Index from './components/Index'
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Value from './components/Value';
import Us from './components/Us';
import Order from './components/Order';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer} />
            <Route path="/profile" component={Profile}/>
            <Route path="/value" component={Value}/>
            <Route path="/us" component={Us}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/order" component={Order}/>


        </Switch>
    )
}

export default Routes