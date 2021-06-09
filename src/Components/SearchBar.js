import React, { useState } from "react"
import ReactDOM from "react-dom"


const SearchBar = (props) => { 
    const [input, setInput] =  useState("")
    const onChange = (e) =>{ 
        setInput(e.target.value)
        props.filterBySearch(e.target.value)

    }
    return( 
        <form class = "search-bar">
            <input value = {input} class = "input-text" type = "text" placeholder="Search" onChange = { e => onChange(e)} /> 
        </form>
    )
}

export default SearchBar