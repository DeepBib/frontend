import React from "react";
import SearchForm from "../Components/SearchForm";
import '../Styles/Search.css';

function Search(){

    return(
        <div className="container">
        <div className="title"><h1>DeepBib.</h1></div>
        <div className="form">
            <SearchForm/>
        </div>
        </div>
    )}

export default Search;