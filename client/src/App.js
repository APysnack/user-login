import React from "react";
import Users from "./components/Users";
import Login from "./components/LoginForm/LoginForm";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
