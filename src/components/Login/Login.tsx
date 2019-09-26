import React, { useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { storeTypes } from '../../reducers/configureStore';
import { LoginInfoI } from '../../reducers/login/login';
import { login, logout } from '../../actions/login/login';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'inline-block',
  },
  inputBase: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

export default function Login(): JSX.Element {
  const classes = useStyles();

  const loginInfo = useSelector((state: storeTypes): LoginInfoI => state.loginReducer);

  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleClickLogin = (): void => {
    if (!name) {
      alert('請輸入名稱');
      return;
    }

    dispatch(login({ name }));
  };

  const handleClickLogout = (): void => {
    dispatch(logout());
  };

  return (
    <div>
      {loginInfo.isAuthenticated
        ? (
          <>
            <Typography display="inline">姓名：</Typography>
            {loginInfo.userInfo.name}

            <Button color="primary" variant="contained" onClick={handleClickLogout}>登出</Button>
          </>
        )
        : (
          <>
            <Typography display="inline">姓名：</Typography>
            <Paper className={classes.paper}>
              <InputBase className={classes.inputBase} value={name} onChange={handleChangeName} />
            </Paper>

            <Button color="primary" variant="contained" onClick={handleClickLogin}>登入</Button>
          </>
        )}
    </div>
  );
}
