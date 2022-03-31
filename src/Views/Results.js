import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import '../Styles/Result.css';
import axios from 'axios';

const Result = ( props ) => {

    const location = useLocation();
    
    const [response, setResponse] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetchData();
      }, [])

    const fetchData = () => {
        const query = location.query;        
        axios.get(`http://localhost:8080/articles/${query}`)
            .then(response => {
                console.log("La query est  : ",query);
                
                setResponse(response.data);
                // response.data.map(item => {
                //     console.log("item\n");
                //     console.log(item.title);
                //     console.log(item.summary);
                //     console.log(item.author);
                // });
                
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                console.log("RESPONSE TYPEE ", typeof(response));
                console.log("RESPONSE lenght ", response);
                setIsLoading(false);
            })
    }

    return (
        <div className="carousel">
            {isLoading 
            ?
            <div className="Loader">
                <h1>Cargando...</h1>
            </div>
            :
            response.length > 0 && response.map(item => 
                 
                (
                    <article className="episode">
                        <div className="episode__number">{response.indexOf(item)}</div>
                        <div className="episode__content">
                        <div className="title">{item.title}</div>
                        <div className="story">
                            <p>{item.summary}</p>
                        </div>
                        </div>
                    </article>
                )
            )
            }
        </div>
        
        
    );
}

export default Result;