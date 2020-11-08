import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/pages/notes.css'
import { FiMenu, FiChevronRight, FiPlus} from 'react-icons/fi'
import api from '../services/api'
import { Link  } from 'react-router-dom'


export interface notesProps {
	title: string,
	body: string,
	date: string,
	comments: Array<string>,
	_id: string,
	__v: Number
}
let timeout: any = ""


export default function Notes(){
	const [ notes, setNotes ] = useState<notesProps[]>([])
	const [ searchValue, setSearchValue ] = useState<string>('')
	const [ showSidebar, setShowSidebar ] = useState<Boolean>(window.innerWidth > 1280) 
  const [ execucoes, setExecucoes ] = useState<number>(0)

	async function getNotes(){
    const result = await api.get('/notes')
    setNotes(result.data)
  }
  
  async function searchNote(value: string){
    const result = await api.get(`/notes/search?text=${value}`)
    setNotes(result.data)
	}


  function handleSearch(value:string){   
		setSearchValue(value)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      searchNote(value)
      setExecucoes(exec => exec + 1)
    }, 1000)  
	}


  
  useEffect(() => {       
		getNotes()
	}, [])


	return (
      <div 
        className="notes-view-container"
        style={{
          gridTemplateColumns: (showSidebar && window.innerWidth > 600) ?  '250px 1fr' : '1fr' }}  
      >
        {showSidebar && 
          <Sidebar closeSidebarFunc={() => setShowSidebar(false)} />               
        }

          <div 
            className="listContainer"
          >            
            <div className="titleContainer">
              <button onClick={() => setShowSidebar(!showSidebar)} className="toggleMenu">
                <FiMenu size={24}/>
              </button>
              <span className="title">
                Jonas Journey Notepad 
              </span>
            </div>
            <div className="listActionsContainer">
              <input 
                onChange={e => handleSearch(e.target.value)} 
                value={searchValue} 
                type="text" 
                className="searchInput" 
                placeholder="Digite para pesquisar"
              />
              {execucoes} Execuções
              {window.innerWidth > 600 &&
                <Link to="/note/create" className="button">                  
                  Nova Nota
                </Link>
              }               
            </div>
            <div className="list">
              <span className="title">
                Lista de notas
              </span>
              {notes.map(note => {
                return (
                  <Link to={`/note/edit/${note._id}`} key={note._id} className="itemContainer">                            
                    <div className="itemContent">
                      <span className="noteTitle">
                        {note.title}
                      </span>
                      <span className="noteBody">
                        {note.body.slice(0, 30)}
                      </span>
                    </div>
                    <div className="itemIcon">
                      <FiChevronRight size={24}/>
                    </div>
                  </Link>
                )
              })}
            </div>                            
          </div>
            <Link
              to="/note/create"
              className="floatIcon" 
            >
              <FiPlus size={32} color={"#FFF"} />
            </Link>
      </div>
	)
}