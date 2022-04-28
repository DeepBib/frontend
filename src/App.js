import React, { useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom"

import Search from './Views/Search'
import Results from './Views/Results'
import NotFound from './Views/NotFound'
import ResultArticle from './Components/ResultArticle'

function App() {
  const [data, setData] = useState({});

  return (
      <Routes>
        <Route exact path="/" element={<Search/>}/>
        <Route exact path="/:query/:sujet" element={<Results responseJson/>}/>
        <Route exact path="/:api/:sujet/:nom" element={<ResultArticle/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>

  );
}

export default App;
