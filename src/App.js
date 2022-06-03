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
      <div>
        <nav>
          <ul className="navLinks">
            <li>
              <Link to="/" className="navLink">
                Books
              </Link>
            </li>
            <li>
              <Link to="/categories" className="navLink">
                Categories
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
