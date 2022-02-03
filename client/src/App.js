import { Container } from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
  <BrowserRouter>
    <Container maxidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Container>
  </BrowserRouter> 
  );
};

export default App;
