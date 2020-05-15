import { Switch, Route } from 'react-router-dom'
import React from 'react'

import Index from "./pages/Index"
import Cart from "./pages/Cart"

export default () => {
    return (
        <Switch>
            <Route path='/' component={Index} exact />
            <Route path='/cart' component={Cart} exact />
        </Switch>
    )
}
