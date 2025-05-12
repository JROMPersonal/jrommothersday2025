import React from 'react';
import './KelliePage.css';

const KelliePage = () => {
  return (
    <div className="sister-page">
      <h2>Happy Mother's Day, Kellie!</h2>
      <p>Hope you've had a great day! Love James</p>
      <img src={`${process.env.PUBLIC_URL}/photos/Mom1.jpg`} alt="Sar1" className="sister-image" />
      <img src={`${process.env.PUBLIC_URL}/photos/Mom2.PNG`} alt="Sisters2" className="sister-image" />
    </div>
  );
}

export default KelliePage;
