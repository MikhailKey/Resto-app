import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import {Switch, Route} from 'react-router-dom';
const App = () => {

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
           
            <AppHeader/>
            <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path='/card/' exact component={CartPage}/>
            </Switch>
        </div>
    )
}

export default App;