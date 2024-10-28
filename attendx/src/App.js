import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/login-student/source/login';
import SignIn from '../src/login-student/source/signin';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  </Router>
  );
}

export default App;
