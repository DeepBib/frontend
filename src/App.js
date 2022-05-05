import React, { useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom"

import Search from './Views/Search'
import Results from './Views/Results'
// import ResultArticle from './Components/ResultArticle'

function App() {

  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(true);



  const handleQuery=(quer)=>{
    setQuery(quer);
  }

  const handleResponse=(rep)=>{
    setResponse(rep);
  }

  const handleLoading=(load)=>{
    setIsLoading(load);
  }



  return (
        <Routes>
          <Route exact path="/" element={<Search query={query} handleQuery={handleQuery} response={response} handleResponse={handleResponse} loading={isLoading} handleLoading={handleLoading}/>}/>
          <Route exact path="/results/:query" element={<Results query={query} handleQuery={handleQuery} response={response} handleResponse={handleResponse} loading={isLoading} handleLoading={handleLoading}/>}/>
          {/* <Route exact path="/:api/:sujet" element={<ResultArticle/>}/> */}
        </Routes>

  );
}

export default App;
