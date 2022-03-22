import React, { useState } from 'react';
import CheckBoxAPI from "./CheckBoxAPI";

const API = [
    'i3e',
    'arXiv',
    'sprinGer',
    'serApi',
    'Hall',
];

const SearchForm = (props) => {

    const [query, SetQuery] = useState(props.query || '');

    const [checked, setChecked] = useState(false);

    const handleChange =(label)=>{
        setChecked(!checked);
        console.log("ici :",label);
    };

    const createCheckBox=(label)=>{
        return (
            <div className="form-check form-check-inline">
                <CheckBoxAPI
                    label={label}
                    value={checked}
                    onChange={(e)=>handleChange(e)}
                />
            </div>
        )
    }


    // handleSubmit(event) {
    //     alert('A search was submitted: ' + this.state.query);
    //     event.preventDefault();
    // }

    return(
        <div>
            <div className="search-row row justify-content-center">
                <div className="form-group col-6">
                    <input type="text" value={query} onChange={(e) => SetQuery(e.target.value)} name="query" className="form-control" placeholder="Search" required autoComplete="off"></input>
                </div>

                <div className="col-1">
                    <button className="btn" onClick={() => console.log(query)}>Search</button>
                </div>
                    
            </div>
            <div className="API-row form-inline">
                <div className="API-form-text form-check-inline">Bib :</div>
                {API.map(label=>createCheckBox(label))}
            </div>
        </div> 
    );
}

export default SearchForm;


