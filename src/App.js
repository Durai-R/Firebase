// App.js

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "./Components/SideNav";
import Dashboard from "./Components/Dashboard";
import University from "./Components/University";
import CoursePlan from "./Components/CoursePlan";
import HeaderBar from "./Components/HeaderBar/HeaderBar";

const App = () => {
  return (
    <Router>
      <div className="app">
        <SideNav />

        <div className="content">
          <HeaderBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manageUniversity" element={<University />} />
            <Route path="/courseplan" element={<CoursePlan />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
