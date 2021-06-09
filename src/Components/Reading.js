import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import ReadingTable from "./ReadingTable"
import raw_readings from "../Readings/readings.json"


//remember that the return will be called before useEffect, because useEffect mimicks the logic of componentDidMount, that is it is called after the component is rendered 
const Reading = () =>{
    
    const [readingList, setReadingList] = useState([]) 
    useEffect(() => { 
            const raw_reading_list = raw_readings.results
            const reading_list = raw_reading_list.map(result =>  {
                const author_list = result.properties.Author["multi_select"].map( author => {return author["name"]})
                const title = result.properties.Name["title"][0]["plain_text"] 
                const topic_list = result.properties.Topic["multi_select"].map(topic => {return topic["name"]})
                const type = function(){ 
                    if(result.properties.Type["multi_select"].length > 0){ 
                        return result.properties.Type["multi_select"][0]["name"]
                    }else{
                        return ""
                    }
                }(); 
                const reading_link = function(){ 
                    if(result.properties.hasOwnProperty("Link")){ 
                        return result.properties.Link["url"]
                    }else{ 
                        return "" 
                    }
                }();
                const reading = { 
                    "authorList" : author_list,
                    "title": title,
                    "topicList": topic_list,
                    "type": type,
                    "link": reading_link,
                }
                return reading 
            })
            setReadingList(reading_list)
    }, readingList)

    return( 
        <div className = "page-container">
            <h1 class = "pageTitle">Reading </h1>
            <ReadingTable readingList = {readingList}/>
        </div>
    )
}

export default Reading 


// result.properties.Author["multi_select"] -> array of authors 
// result.properties.Name["title"][0]["plain_text"] - title value
//result.properties.Topic["multi_select"] -> array of topics 
// result.properties.Type["multi_select"][0]["name"] -> type of read 



