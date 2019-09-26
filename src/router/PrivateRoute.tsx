import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PropsI {
  exact?: boolean;
  path: string;
  component: () => JSX.Element;
  isAuthenticated: boolean; // 假的驗證身分結果
}

export default function PrivateRoute(props: PropsI): JSX.Element {
  const {
    exact, path, component: Component, isAuthenticated,
  } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps): JSX.Element => (
        isAuthenticated
          ? <Component />
          : <Redirect to={{ pathname: '/', state: { from: routeProps.location } }} />
      )}
    />
  );
}
