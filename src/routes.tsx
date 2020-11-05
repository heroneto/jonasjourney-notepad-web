import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Notes from './pages/Notes'
import Comments from './pages/Comments'


export default function Routes(){
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Notes />
                    </Route>
                    <Route path="/notes">
                        <Notes />
                    </Route>
                    <Route path="/comments">
                        <Comments />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}