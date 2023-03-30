import React from 'react';
import {
 BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
	return (
  <Router>
    <div className="appContainer">
      <nav>
        <ul className="navLinks">
          <li className="logo">Bookstore CMS</li>
          <li>
            <Link to="/" className="navLink">
              BOOKS
            </Link>
          </li>
          <li>
            <Link to="/categories" className="navLink">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
	);
}

export default App;
