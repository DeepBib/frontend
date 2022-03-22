import React, { useState } from 'react';
import axios from 'axios';

// const API = [
//     'i3e',
//     'arXiv',
//     'sprinGer',
//     'serApi',
//     'Hall',
// ];

const SearchForm = (props) => {

    const [query, setQuery] = useState(props.query || '');
    const [response, setResponse] = useState("");

    const fetchData = (api,query) => {
        axios.get(`http://localhost:8000/articles/${query}`)
            .then(response => {
                console.log(response);
                setResponse(response);
            }).catch(error => {
                console.log(error);
            })
    }

    return(
        <div>
            <div className="search-row row justify-content-center">
                <div className="form-group col-6">
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} name="query" className="form-control" placeholder="Search" required autocomplete="off"></input>
                </div>

                <div className="col-1">
                    <button className="btn" onClick={() => fetchData(query)}>Search</button>
                </div>
                    
            </div>
            <div className="API-row form-inline">
                <div className="API-form-text form-check-inline">Bib :</div>
            </div>
        </div> 
    );
}

export default SearchForm;


