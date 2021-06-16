import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '../pages/Main/Main'
import Search from '../pages/Search/Search'
import Movie from '../pages/Movie/Movie'
import Tv from '../pages/Tv/Tv'
import Genre from '../pages/Genre/Genre'
import Info from '../pages/Info/Info'
import NotFound from '../pages/NotFound'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/search" exact component={Search} />
            <Route path="/movie" exact component={Movie} />
            <Route path="/tv" exact component={Tv} />
            <Route path="/genres" exact component={Genre} />
            <Route path="/info/:id/:media" exact component={Info} />
            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Routes;