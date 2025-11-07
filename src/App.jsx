import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import PrivateLayout from "./layouts/PrivateLayout";
import CoverLetterGenerator from "./pages/CoverLetterGenerator";
import ResumeBuilder from "./pages/ResumeBuilder";
import JobAnalyzer from "./pages/JobAnalyzer";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<Home />} />
        </Route>

        {/* Authentication routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Private routes */}
        <Route element={<PrivateLayout user={user} setUser={setUser} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/coverlettergenerator" element={<CoverLetterGenerator/>} />
          <Route path="/resumebuilder" element={<ResumeBuilder/>} />
          <Route path="/jobanalyzer" element={<JobAnalyzer/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
