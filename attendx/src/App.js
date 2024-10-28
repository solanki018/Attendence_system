import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import MainPage from './components/MainPage-dash';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
