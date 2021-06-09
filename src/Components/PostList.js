import React from "react"
import ReactDOM from "react-dom"
import Post from "./Post"
const PostList = (props) => { 

    const shownArticleList = props.articleList.filter(article => article.Showing)
    return ( 

        <div className = "post-grid">
            {shownArticleList.map(article => (
                <Post article = {article} />)
            )}     
        </div>
    )

}


export default PostList