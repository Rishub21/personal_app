import React from "react"
import ReactDOM from "react-dom"
import style from '../Styles/SideBar.css';
import profile from '../Images/profile.png'
import { NavLink } from "react-router-dom"


const SideBar = () => { 
    const links = [
        {   
            id : 1,
            path: "/about",
            text: "about", 
        },
        { 
            id : 2,
            path: "/",
            text: "writing"
        },
        { 
            id : 3,
            path: "/reading",
            text: "reading"
        }
    ]
    return ( 
        <div class="sideBarContainer" style = {style}>  
            <div class= "sideBarMenu">
                <img class= "sideBarImg" src= {profile}  /> 
                <h2 class = "sideBarName" > Rishub Nahar </h2>

                {links.map( link => { 
                    return ( 
                        <h2 >  
                            <NavLink to = {link.path} class = "sideBarHeading" activeClassName="active-link" exact> {link.text}</NavLink>
                        </h2>
                    )
                })}
            </div>
        </div>
    )
}
export default SideBar; 