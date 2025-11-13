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
  const [user, setUser] = useState({
    fullName: "Sackey David",
    email: "sackey@gmail.com",
    phone: "+234 9055854282",
    location: "Ogun State, Nigeria",
    photo: "", // you can later replace this with a profile image URL
    stats: {
      resumes: 3,
      letters: 3,
      applications: 3,
    },
  });

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
          <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
        </Route>
        {/* Private Routes with different layout each  */}
        <Route user={user} setUser={setUser}>

          <Route path="/coverlettergenerator" element={<CoverLetterGenerator user={user} setUser={setUser} />}/>
          <Route path="/resumebuilder" element={<ResumeBuilder user={user} setUser={setUser} />} />
          <Route path="/jobanalyzer" element={<JobAnalyzer user={user} setUser={setUser} />}/>
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
