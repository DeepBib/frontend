import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import '../Styles/Result.css';
import axios from 'axios';
import ResultArticle from "../Components/ResultArticle";
// import Filter from "../Components/Filter";


//Reçoit la réponse et gére sont affichage (Filter et ResultArticle)
// Mais peut lancer une nouvelle requête sans modiifer les API sélectionner

const Result = (props) => {

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
        axios.get(`http://export.arxiv.org/api/query?search_query=all:${query}&max_results=12`)
        .then(response => {
                console.log("La query est  : ",query);
                
                props.handleResponse(response.data);
                // response.data.map(item => {
                //     console.log("item\n");
                //     console.log(item.title);
                //     console.log(item.summary);
                //     console.log(item.author);
                // });
                
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
            <nav className="navbar navbar-light bg-nav">
                <div className='searchBar container-fluid'> 
                    <div className='nav-title'>DeepBib : </div> 
                    <div className='col-6'>
                        <input type="text" name="query" className="form-control col-4" placeholder="Search" required autoComplete="off"></input> 
                        <div className="col-2">
                            <button className="btn">Search</button>
                        </div>
                    </div> 
                </div>
            </nav>


            <div className="row">
                <div className="col-sm-2">
                    {/* <Filter/>   */}
                </div>
               {props.loading ?
                <div className="Loader">
                    <h1>Cargando...</h1>
                </div>
                :props.response.length > 0 && <ResultArticle result={props.response}/>
               }
                
            </div>

        </div>

        
    );
}

export default Result;