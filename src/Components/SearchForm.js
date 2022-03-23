import React, { useState } from 'react';
import CheckBoxAPI from "./CheckBoxAPI";

// const API = [
//     'i3e',
//     'arXiv',
//     'sprinGer',
//     'serApi',
//     'Hall',
// ];

const SearchForm = (props) => {

    const [query, SetQuery] = useState(props.query || '');

    const [checked, setChecked] = useState(false);

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


    const handleSubmit=(query)=> {
        //console.log(API);
        console.log("La query est  : ",query," Les API sont : ",API);
       // event.preventDefault();
    }

    return(
        <div>
            <div className="search-row row justify-content-center">
                <div className="form-group col-6">
                    <input type="text" value={query} onChange={(e) => SetQuery(e.target.value)} name="query" className="form-control" placeholder="Search" required autoComplete="off"></input>
                </div>

                <div className="col-1">
                    <button className="btn" onClick={()=>handleSubmit(query)}>Search</button>
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


