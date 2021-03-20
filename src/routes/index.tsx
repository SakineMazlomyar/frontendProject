import React from 'react'
import { Switch } from 'react-router-dom'
import  { Route } from 'react-router';
import ViewCounter from '../components/pages/ViewCounter'
import NofoundPage from '../components/pages/404'
import Home from '../components/pages/Home'

const Routes  = () => {
    return (
        <React.Fragment>  
            <Switch>
                    <Route exact path="/"  component={ Home }></Route>
                    <Route path="/nextpage" component={ ViewCounter }></Route>
                    <Route component={ NofoundPage }></Route>
            </Switch>
        </React.Fragment>  
    )
}
export default Routes