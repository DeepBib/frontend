import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
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
                console.log(response);
                setResponse(response.data);
                response.data.map(item => {
                    console.log("item\n");
                    console.log(item.title);
                    console.log(item.summary);
                    console.log(item.author);
                });
                
            }).catch(error => {
                console.log(error);
            }).finally(() => {
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
            response.map(item => {
                <div className="article">
                    <div className="title">
                        {
                        item.title.map(t => {
                            <h1>{t}</h1>
                        })  
                        }
                    </div>
                    <div className="abstract">
                        <h1>something</h1>
                    </div>
                </div>
            })
            }
        </div>
        
        
    );
}

export default Result;