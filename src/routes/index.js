import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '../pages/main/main'
import Search from '../pages/search/search'
import Info from '../pages/info/info'
import NotFound from '../pages/NotFound'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/search" exact component={Search} />
            <Route path="/info/:id/:media" exact component={Info} />
            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Routes;