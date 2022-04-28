import React from "react";
import SearchForm from "../Components/SearchForm";
import '../Styles/Search.css';


// Récupére la query de l'utilisateur et les api sélectionner
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