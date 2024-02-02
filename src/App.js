import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import AccountPage from './components/AccountPage';
import './App.css';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      {/* Add content for the home page if needed */}
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/account">Account</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
