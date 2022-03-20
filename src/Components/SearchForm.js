import React from "react";
import SearchBar from "./SearchBar";
import CheckBoxAPI from "./CheckBoxAPI";

const API = [
    'i3e',
    'arXiv',
    'sprinGer',
    'serApi',
    'Hall',
  ];
class SearchForm extends React.Component{


    constructor(props) {
        super(props);
        this.state = {query: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({query: event.target.query});
      }
    
    handleSubmit(event) {
        alert('A search was submitted: ' + this.state.query);
        event.preventDefault();
    }
     
    toggleCheckbox (label){
        if (this.selectedCheckboxes.has(label)) {
          this.selectedCheckboxes.delete(label);
        } else {
          this.selectedCheckboxes.add(label);
        }  
    }

    createCheckBox(label){
        <CheckBoxAPI
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
        />
    }

    createAPIsection(){
        API.map(this.createCheckBox)
    }

    render(){
        return(
            <div>
                <div className="search-row row justify-content-center">
                    <div className="form-group col-6">
                        <SearchBar props={this.state.query}/>
                    </div>

                    <div className="col-1">
                        <button type="submit" className="btn">Search</button>
                    </div>
                        
                </div>
                <div className="API-row form-inline">
                    <div className="API-form-text form-check-inline">Bib :</div>
                    {/* {this.createAPIsection()}                    */}
                </div>
            </div> 
        )
    }
};

export default SearchForm;


