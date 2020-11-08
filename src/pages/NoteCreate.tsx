import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiPlus, FiSidebar } from 'react-icons/fi'
import api from '../services/api'
import '../styles/pages/notecreate.css'
import { Link, useHistory } from 'react-router-dom'

const NoteCreate = () => {
  const history = useHistory()
  const [ title, setTitle ] = useState<string>("")
  const [ date, setDate ] = useState<string>('')
  const [ body, setBody ] = useState<string>("")
  
  // async function removeNote(){   
  //   const result = await api.delete(`/notes/${id}`)
  //   if(result.status === 200){      
  //   }
  // }
  
  async function saveNote(){
    const bodyReq = {
      title,
      body,
      date
    }
    const result = await api.post('/notes', bodyReq)
    if(result.status === 201){
      history.push('/notes')
    }
  }

  useEffect(() => {
    const [ day, month, year] = new Date().toLocaleDateString().split('/')
    setDate(`${year}-${month}-${day}`)     
  },[])
  

  return (
      <div 
          className="noteCreate-container"
        >
          <div className="header">
            <Link 
              className="goBack"
              to={"/notes"}
            >
              <FiChevronLeft size={24} />
            </Link>
            
            <div className="actions">
              <button className="activeButton" onClick={saveNote}>
                Salvar
              </button>               
              {/* <button 
                onClick={removeNote} 
                className="inactiveButton"
              >
                Excluir
              </button> */}
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
            onClick={saveNote}
          >
            <FiPlus size={32} color={"#FFF"} />
          </button>

        </div>
  )
}

export default NoteCreate