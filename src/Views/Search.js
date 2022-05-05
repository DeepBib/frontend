import React, { useState } from 'react';
import SearchForm from "../Components/SearchForm";
import '../Styles/Search.css';

const Search = (props) => {

    // const [query, setQuery] = useState("");
    // const [response, setResponse] = useState("");


    // const handleQuery=(quer)=>{
    //     setQuery(quer);
    // }

    // const handleResponse=(rep)=>{
    //     setResponse(rep);
    // }
    return(
        <div className="container">
        <div className="title"><h1>DeepBib.</h1></div>
        <div className="form">
            <SearchForm query={props.query} response={props.response} handleQuery={props.handleQuery} handleResponse={props.handleResponse} handleLoading={props.handleLoading}/>
        </div>
        </div>
    )}

export default Search;