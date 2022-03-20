import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        return(
            <input type="text" value={this.value} name="query" className="form-control" placeholder="Search" required autocomplete="off"></input>
        )
    }
}

export default SearchBar;