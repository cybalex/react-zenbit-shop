import { Switch, Route } from "react-router-dom"
import React from "react"

import {Home, Cart, Profile, Catalogue} from './components/pages'

export default () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/cart' component={Cart} exact />
            <Route path='/profile' component={ Profile } exact/>
            <Route path='/catalogue' component={ Catalogue } exact/>
        </Switch>
    )
}
