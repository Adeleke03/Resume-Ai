import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
