import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../screens/Home';
import Listas from '../screens/Listas'

class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/listas" component={Listas} />
            </Switch>
        )
    }
}

export default Routes;