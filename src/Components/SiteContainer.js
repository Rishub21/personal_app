import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Nav from "./Nav"
import Writing from "./Writing"
import Reading from "./Reading"

import Footer from "./Footer"
import SideBar from "./SideBar"
import Header from "./Header"
import ArticleTemplate from "../Articles/articleTemplate" 
import articleList from "../Articles/articleinfo.json"
import {Route, Switch, Link} from 'react-router-dom'


// create component 


const SiteContainer = () => { 
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 1450;
    
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
     
         
        return () => window.removeEventListener("resize", handleWindowResize);
       },[]);

    return (
        <div class = "siteContainer">
            <div>
                {width > breakPoint? (
                    <SideBar />
                ) : (
                    < Header />
                )}
            </div>      
            <Switch>
                <Route path = '/' exact> 
                        <Writing />
                </Route>
                <Route path = '/reading' > 
                        <Reading />
                </Route>
                <Route path = '/article' > 
                        <ArticleTemplate />
                </Route>
                {articleList.map(article => (
                    <Route path = { "/" + article.Path}>                         
                        <ArticleTemplate article = {article}/>
                    </Route> 
                ))


                }


            </Switch>      
        </div>
    )
}

export default SiteContainer 