import React, { useState } from 'react';
import axios from 'axios';
import CheckBoxAPI from "./CheckBoxAPI";

const SearchForm = (props) => {

    const [query, setQuery] = useState(props.query || '');
    const [response, setResponse] = useState("");
    const [checked, setChecked] = useState(false);

    const fetchData = (api,query) => {
        console.log("La query est  : ",query," Les API sont : ",API);
        axios.get(`http://localhost:8000/articles/${query}`)
            .then(response => {
                console.log(response);
                setResponse(response);
            }).catch(error => {
                console.log(error);
            })
    
    const API = [
        { label : 'i3e',        checked : false },
        { label : 'arXiv',      checked : false },
        { label : 'springer',   checked : false },
        { label : 'Hall',       checked : false },
        { label : 'serp',       checked : false }
    ];

    const updateListAPI=(state,label)=>{
        API.forEach(element=>{
            if(element.label===label){element.checked=!state};
        })
        console.log(API)
    }

    const checkboxToParent =(checkBoxData,label)=>{
        //console.log("valeur check box :",!checkBoxData,"valeur label : ",label);
        setChecked(checkBoxData);
        updateListAPI(checkBoxData,label);
       // console.log(API);
    } 


    const createCheckBox=(api)=>{
        return (
            <div className="form-check form-check-inline">
                <CheckBoxAPI
                    checkboxToParent={checkboxToParent}
                    label={api.label}
                    value={api.checked}
                />
            </div>
        )
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
                {API.map(api=>createCheckBox(api))}
            </div>
        </div> 
    );
}

export default SearchForm;


