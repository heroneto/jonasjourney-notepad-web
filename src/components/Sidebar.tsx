import React from 'react'
import '../styles/components/sidebar.css'
import { FiChevronLeft } from 'react-icons/fi'
import { useLocation, NavLink } from 'react-router-dom'

interface sidebarProps {
    closeSidebarFunc: Function
}

const Sidebar : React.FC <sidebarProps> = ({closeSidebarFunc}) => {
    const location = useLocation()



    return (
        <div className="sideBar">
            <div className="hideMenuContainer">
                <button onClick={() => closeSidebarFunc()}>
                    <FiChevronLeft size={24}/>
                </button>
            </div>

            <button className="headerContainer">
                <a href="https://github.com/heroneto">
                    <img src="https://avatars1.githubusercontent.com/u/41599309?s=460&u=65b95962731f7965ead8de961b01c59e66554721&v=4" alt="Heron Eto" />
                </a>                
            </button>

            <div className="menuContainer">
                <span className="title">
                    Menu
                </span>
                <NavLink 
                    to="/notes" 
                    className="menuOption"
                    activeClassName={location.pathname === "/notes" ? "selected" : ""}
                    activeStyle={{
                        backgroundColor: "#D6D4C7"
                    }}
                >
                    Notas
                </NavLink>
                <NavLink 
                    to="/comments" 
                    className="menuOption"
                    activeClassName={location.pathname === "/comments" ? "selected" : ""}
                    activeStyle={{
                        backgroundColor: "#D6D4C7"
                    }}
                >
                    Comentários
                </NavLink>
            </div>




        </div>
    )
}

export default Sidebar