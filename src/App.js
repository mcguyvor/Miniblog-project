import React from 'react';
import Main from './component/Main';
import CreateBlog from './component/CreateBlog';
import {Route,Switch} from 'react-router-dom';
import LogInPage from './component/LogInPage';
function App() {
  return (
    <Switch >
      <Route exact path = '/' component = {Main} />
      <Route exact path = '/createblog' component = {CreateBlog} />
      <Route exact path = '/login' component = {LogInPage} />
    </Switch>
  );
}

export default App;
