import React, { useState } from 'react';
// import SearchBar from "./SearchBar";
// import CheckBoxAPI from "./CheckBoxAPI";

// const API = [
//     'i3e',
//     'arXiv',
//     'sprinGer',
//     'serApi',
//     'Hall',
// ];

const SearchForm = (props) => {

    const [query, SetQuery] = useState(props.query || '');

    // function toggleCheckbox (label){
    //     if (this.selectedCheckboxes.has(label)) {
    //       this.selectedCheckboxes.delete(label);
    //     } else {
    //       this.selectedCheckboxes.add(label);
    //     }  
    // }

    // handleSubmit(event) {
    //     alert('A search was submitted: ' + this.state.query);
    //     event.preventDefault();
    // }
     
    // createAPIsection(){
    //     API.map(this.createCheckBox)
    // }

    // function createCheckBox(label){
    //     return (<CheckBoxAPI
    //         label={label}
    //         handleCheckboxChange={this.toggleCheckbox}
    //     />);
    // }

    // const createAPIsection = () => {
    //     API.map(this.createCheckBox)
    // }

    return(
        <div>
            <div className="search-row row justify-content-center">
                <div className="form-group col-6">
                    <input type="text" value={query} onChange={(e) => SetQuery(e.target.value)} name="query" className="form-control" placeholder="Search" required autocomplete="off"></input>
                </div>

                <div className="col-1">
                    <button className="btn" onClick={() => console.log(query)}>Search</button>
                </div>
                    
            </div>
            <div className="API-row form-inline">
                <div className="API-form-text form-check-inline">Bib :</div>
                
                {/* {this.createAPIsection()}                    */}
            </div>
        </div> 
    );
}

export default SearchForm;


