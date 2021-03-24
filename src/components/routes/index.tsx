import React from 'react'
import { Switch } from 'react-router-dom'
import  { Route } from 'react-router'
import ViewCounter from '../pages/viewCounter/ViewCounter'
import NofoundPage from '../pages/notFoundPage/404'
import Home from '../pages/home/Home'

const Routes: React.FC  = () => {
    return ( <React.Fragment>
                <Switch>
                        <Route exact path="/"  component={ Home }></Route>
                        <Route path="/counter" component={ ViewCounter }></Route>
                        <Route component={ NofoundPage }></Route>
                </Switch>
           </React.Fragment>)
}
export default Routes