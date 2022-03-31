import React from "react";
import ResultArticle from "../Components/ResultArticle";


function ResultsAPI(props){
    const resultsList = this.props.result;

    const printResult=(article)=>{
        <ResultArticle article={article}/>
    }

    return(
        <div className="col-sm-10">
            {resultsList.map(article=>printResult(article))}
        </div>   

    )}

export default ResultsAPI;      
