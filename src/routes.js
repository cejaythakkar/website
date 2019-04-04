import * as React from 'react';
import App from './App';
import About from './containers/about';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />        
                <Route path="/about" component={About} />        
            </Switch>
        </BrowserRouter>
    );
}