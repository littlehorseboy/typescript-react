import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LanguageButton from './LanguageButton/LanguageButton';
import Login from '../Login/Login';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#24292E',
    color: '#FFFFFF',
  },
}));

export default function Header(): JSX.Element {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Typography>Header</Typography>
      <div>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/privateHome">PrivateHome</Button>
        <Button color="inherit" component={Link} to="/formikPractice">示範表單</Button>
        <Button color="inherit" component={Link} to="/draftjs">Draft.js</Button>

        <LanguageButton />
      </div>

      <Login />
    </Container>
  );
}
