import React from 'react'
import {
    Switch,
    Route,
    BrowserRouter
} from 'react-router-dom'
import Notes from './pages/Notes'
import NoteEdit from './pages/NoteEdit'


export default function Routes(){
    return (
        <BrowserRouter>
                <Switch>
                        <Route exact path={process.env.PUBLIC_URL + "/"}>
                        <Notes />
                    </Route>
                    <Route path={process.env.PUBLIC_URL + "/notes"}>
                        <Notes />
                    </Route>
                    <Route path={process.env.PUBLIC_URL + "/note/:id"}>
                        <NoteEdit />
                    </Route>
                </Switch>
        </BrowserRouter>
    )
}