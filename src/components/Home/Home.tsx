import React from 'react';
import { useIntl } from 'react-intl';
import { RouteComponentPropsI, RouteWithSubRoutes } from '../../router/Router';
import RouterBreadcrumbs from '../../router/RouterBreadcrumbs';

export default function Home(props: RouteComponentPropsI): JSX.Element {
  const { routes } = props;

  const { formatMessage } = useIntl();

  return (
    <>
      <RouterBreadcrumbs />

      <h2 hidden>{formatMessage({ id: 'homepageTitle', defaultMessage: 'Here is the Home.tsx' })}</h2>

      <h3 hidden>{formatMessage({ id: 'homepageSubTitle', defaultMessage: 'internationalization' })}</h3>

      {routes && routes.map((route): JSX.Element => (
        <React.Fragment key={route.path}>
          <RouteWithSubRoutes route={route} />
        </React.Fragment>
      ))}
    </>
  );
}
