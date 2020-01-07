import React from 'react';
import Calculator from "./containers/Calculator/Calculator";
import {Route, Switch} from "react-router";

const App = () => {
  return (
      <div className='App'>
          <Switch>
              <Route path='/' component={Calculator}/>
          </Switch>
      </div>
  );
};

export default App;
