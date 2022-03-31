import React from "react";

const SearchBar = (props) => {
    return (
        <div className="container-fluid">
            <a className="navbar-brand">DeepBib :</a>
            <form className="d-flex">
                <input type="text" value={this.value} name="query" className="form-control me-2" placeholder="Search" required autocomplete="off"></input>
                <button className="btn btn-outline-success"  onClick={()=>console.log(query)}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;