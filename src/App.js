import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { NewSurveyPage } from "./Pages/NewSurveyPage";
import { ResultsPage } from "./Pages/ResultsPage";

const App = () => {
  return (
    <div className="mx-8 my-8">
      <Router>
        <Header>Ankete</Header>
        <NavMenu />
        <div className="flex justify-center items-center">
          <div className="w-full">
            <Switch>
              <Route path="/uredivanje" component={NewSurveyPage} />
              <Route path="/rezultati" component={ResultsPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};
export default App;
