import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/pages/notes.css'
import { FiSidebar, FiSave, FiMenu, FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi'

export default function Notes(){
    const [ date, setDate ] = useState<string>('')
    const [ showList, setShowList ] = useState<Boolean>(true)
    const [ showSidebar, setShowSidebar ] = useState<Boolean>(window.innerWidth > 600)
    const [ showContent, setShowContent ] = useState<Boolean>(window.innerWidth > 600)
    

    useEffect(() => {       
        const [ day, month, year] = new Date().toLocaleDateString().split('/')
        setDate(`${year}-${month}-${day}`)
     
    }, [])

    window.addEventListener('resize', (event) => {
        if(window.innerWidth <= 600){
            setShowList(true)
            setShowContent(false)
        }else {
            setShowContent(true)
        }
    })


    return (
        <div 
            className="notes-view-container"
            style={{
                gridTemplateColumns: 
                    showSidebar && showList &&  showContent ? 
                        '250px 250px 2fr' : 
                    (showSidebar && showContent && window.innerWidth > 600) || (showList  && showContent && window.innerWidth > 600) ?  
                        '250px 1fr' : 
                    '1fr'
            }}  
        >
            {showSidebar && 
                <Sidebar closeSidebarFunc={() => setShowSidebar(false)} />               
            }

            {showList &&
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
                        <input type="text" className="searchInput" placeholder="Digite para pesquisar"/>
                        {window.innerWidth > 600 &&
                            <button className="newNote">
                                Nova Nota
                            </button>
                        }               
                    </div>
                    <div className="list">
                        <span className="title">
                            Lista de notas
                        </span>
                        <button className="itemContainer">
                            <div className="itemContent">
                                <span className="noteTitle">
                                    Título da nota
                                </span>
                                <span className="noteBody">
                                    Texto inicial da nota, texto.....
                                </span>
                            </div>
                            <div className="itemIcon">
                                <FiChevronRight size={24}/>
                            </div>
                        </button>
                    </div>


                            
                </div>
            }

            
            {showContent &&
            <div className="content">
                <div className="header">
                    {window.innerWidth > 600 ?
                        <button onClick={() => setShowList(!showList)} className="hideMenu">
                            <FiSidebar size={24} />
                        </button>
                    :
                        <button 
                            onClick={() => {
                                setShowList(true)
                                setShowContent(false)
                            }} 
                            className="hideMenu"
                        >
                            <FiChevronLeft size={24} />
                        </button>
                    }
                    
                    <div className="actions">
                        {window.innerWidth > 600 && 
                            <button className="activeButton">Salvar</button>
                        }                        
                        <button className="inactiveButton">Excluir</button>
                    </div>
                </div>
                <div className="editorContainer">
                    <div className="editorHeader">
                        <input required type="text" className="title" placeholder="Toda jornada merece um belo  título..."/>
                        <input required type="date" className="date" placeholder="Insira a data.."  defaultValue={date}/>
                    </div>
                    <div className="editor">
                        {/* <div className="noteInput" >
                            <span contentEditable>
                                Fale um pouco da sua jornada...
                            </span>
                        </div> */}
                        <textarea className="noteInput" name="note" id="" placeholder="Fale um pouco da sua jornada..."></textarea>
                    </div>
                </div>
            </div>
            }
            
            
            {!showSidebar && showContent && window.innerWidth <= 600 &&
                <div 
                    onClick={() => {
                        setShowList(true)
                        setShowContent(false)
                    }} 
                    className="floatIcon"
                >
                    <button className="saveNote">
                        <FiSave size={32} color={"#FFF"} />
                    </button>
                </div>
            }

            {!showSidebar && showList && window.innerWidth <= 600 &&
                <div className="floatIcon">
                    <button 
                        className="saveNote"
                        onClick={() => {
                            setShowList(false)
                            setShowContent(true)
                        } }    
                    >
                        <FiPlus size={32} color={"#FFF"} />
                    </button>
                </div>
            }


            
        </div>
    )
}