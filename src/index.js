import React from "react"
import ReactDOM from "react-dom" 
import SiteContainer from "./Components/SiteContainer"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
ReactDOM.render(<BrowserRouter> <SiteContainer /> </BrowserRouter>, document.getElementById("root"))