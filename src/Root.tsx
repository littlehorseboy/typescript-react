import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './router/Router';
import store from './reducers/configureStore';
import useNavigatorLanguage, { LocaleContext } from './useNavigatorLanguage';
import useGetMessage from './useGetMessage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff5722',
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default function Root(): JSX.Element {
  const [locale, setLocale] = useNavigatorLanguage();

  const messages = useGetMessage();

  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <LocaleContext.Provider value={[locale, setLocale]}>
          <IntlProvider locale={locale} messages={messages && messages[locale]}>
            <DndProvider backend={HTML5Backend}>
              <Provider store={store}>
                <Router />
              </Provider>
            </DndProvider>
          </IntlProvider>
        </LocaleContext.Provider>
      </MuiThemeProvider>
    </>
  );
}
