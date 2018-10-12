import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginContainer from './components/auth/login/LoginContainer'
import SignupContainer from './components/auth/signup/SignupContainer'

const Routes = () => {
    return(
        <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer} />
        </Switch>
    )
}

export default Routes