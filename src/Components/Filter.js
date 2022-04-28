import React from "react";

function Filter(props){

    return(

        <div>
            <h3>Filter :</h3>
            <div className="date-filter ro<">
                <h4>Date :</h4>
                <div className="row">
                <input type="date" name="date-1" className="form-date" placeholder="12-02-1999" required ></input>to<input type="date" name="date-1" className="form-date" placeholder="12-02-2012" required ></input>
                </div>
            </div>
            <div className="rank">
                <h4>Rank :</h4>
                <div className="row"></div>
                <div className="row"></div>
            </div>
            {/* <div>
                <h4>Forbidden word :</h4>

            </div> */}
            <button className="btn">Applied</button>



        </div>
    )
}

export default Filter;      
