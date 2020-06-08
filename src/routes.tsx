import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import HomePage from './pages/Home'

const Routes = () =>{
    
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
        </Switch>
        </BrowserRouter>
    )


}


export default Routes