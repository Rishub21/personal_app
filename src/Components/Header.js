import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import style from '../Styles/Header.css';
import Dropdown from './Dropdown'

const Header = () =>{ 

    const [dropDown, setdropDown] = useState(false);  
    const handleClick = () =>{ 
        setdropDown(!dropDown)
    }


    return ( 
        <>
      <div class = "headingContainer">
        <h3 class = "headingName"> Rishub Nahar </h3> 
           
            <div class = "hamburgerGroup" onClick = {handleClick}> 
                
                    <div class = "hambugerLine"></div>
                    <div class = "hambugerLine"></div>
                    <div class = "hambugerLine"></div>
            </div>
           
      </div>

      {dropDown? (
            <Dropdown /> 
        ) : (
            <> </>
        )}
     </> 
    )
}

export default Header