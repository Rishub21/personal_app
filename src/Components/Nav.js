import React from "react"
import ReactDOM from "react-dom"
import style from "./Nav.css"

const Nav = () => { 

    return( 
        <ul className = "navList"style = {style}>
            <li className = "navListItem"> About Me </li>
            <li> Writing </li>
        </ul>    
    )

}

export default Nav