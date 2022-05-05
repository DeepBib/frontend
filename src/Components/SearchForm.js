import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import CheckBoxAPI from "./CheckBoxAPI";

// const SPRINGER_API_KEY = process.env.SPRINGER_API_KEY;
// const NODE_ENV = process.env.NODE_ENV;

const parseString = require('react-native-xml2js').parseString;



const SearchForm = (props) => {

    const navigate = useNavigate();

    // const [query, setQuery] = useState(props.query || '');
    // const [response, setResponse] = useState("");
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
        console.log("Fetch Data!!!!!!!!!");
        apiState.forEach(api => {

            console.log(api.label, " ", api.checked);
            if(api.checked){
                console.log("La query est  : ",query," Avec l'API est : ",api.label);
                axios.get(`http://export.arxiv.org/api/query?search_query=all:${query}&max_results=12`)
                    .then(response => {
                        // var convert = require('xml-js');

                        // var xml = response.data
                        // convert.parseString(xml, (err, result) => {
                        //     if(err) {
                        //         console.log(err);
                        //     }
                        // });

                        // console.log(typeof(json));
                        // console.log(json);
                        parseString(response, function (err, result) {
                            //step--2 here
                            var convert = require('xml-js');
                            var xml = response.data
                            var json = convert.xml2js(xml, {compact: true, spaces: 4});
                            console.log("TYPE",typeof(json));
                            console.log(json);
                            props.handleResponse(json.feed.entry); 
                       });

                            
                          
                        navigate(`/results/${query}`,{replace:true});
                    }).catch(error => {
                        console.log(error);
                    }).finally(() => {
                        console.log("RESPONSE TYPEE ", typeof(props.response));
                        console.log("RESPONSE lenght ", props.response);
                        props.handleLoading(false);
                    })
            }
        });
        
        
    }

    useEffect(()=>{

        fetch('/api').then(res =>{

        })

    })

    const updateListAPI=(state,label)=>{
        apiState.forEach(element=>{
            if(element.label===label){element.checked=!state};
        })
        console.log(apiState);
        setAPIState(apiState);
    }

    const checkboxToParent =(checkBoxData,label)=>{
        // console.log("valeur check box :",!checkBoxData,"valeur label : ",label);
        setChecked(checkBoxData);
        updateListAPI(checkBoxData,label);
       // console.log(API);
    } 


    const createCheckBox=(api,i)=>{
        return (
            <div className="form-check form-check-inline" key={i}>
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
                    <input type="text" value={props.query} onChange={(e) => props.handleQuery(e.target.value)} name="query" className="form-control" placeholder="Search" required autoComplete="off"></input>
                </div>

                <div className="col-1">
                    <button className="btn" onClick={() => fetchData(props.query)}>Search</button>
                </div>
                    
            </div>
            <div className="API-row form-inline">
                <div className="API-form-text form-check-inline">Bib :</div>
                {apiState.map((api,i)=>createCheckBox(api,i))}
            </div>
        </div> 
    );
}

export default SearchForm;
