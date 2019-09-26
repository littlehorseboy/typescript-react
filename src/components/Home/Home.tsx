import React from 'react';
import { RouteComponentPropsI, RouteWithSubRoutes } from '../../router/Router';
import RouterBreadcrumbs from '../../router/RouterBreadcrumbs';

export default function Home(props: RouteComponentPropsI): JSX.Element {
  const { routes } = props;

  return (
    <>
      <RouterBreadcrumbs />

      <h2>Home</h2>

      {routes && routes.map((route): JSX.Element => (
        <React.Fragment key={route.path}>
          <RouteWithSubRoutes route={route} />
        </React.Fragment>
      ))}
    </>
  );
}
