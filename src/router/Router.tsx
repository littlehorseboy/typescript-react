import React, { useState } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../components/day11/Home/Home';
import PrivateHome from '../components/day11/PrivateHome/PrivateHome';

export default function Router(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <HashRouter>
      <div>
        <button type="button" onClick={(): void => setIsAuthenticated(!isAuthenticated)}>
          {isAuthenticated ? '登出' : '登入'}
        </button>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/privateHome">PrivateHome</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <PrivateRoute path="/privateHome" component={PrivateHome} isAuthenticated={isAuthenticated} />
      </div>
    </HashRouter>
  );
}
