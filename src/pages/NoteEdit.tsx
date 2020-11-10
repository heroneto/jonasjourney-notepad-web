import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiSave, FiSend, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../services/api'
import '../styles/pages/noteedit.css'
import { useHistory  } from 'react-router-dom'
import { toast } from 'react-toastify'

// var timeout: any = ""

interface commentsProps {
  title: string,
  body: string,
  date: Date,
  _id: string,
  __v: Number
}

export interface noteProps {
	title: string,
	body: string,
	date: string,
	comments: Array<commentsProps>,
	_id: string,
	__v: Number
}

toast.configure( {
  autoClose: 1500,
  position: "top-center",
  limit: 3
})

const NoteEdit = () => {
  const history = useHistory()
  const paramter = history.location.pathname.split("/")
  const parameterId = paramter[paramter.length-1]


  const [ id, setId ] = useState<string>("")
	const [ title, setTitle ] = useState<string>("")
	const [ date, setDate ] = useState<string>('')
  const [ body, setBody ] = useState<string>("")
  const [ showCommentModal, setShowCommentModal ]  = useState<Boolean>(false)
  const [ comments, setComments ] = useState<commentsProps[]>([])
  const [ newCommentBody, setNewCommentBody ] = useState<string>("")
  const [ commentId, setCommentID ] = useState<string>("")
  const [ editCommentBody, setEditCommentBody ] = useState<string>("")

  useEffect(() => {
    api.get(`/note/${parameterId}`).then(result => {
      if(result.status === 200){
        const note : noteProps = result.data
        setId(note._id)
        setTitle(note.title)
        setBody(note.body)
        const [ day, month, year] = new Date(note.date).toLocaleDateString().split('/')
        setDate(`${year}-${month}-${day}`)
        setComments(note.comments)  
      }
    })
  },[parameterId])

  async function removeNote(){
    const result = await api.delete(`/notes/${id}`)
    if(result.status === 200){
      history.push('/notes')
    }
  }

  async function updateNote(){
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
  }

  async function addComment(){
    const body = {
      body: newCommentBody,
      noteId: id,
      date: new Date()
    }
    const result = await api.post(`/comments`, body)    
    if(result.status === 200){
      setComments(comments => [...comments, result.data])
    }
  }

  async function showCommentEditor(id:string){
    setCommentID(id)
    const result = await api.get(`/comment/${id}`)
    if(result.status === 200){
      setEditCommentBody(result.data.body)
      setShowCommentModal(true)
    }
    
    
  }

  async function removeComment(id: string){
    const result = await api.delete(`/comments/${id}`)
    if(result.status === 200){
      const noteResult = await api.get(`/note/${parameterId}`)
      if(noteResult.status === 200){
        const note : noteProps = noteResult.data        
        setComments(note.comments)  
      }
    }
  }

  async function updateComment(){
    const body = {
        body: editCommentBody,
        date: new Date().toLocaleDateString(),
        id: commentId
    }
    const result = await api.put(`/comments`, body)
    if(result.status === 200){
      const noteResult = await api.get(`/note/${parameterId}`)
      if(noteResult.status === 200){
        const note : noteProps = noteResult.data        
        setComments(note.comments)  
        setShowCommentModal(false)
      }
    }
  }

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
              <textarea maxLength={2000} value={body} onChange={e => setBody(e.target.value)}  className="noteInput" placeholder="Fale um pouco da sua jornada..."/>
              <div className="comments-container">
                <span className="title">
                  Comentários
                </span>
                <div className="inputContainer">
                  <textarea maxLength={250} onChange={e => setNewCommentBody(e.target.value)} value={newCommentBody} className="commentInput"  placeholder="Insira o comentário aqui..."/>
                  <button onClick={addComment}>
                    <FiSend size={24}/>
                  </button>
                </div>                
                <div className="commentList">
              {comments.map(comment => {
                return (
                  <div key={comment._id} className="comment">
                    <span className="commentDate">
                      {comment.date}
                    </span>
                    <span className="commentText">
                      {comment.body}
                    </span>
                    <div className="commentActions">
                      <button onClick={() => removeComment(comment._id)} className="removeComment">
                        Remover
                      </button>
                      <button onClick={() => showCommentEditor(comment._id)} className="editComment">
                        Editar
                      </button>
                    </div>
                  </div>
                )
              })}              
            </div>                
              </div>
            </div>
          </div>
          
          {/* <button 
            className="floatIcon"
            onClick={updateNote}
          >
            <FiSave size={32} color={"#FFF"} />
          </button> */}

          {showCommentModal && 
            <div className="comment-edit-modal">
              <div className="editor">
                <button onClick={() => setShowCommentModal(false)} className="closeModal">
                  <FiX size={24}/>
                </button>
                <div className="inputContainer">
                  <textarea value={editCommentBody} onChange={e => setEditCommentBody(e.target.value)} className="commentInput"  placeholder="Insira o comentário aqui..."/>
                  <button onClick={updateComment}>
                    <FiSend size={24}/>
                  </button>
                </div>
              </div>                    
            </div>
          }


        </div>
  )
}

export default NoteEdit