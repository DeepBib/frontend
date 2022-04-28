import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CheckBoxAPI from "./CheckBoxAPI";

//Modifie la query et l'API List 
const SearchForm = (props) => {

    const navigate = useNavigate();

    const [query, setQuery] = useState(props.query || '');
    const [response, setResponse] = useState("");
    const [checked, setChecked] = useState(false);
    const [apiState, setAPIState] = useState(
        [
            { label : 'i3e',        checked : false },
            { label : 'arXiv',      checked : false },
            { label : 'springer',   checked : false },
            { label : 'Hall',       checked : false },
            { label : 'serp',       checked : false }
        ]
    );

    const fetchData = (query) => {

        apiState.forEach(api => {

            console.log(api.label, " ", api.checked);
            if(api.checked){
                console.log("La query est  : ",query," Avec l'API est : ",api.label);
                axios.get(`http://localhost:8080/${api.label}/${query}`)
                    .then(response => {
                        console.log(response);
                        setResponse(response.data);
                        navigate(`/${api.label}`, { responseJson:  response.data});
                    }).catch(error => {
                        console.log(error);
                    })
            }
        });
        
        
    }

    const updateListAPI=(state,label)=>{
        apiState.forEach(element=>{
            if(element.label===label){element.checked=!state};
        })
        console.log(apiState);
        setAPIState(apiState);
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
                {apiState.map(api=>createCheckBox(api))}
            </div>
        </div> 
    );
}

export default SearchForm;
