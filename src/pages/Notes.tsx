import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/pages/notes.css'
import { FiMenu, FiChevronRight, FiPlus} from 'react-icons/fi'
import api from '../services/api'
import { Link  } from 'react-router-dom'
import { toast } from 'react-toastify'


export interface notesProps {
	title: string,
	body: string,
	date: string,
	comments: Array<string>,
	_id: string,
	__v: Number
}
let timeout: any = ""

toast.configure( {
  autoClose: 1500,
  position: "top-center",
  limit: 3
})


export default function Notes(){
	const [ notes, setNotes ] = useState<notesProps[]>([])
	const [ searchValue, setSearchValue ] = useState<string>('')
	const [ showSidebar, setShowSidebar ] = useState<Boolean>(false)
  const [ execucoes, setExecucoes ] = useState<number>(0)

	async function getNotes(){
    const result = await api.get('/notes')
    setNotes(result.data)
  }
  
  async function searchNote(value: string){
    const result = await api.get(`/notes/search?text=${value}`)
    setNotes(result.data)
  }
  
  async function createNote(){
    const bodyReq = {
      title: "",
      body: "",
      date: new Date()
    }
    const result = await api.post('/notes', bodyReq)
    if(result.status === 201){
      toast.success("nota criada com sucesso")
      getNotes()
    }else {
      toast.error("Falha na criação da nota")
    }
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
        className="notes-view-container">
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
                <button className="button" onClick={createNote}> 
                  Nova Nota
                </button>         
            </div>
            <div className="list">
              <span className="title">
                Lista de notas
              </span>
              {notes.map(note => {
                return (
                  <Link to={`/note/${note._id}`} key={note._id} className="itemContainer">                            
                    <div className="itemContent">
                      <span className="noteTitle">
                        {note.title || "Nova nota..."}
                      </span>
                      <span className="noteBody">
                        {`${note.body.slice(0, 40)}...`}
                      </span>
                      <span className="noteDate">
                        {new Date(note.date).toLocaleDateString()}
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
            <button
              className="floatIcon" 
              onClick={createNote}
            >
              <FiPlus size={32} color={"#FFF"} />
            </button>
      </div>
	)
}