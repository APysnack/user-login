import React from 'react';
import Users from './components/Users';
import Login from './components/Login';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
