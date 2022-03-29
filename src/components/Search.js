import axios from 'axios';
import React, {useState, useEffect} from 'react';



const Search =()=>{
    const[term, ] =useState('');

    useEffect(() =>{
        const search = async () =>{
          await axios.get ('https://www.omdbapi.com/?', {
             params:{query: term },
             headers:{
                 Authorization: ''
             }
         });
        }

        search()

    }, [term])

    return (
        <div style={{marginTop:"0px", padding:"40px"} } className="search-bar ui segment" >
           <form  className="ui form">
              <div className="field">
                <label>Search</label>
                <input 
                type="text"  
                
                />
          </div>
         </form>
        </div>
    )
}


export default Search;