import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Level_1 from '../pages/Level_1';
import Level_2 from '../pages/Level_2';
import Level_3 from "../pages/Level_3";
import Level_4 from "../pages/Level_4";
import Level_5 from "../pages/Level_5";

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}/>
            <Route exact path='/level1' component={Level_1}/>
            <Route exact path='/level2' component={Level_2}/>
            <Route exact path='/level3' component={Level_3}/>
            <Route exact path='/level4' component={Level_4}/>
            <Route exact path='/level5' component={Level_5}/>
        </Switch>
    );
}

export default Main;