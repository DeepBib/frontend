import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Search from './Views/Search'
import Results from './Views/Results'
import ResultArticle from './Components/ResultArticle'

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<Search/>}/>
          <Route exact path="/:api" element={<Results/>}/>
          <Route exact path="/:api/:sujet" element={<ResultArticle/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
