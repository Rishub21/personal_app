import React from "react"
import ReactDOM from "react-dom" 

const Filters = (props) => { 

    return(     
        <ul className = "filter-list">
            {props.filterList.map(filter => (<button>  {filter} </button>))}
        </ul>
    )
}
export default Filters

