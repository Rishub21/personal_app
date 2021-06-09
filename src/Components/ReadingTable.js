import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import style from '../Styles/Reading.css';


const ReadingTable = (props) => { 
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 1450;


    const readingList = props.readingList
    const renderTitle = (reading) => { 
        if(reading.link == ""){ 
            return  <td > {reading["title"]} </td>
        }else{ 
            return  <td > <a class = "readingLink" href  = {reading["link"]}  target="_blank"> {reading["title"]} </a></td>
        }
    }


    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
     
         
        return () => window.removeEventListener("resize", handleWindowResize);
       },[]);

    return ( 
        <>
            <table class = "reading-table">
                <tr class = "heading-row">     
                    <th class = "column-header" id = "first-col"> Title </th>
                    <th class = "column-header" id = "second-col"> Author </th>
                    <th class = "column-header" id = "third-col"> Topic </th>

                    {width > breakPoint? (
                                                 <th class = "column-header" id = "fourth-col"> Type </th>
                                        
                                        ) : (
                                            < > </>
                    )}
                </tr>
                  { readingList.map( (reading,index) => 
                        {var index = (index + 1)%2
                            var word = index.toString() 
                            return(
                                <tr class = {"content-row-" + word}>
                                                                        
                                    {renderTitle(reading)}
                                    <td> 
                                        {reading["authorList"].map(author => "-" + author + "\n")}
                                    </td>

                                    <td> 
                                        {reading["topicList"].map(topic =>  "-" + topic + "\n")}
                                    </td>
                                      
                                       
                                        {width > breakPoint? (
                                            <td>
                                              {reading["type"]}
                                            </td>
                                        ) : (
                                            < > </>
                                        )}
                            
                                </tr>
                            )
                        }
                    )
                  }
                <br />
            </table> 
        </>
    )


}

export default ReadingTable