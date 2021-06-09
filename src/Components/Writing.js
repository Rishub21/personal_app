import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import SearchBar from "./SearchBar"
import Filters from "./Filters"
import PostList from "./PostList"
import data from "../Articles/articleinfo.json"

const Writing = () => { 
    const [articleList, setArticles] = useState(data)
    const [filterBy, setFilters] = useState({ 
        searchString: "",
        category: "",  
    })
    const filterList = ["All", "Venture", "Product", "Other"]


    
    const filterBySearch = (searchString) => {
        setFilters({...filterBy, "searchString": searchString})
    }

    const filterByCateogry = (category) => { 
        setFilters({...filterBy, "category": category})
    }

    useEffect(() => { 
        const newArticleList = articleList.map(article => { 
            const searchString = filterBy.searchString.toLowerCase() 
            const category = filterBy.category.toLowerCase() 
            const articleTitle = article.Title.toLowerCase() 
            const articleSummary = article.Summary.toLowerCase() 

            article.Showing = true 
            if(searchString.length > 0 && !(articleTitle.includes(searchString) ||
               article.KeyWords.some(keyWord => keyWord.toLowerCase().includes(searchString))||
               articleSummary.includes(searchString))){ 
                    article.Showing = false; 
            }
            if(category.length > 0 && !category==article.Category){ 
                article.Showing = false; 
            }
            return article; 
        })
        setArticles(newArticleList)
    }, [filterBy])

    return ( 
        <div className = "page-container">
            <h1 class = "pageTitle"> WRITING </h1>
            <SearchBar filterBySearch = {filterBySearch}/>
             <Filters filterList = {filterList} filterByCategory = {filterByCateogry} />
            <PostList articleList = {articleList} />
        </div>
    )
}

export default Writing 