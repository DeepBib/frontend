import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../Styles/Result.css';
import axios from 'axios';
import ResultArticle from "../Components/ResultArticle";
import Filter from "../Components/Filter";

const parseString = require('react-native-xml2js').parseString;


//Reçoit la réponse et gére sont affichage (Filter et ResultArticle)
// Mais peut lancer une nouvelle requête sans modiifer les API sélectionner

const Result = (props) => {
    const navigate = useNavigate();

    const location = useLocation();
   // const responseJson = props.navigation.getParam("response");
    //response
    //query + api 

    // const [response, setResponse] = useState({});
    // const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        //fetchData();
        //console.log(responseJson);
        // console.log("Location  : ",location);
        // console.log("props  : ",props);
        // console.log("response  : ",props.response);

        //setResponse(responseJson.data);
      }, [])

    const fetchData = () => {
        const query = location.query; 
        props.handleLoading(true);       
        axios.get(`http://export.arxiv.org/api/query?search_query=all:${query}&max_results=12`)
        .then(response => {
            parseString(response, function (err, result) {
                //step--2 here
                var convert = require('xml-js');
                var xml = response.data
                var json = convert.xml2js(xml, {compact: true, spaces: 4});
                console.log("TYPE",typeof(json));
                console.log(json);
                props.handleResponse(json.feed.entry); 
            });
            navigate(`/results/${query}`,{replace:true});
                
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                console.log("RESPONSE TYPEE ", typeof(props.response));
                console.log("RESPONSE lenght ", props.response);
                props.handleLoading(false);
            })
    }

    return (
        //-------------------------------- MODE CAROUSSEL----------------------------------
        // <div className="carousel">
        //     {isLoading 
        //     ?
        //     <div className="Loader">
        //         <h1>Cargando...</h1>
        //     </div>
        //     :
        //     response.length > 0 && response.map(item => 
                 
        //         (
        //             <article className="episode">
        //                 <div className="episode__number">{response.indexOf(item)}</div>
        //                 <div className="episode__content">
        //                 <div className="title">{item.title}</div>
        //                 <div className="story">
        //                     <p>{item.summary}</p>
        //                 </div>
        //                 </div>
        //             </article>
        //         )
        //     )
        //     }
        // </div>
        //------------------------------------------------------------------------------------
        <div>
            <nav className="navbar sticky-top navbar-light bg-nav">
                <div className='searchBar container-fluid'> 
                    <div className='navbar-brand nav-title'>DeepBib : </div> 
                    <div className='d-flex'>
                        <input type="text" value={props.query} onChange={(e) => props.handleQuery(e.target.value)} name="query" className="form-control me-2" placeholder="Search" required autoComplete="off"></input> 
                        <button className="btn" onClick={() => fetchData(props.query)}>Search</button>
                    </div> 
                </div>
            </nav>


            <div className="row">
                <div className="col-sm-2">
                    <Filter className="filter-bar"/>  
                </div>
               {props.loading ?
                <div className="Loader">
                    <h1>chargement...</h1>
                </div>
                :props.response.length > 0 && <ResultArticle result={props.response}/>
               }
                
            </div>

        </div>

        
    );
}

export default Result;