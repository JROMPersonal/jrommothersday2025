import React from 'react';
import './CarliePage.css';

const CarliePage = () => {
  return (
    <div className="sister-page">
      <h2>Happy Mother's Day, Carlie!</h2>
      <p>Hope you've had a great day! Love James</p>
      <img src={`${process.env.PUBLIC_URL}/photos/Car1.JPG`} alt="Car1" className="sister-image" />
      <img src={`${process.env.PUBLIC_URL}/photos/Sisters2.JPG`} alt="Sisters2" className="sister-image" />
    </div>
  );
}

export default CarliePage;
