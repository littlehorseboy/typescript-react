import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { storeTypes } from '../reducers/configureStore';
import { RouteComponentPropsI } from './Router';

interface PropsI {
  exact?: boolean;
  path: string;
  component: (props: RouteComponentPropsI) => JSX.Element;
}

export default function PrivateRoute(props: PropsI): JSX.Element {
  const {
    exact, path, component: Component,
  } = props;

  const isAuthenticated = useSelector(
    (state: storeTypes): boolean => state.loginReducer.isAuthenticated,
  );

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps): JSX.Element => (
        isAuthenticated
          ? <Component routeComponentProps={routeProps} />
          : <Redirect to={{ pathname: '/', state: { from: routeProps.location } }} />
      )}
    />
  );
}
