import React from 'react'
import { Switch } from 'react-router-dom'
import  { Route } from 'react-router';
import ViewCounter from '../components/pages/viewCounter/ViewCounter'
import NofoundPage from '../components/pages/404/404'
import Home from '../components/pages/home/Home'

const Routes  = () => {
    return (
        <React.Fragment>  
            <Switch>
                    <Route exact path="/"  component={ Home }></Route>
                    <Route path="/counterPage" component={ ViewCounter }></Route>
                    <Route component={ NofoundPage }></Route>
            </Switch>
        </React.Fragment>  
    )
}
export default Routes