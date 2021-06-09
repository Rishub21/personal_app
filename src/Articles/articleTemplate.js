import React , {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import ReactMarkdown from "react-markdown";
import {useMarked}  from 'use-marked-hook'
import file from './uberCredit.md'


const ArticleTemplate = (props) => { 
    const [markdown, setMarkdown] = useState(""); 

    const html = useMarked(markdown)

    useEffect(() => { 
        fetch(file)
            .then(res => res.text())
            .then(markdown =>  setMarkdown(markdown));

    }, [])

    return( 
        <div className = "page-container">
            <div dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
    )

}

export default ArticleTemplate 