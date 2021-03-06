import React from "react";
import { ThemeProvider } from "styled-components";
import { philadelphia } from "./theme";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import LoginPage from "./components/LoginPage/LoginPage";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import PasswordEdit from "./components/PasswordEdit/PasswordEdit";
import CreateLeagueForm from "./components/CreateLeagueForm/CreateLeagueForm";

function App() {
  return (
    <ThemeProvider theme={philadelphia}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/password-reset" element={<PasswordReset />} />
        <Route exact path="/password-edit" element={<PasswordEdit />} />
        <Route exact path="/create-league" element={<CreateLeagueForm />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
