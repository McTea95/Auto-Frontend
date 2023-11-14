// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Einloggen from "./components/kunden"; 
import MyComponent from "./components/mitarbeiter_login";
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Einloggen />} />
      <Route path="/kunden" element={<Einloggen />} />
      <Route path="/mitarbeiter_login" element={<MyComponent />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
