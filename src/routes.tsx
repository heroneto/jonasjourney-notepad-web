import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Notes from './pages/Notes'
import Comments from './pages/Comments'
import NoteEdit from './pages/NoteEdit'
import NoteCreate from './pages/NoteCreate'


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
                    <Route path="/note/edit/:id">
                        <NoteEdit />
                    </Route>
                    <Route path="/note/create">
                        <NoteCreate />
                    </Route>
                    <Route path="/comments">
                        <Comments />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}