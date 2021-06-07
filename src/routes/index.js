import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '../pages/main/main'
import Search from '../pages/search/search'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/search" exact component={Search} />
        </Switch>
    )
}

export default Routes;