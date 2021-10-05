import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import SecondPage from '../pages/SecondPage';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}/>
            <Route exact path='/second' component={SecondPage}/>
        </Switch>
    );
}

export default Main;