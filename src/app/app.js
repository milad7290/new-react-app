import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "../main-router";

const theme = createMuiTheme({
  //  direction: 'rtl',
  typography: {
    useNextVariants: true,
    fontFamily: '"IranSans"',
  },
  palette: {
    primary: {
      light: "#3f51b5",
      main: "#3f51b5",
      dark: "#34515e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e7ff8c",
      main: "#b2ff59",
      dark: "#7ecb20",
      contrastText: "#000",
    },
    type: "light",
  },
});

const App = (props) => (
  <Provider store={props.store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <MainRouter />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default hot(module)(App);
App.propTypes = {
  store: PropTypes.object.isRequired,
};
