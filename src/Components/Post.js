import React from "react"
import ReactDOM from "react-dom"

const Post = (props) => { 
    const article = props.article 
    return ( 
        <a href= {"/"  + article.Path }> 
        <div className = "post">
            <h3 id = "post-heading" class = "postTitle"> {article.Title} </h3>
            <p id= "post-summary"> {article.Summary}</p>
        </div>
        </a>
    )

}


export default Post