import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Homepage from "./components/Homepage/Homepage";
import PasswordReset from "./components/PasswordReset/PasswordReset";

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/login" element={<LoginForm/>}/>
          <Route exact path="/password-reset" element={<PasswordReset/>}/>
        </Routes>
    </ThemeProvider>
  );
}

export default App;