import { Switch, Route } from 'react-router-dom'
import React from 'react'

import Index from "./pages/Index"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile";
import Catalogue from "./pages/Catalogue";

export default () => {
    return (
        <Switch>
            <Route path='/' component={Index} exact />
            <Route path='/cart' component={Cart} exact />
            <Route path='/profile' component={ Profile } exact/>
            <Route path='/catalogue' component={ Catalogue } exact/>
        </Switch>
    )
}
