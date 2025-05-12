import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <h1>Happy Mother's Day!</h1>
      <p>Click here if you are Kellie</p>
      <Link to="/kellie">
        <button className="sister-button">Kellie</button>
      </Link>
      <p>Click here if you are Carlie</p>
      <Link to="/carlie">
        <button className="sister-button">Carlie</button>
      </Link>
      <p>Click here if you are Sarah</p>
      <Link to="/sarah">
        <button className="sister-button">Sarah</button>
      </Link>
    </div>
  );
}

export default Landing;
