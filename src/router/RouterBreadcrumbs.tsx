import React from 'react';
import { Link as RouterLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { routes } from './Router';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(0.5),
  },
}));

function RouterBreadcrumbs(props: RouteComponentProps): JSX.Element {
  const classes = useStyles();

  const { location } = props;

  const matchedRoutes = matchRoutes(routes, location.pathname);

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        {matchedRoutes.map((matchedRoute, index): JSX.Element => (
          <React.Fragment key={matchedRoute.route.path as string}>
            {matchedRoute.route && (
              matchedRoutes.length === index + 1
                ? (
                  <Typography>
                    {matchedRoute.route.breadcrumbName}
                  </Typography>
                )
                : (
                  <Link component={RouterLink} to={matchedRoute.route.path as string}>
                    {matchedRoute.route.breadcrumbName}
                  </Link>
                )
            )}
          </React.Fragment>
        ))}
      </Breadcrumbs>
    </div>
  );
}

export default withRouter(RouterBreadcrumbs);
