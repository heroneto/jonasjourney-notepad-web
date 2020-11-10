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
                        <Route exact path="/">
                        <Notes />
                    </Route>
                    <Route path="/notes">
                        <Notes />
                    </Route>
                    <Route path="/note/:id">
                        <NoteEdit />
                    </Route>
                </Switch>
        </BrowserRouter>
    )
}