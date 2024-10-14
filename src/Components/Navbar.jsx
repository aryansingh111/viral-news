import React, { useState } from 'react';
import './Style/Navbar.css';

const Navbar = ({ setCategory }) => {
  const [loading, setLoading] = useState(false);

  const handleCategoryClick = (category) => {
    setLoading(true);
   
    setCategory(category);
  
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">Viral News</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("General")} style={{ cursor: "pointer" }}>General</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("Technology")} style={{ cursor: "pointer" }}>Technology</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("Business")} style={{ cursor: "pointer" }}>Business</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("Health")} style={{ cursor: "pointer" }}>Health</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("Sports")} style={{ cursor: "pointer" }}>Sports</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("Entertainment")} style={{ cursor: "pointer" }}>Entertainment</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {loading && (
        <div className="loading-overlay">
          <div className="loading-icon"></div> {/* Replace with an actual loading icon if needed */}
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Navbar;
