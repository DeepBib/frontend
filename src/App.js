import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Search from './Views/Search'
import Results from './Views/Results'
import Result_Article from './Components/ResultArticle'

function App() {
  return (
    <div className="">
      <Router>
        <div className="">
          <Switch>

            <Route exact path="/">
              <Search/>
            </Route>

            <Route path="/results/:query">
              <Results/>
            </Route>

          </Switch>

        </div>
      </Router>
    </div>

  );
}

export default App;
