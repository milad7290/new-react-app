import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from '../router';

const theme = createMuiTheme({  
  // same with sass variables
  
   palette: {
      primary: {
         light: '#3f51b5',
         main: '#BADA55',
         dark: '#000',
         contrastText: '#fff',
      },
      secondary: {
         light: '#e7ff8c',
         main: '#b2ff59',
         dark: '#7ecb20',
         contrastText: '#000',
      },
      type: 'light',
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

export default App;
App.propTypes = {
   store: PropTypes.object.isRequired,
};
