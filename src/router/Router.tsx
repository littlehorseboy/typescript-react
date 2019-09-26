import React, { useState } from 'react';
import {
  HashRouter, Route, Link, RouteComponentProps,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../components/day11/Home/Home';
import About from '../components/day11/About/About';
import Blog from '../components/day11/Blog/Blog';
import PrivateHome from '../components/day11/PrivateHome/PrivateHome';

interface RouteWithSubRoutesPropsI {
  route: RouteI;
}

export function RouteWithSubRoutes(props: RouteWithSubRoutesPropsI): JSX.Element {
  const { route } = props;

  return (
    route.isPrivate
      ? (
        <PrivateRoute path="/privateHome" component={PrivateHome} isAuthenticated />
      )
      : (
        <Route
          path={route.path}
          render={(renderProps): JSX.Element => (
            <route.Component routeComponentProps={renderProps} routes={route.routes} />
          )}
        />
      )
  );
}

export interface RouteComponentPropsI {
  routeComponentProps: RouteComponentProps;
  routes?: RouteI[];
}

interface RouteI {
  path: string;
  Component: (props: RouteComponentPropsI) => JSX.Element;
  breadcrumbName: string;
  routes?: RouteI[];
  isPrivate?: boolean;
}

export const routes: RouteI[] = [
  {
    path: '/',
    Component: Home,
    breadcrumbName: '首頁',
    routes: [
      {
        path: '/about',
        Component: About,
        breadcrumbName: '關於我',
      },
      {
        path: '/blog',
        Component: Blog,
        breadcrumbName: '部落格',
      },
      {
        path: '/privateHome',
        Component: PrivateHome,
        breadcrumbName: 'PrivateHome',
        isPrivate: true,
      },
    ],
  },
];

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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/privateHome">PrivateHome</Link>
          </li>
        </ul>

        <hr />

        {routes.map((route): JSX.Element => (
          <React.Fragment key={route.path}>
            <RouteWithSubRoutes route={route} />
          </React.Fragment>
        ))}

        <PrivateRoute path="/privateHome" component={PrivateHome} isAuthenticated={isAuthenticated} />
      </div>
    </HashRouter>
  );
}
