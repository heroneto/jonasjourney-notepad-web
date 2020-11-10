import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/pages/notes.css'
import { FiMenu, FiChevronRight, FiPlus } from 'react-icons/fi'
import { IoIosOptions }  from 'react-icons/io'
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
  const [ searchValue, setSearchValue ] = useState<string>("")
  const [ searchDate, setSearchDate ] = useState<string>("")
	const [ showSidebar, setShowSidebar ] = useState<boolean>(false)
  const [ execucoes, setExecucoes ] = useState<number>(0)
  
  const [ showFilters, setShowFilters ] = useState<boolean>(false)
  const [ limit, setLimit ] = useState<number>(10)
  const [ skip, setSkip ] = useState<number>(0)
  const [ total, setTotal ] = useState<number>(0)
  const [ showNextPageButton, setShowNextPageButton ] = useState<boolean>(true)
  const [ sortBy, setSortBy ] = useState<string>("updatedAt")
  const [ sortOrder, setSortOrder ] = useState<string>("-1")

  const nextPage = () => {
    setSkip(skip + limit)
    appendNotes()
  }

	async function appendNotes(){
    const query = `limit=${limit}&skip=${skip+limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`
    const result = await api.get(`/notes?${query}`)
    if(result.status === 200){
      const notesReceved: Array<notesProps> = result.data.notes
      const prevItens = [...notes, ...notesReceved]
      setNotes(prevItens)
      setTotal(result.data.total)
      if(notesReceved.length < limit || skip+limit > total){
        setShowNextPageButton(false)
      }
    }    
  }
  
  async function searchNote(value: string){
    const result = await api.get(`/notes/search?text=${value}`)
    if(result.status === 200){
      console.log(result.data)
      setNotes(result.data)
    }    
  }
  
  async function createNote(){
    const bodyReq = {
      title: "",
      body: "",
      date: new Date()
    }
    const result = await api.post(`/notes`, bodyReq)
    if(result.status === 201){
      toast.success("nota criada com sucesso")
      api.get(`/notes?limit=${limit}&skip=0&sortBy=${sortBy}&sortOrder=${sortOrder}`).then(result => {
        if(result.status === 200){
          setTotal(result.data.total)
          setNotes(result.data.notes)
        }
      })
    }else {
      toast.error("Falha na criação da nota")
    }
  }



  function handleSearch(value:string){ 
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      searchNote(value)
      setExecucoes(exec => exec + 1)
    }, 1000)  
	}
  
  useEffect(() => {   
    api.get(`/notes?limit=${limit}&skip=0&sortBy=${sortBy}&sortOrder=${sortOrder}`).then(result => {
      if(result.status === 200){
        setTotal(result.data.total)
        setNotes(result.data.notes)
        if(result.data.total === result.data.notes){
          setShowNextPageButton(false)
        }
      }
    })    
	}, [limit, sortBy, sortOrder])


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
              <div className="searchData">
                <input 
                  onChange={e => {
                    setSearchDate("")
                    setSearchValue(e.target.value)
                    handleSearch(e.target.value)
                  }} 
                  value={searchValue} 
                  type="text" 
                  className="searchInput" 
                  placeholder="Digite para pesquisar"
                  disabled={searchDate.length > 0}
                />
                <button onClick={() => setSearchValue("")} className="button-clear">
                  Limpar
                </button>
              </div>
              <div className="searchData">
                <input 
                  value={searchDate} 
                  onChange={e => {
                    setSearchValue("")
                    setSearchDate(e.target.value)
                    handleSearch(e.target.value)
                  }}                  
                  type="date" 
                  className="searchInput"
                  disabled={searchValue.length > 0}
                />
                <button onClick={() => setSearchDate("")} className="button-clear">
                  Limpar
                </button>
              </div>

              {execucoes} Execuções
                <button className="button" onClick={createNote}> 
                  Nova Nota
                </button>         
            </div>
            <div className="listHeader">
            {showFilters ?
                <div className="listOptions">
                    <div className="closeOptions">
                      <button onClick={() => setShowFilters(false)} className="toggleOption">
                        <FiChevronRight size={24} />
                      </button>
                    </div>
                    
                    <span className="label">
                      Limite
                    </span>
                    <select disabled={searchValue.length > 0 || searchDate.length > 0} value={limit} onChange={e => setLimit(Number(e.target.value))} className="optionSelector">
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="200">200</option>
                    </select>
                    <span className="label">
                      Ordenar por:
                    </span>
                    <select  disabled={searchValue.length > 0 || searchDate.length > 0} value={sortBy} onChange={e => setSortBy(e.target.value)} className="optionSelector">
                      <option value="createdAt">Data criação</option>
                      <option value="updatedAt">Data Atualização</option>
                    </select>
                    <span className="label">
                      Ordem:
                    </span>
                    <select  disabled={searchValue.length > 0 || searchDate.length > 0} value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="optionSelector">
                      <option value="-1">desc</option>
                      <option value="1">asc</option>
                    </select>
                    </div>
              :
              <button disabled={searchValue.length > 0 || searchDate.length > 0} onClick={() => setShowFilters(true)} className="toggleOption">
                <IoIosOptions size={24} />
              </button>              
            }
            </div> 
            
            <div className="listInfo">
                    <span>Mostrando {notes.length} de {total}</span>
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
              {showNextPageButton && searchValue.length === 0 && searchDate.length === 0 &&
                <button onClick={nextPage} className="itemContainer-nextPage">Ver mais</button> 
              }
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