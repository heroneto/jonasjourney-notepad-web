import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiSave } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../services/api'
import '../styles/pages/noteedit.css'
import { useHistory  } from 'react-router-dom'
import { notesProps } from './Notes'

// var timeout: any = ""

const NoteEdit = () => {
  const history = useHistory()
  const [ id, setId ] = useState<string>("")
	const [ title, setTitle ] = useState<string>("")
	const [ date, setDate ] = useState<string>('')
	const [ body, setBody ] = useState<string>("")
	// const [ isEditing, setIsEditing ] = useState<Boolean>(false)
	// const [ isCreating, setIsCreating ] = useState<Boolean>(false)
  // const [ autoSaveFeedback, setAutoSaveFeedback ] = useState<string>("")

  // function getNote(){
  //   const paramter = history.location.pathname.split("/")
  //   const id = paramter[paramter.length-1]
  //   api.get(`/note/${id}`).then(result => {
  //     const note : notesProps = result.data
  //     setId(note._id)
  //     setTitle(note.title)
  //     setBody(note.body)
  //     const [ day, month, year] = new Date(note.date).toLocaleDateString().split('/')
  //     setDate(`${year}-${month}-${day}`)     
  //   })
  // }

  useEffect(() => {
    const paramter = history.location.pathname.split("/")
    const id = paramter[paramter.length-1]
    api.get(`/note/${id}`).then(result => {
      const note : notesProps = result.data
      setId(note._id)
      setTitle(note.title)
      setBody(note.body)
      const [ day, month, year] = new Date(note.date).toLocaleDateString().split('/')
      setDate(`${year}-${month}-${day}`)     
    })
  },[id])

  async function removeNote(){
    const result = await api.delete(`/notes/${id}`)
    if(result.status === 200){
      history.push('/notes')
    }
  }

  async function updateNote(){
    // setAutoSaveFeedback("updating")
    const bodyReq = {
			title,
			body,
			date,
			id
		}
    const result = await api.put(`/notes`, bodyReq)
    if(result.status === 200) {
      history.push('/notes')
    }
    // setAutoSaveFeedback(result.status === 200 ? "success" : "error")    
  }

  // function handleTextBody(value:string){
  //   setBody(value)
	// 	if(isEditing){
  //     clearTimeout(timeout)
	// 		timeout = setTimeout( () => {
  //       updateNote(value)
	// 		}, 100)
	// 	}        
  // }

  return (
      <div className="noteEdit-container">
          <div className="header">
            <Link 
              className="goBack"
              to={"/notes"}
            >
              <FiChevronLeft size={24} />
            </Link>
            
            <div className="actions">
              <button className="activeButton" onClick={updateNote}>
                Atualizar
              </button>               
              <button 
                onClick={removeNote} 
                className="inactiveButton"
              >
                Excluir
              </button>
            </div>
          </div>
          <div className="editorContainer">
            <div className="editorHeader">
              <input value={title} onChange={e => setTitle(e.target.value)} required type="text" className="title" placeholder="Toda jornada merece um belo  título..."/>
              <input onChange={e => setDate(e.target.value)} required type="date" className="date" placeholder="Insira a data.."  defaultValue={date}/>
            </div>
            <div className="editor">
              <textarea value={body} onChange={e => setBody(e.target.value)}  className="noteInput" name="note" id="" placeholder="Fale um pouco da sua jornada..."></textarea>
            </div>
          </div>

          <button 
            className="floatIcon"
            onClick={updateNote}
          >
            <FiSave size={32} color={"#FFF"} />
          </button>

        </div>
  )
}

export default NoteEdit