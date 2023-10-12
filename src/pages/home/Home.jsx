import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="container">
        <nav>
          <div className="nav__title">
            <h2>Товары</h2>
            <div className="nav__title__links">
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
