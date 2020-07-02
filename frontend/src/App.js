import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Links from './screens/Manage/Links';
import Create from './screens/Manage/Links/Create';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to='/sign-in'>Sign in</Link></li>
            <li><Link to='/sign-up'>Sign up</Link></li>

            <li><Link to='/manage/links/create'>Create Link</Link></li>
            <li><Link to='/manage/links/edit'>Edit Link</Link></li>
            <li><Link to='/manage/links'>Links</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/sign-in'><SignIn /></Route>
          <Route path='/sign-up'><SignUp /></Route>

          <Route path='/manage/links/create'><Create /></Route>
          <Route path='/manage/links/edit'><h1>Edit Link</h1></Route>
          <Route path='/manage/links'><Links /></Route>
          <Route path='/'><h1>Home</h1></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;