import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/pages/notes.css'
import { FiSidebar, FiSave } from 'react-icons/fi'

export default function Notes(){
    const [ date, setDate ] = useState<string>('')
    const [ showSidebar, setShowSidebar ] = useState<Boolean>(true)

    useEffect(() => {
        
        const [ day, month, year] = new Date().toLocaleDateString().split('/')
        setDate(`${year}-${month}-${day}`)
    }, [])

    return (
        <div className="container">
            <div className="sidebarContainer">
                <Sidebar />
            </div>
            <div className="content">
                <div className="header">
                    <button onClick={() => setShowSidebar(!showSidebar)} className="hideMenu">
                        <FiSidebar size={24} />
                    </button>
                    
                    <div className="actions">
                        <button className="activeButton">Salvar</button>
                        <button className="inactiveButton">Excluir</button>
                    </div>
                </div>
                <div className="editorContainer">
                    <div className="editorHeader">
                        <input required type="text" className="title" placeholder="Toda jornada merece um belo  título..."/>
                        <input required type="date" className="date" placeholder="Insira a data.."  defaultValue={date}/>
                    </div>
                    <div className="editor">
                        <textarea className="noteInput" name="note" id="" placeholder="Fale um pouco da sua jornada..."></textarea>
                    </div>
                </div>
            </div>

            <div className="floatIcon">
                <button className="saveNote">
                    <FiSave size={24} color={"#FFF"} />
                </button>
            </div>
        </div>
    )
}