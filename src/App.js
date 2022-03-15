import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Search from './Views/Search'
import Results from './Views/Results'
import Result_Article from './Components/ResultArticle'

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<Search/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
