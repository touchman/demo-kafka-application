import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Level_1 from '../pages/Level_1';
import Level_2 from '../pages/Level_2';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}/>
            <Route exact path='/level1' component={Level_1}/>
            <Route exact path='/level2' component={Level_2}/>
        </Switch>
    );
}

export default Main;