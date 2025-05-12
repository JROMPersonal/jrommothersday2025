import React from 'react';
import './SarahPage.css';

const SarahPage = () => {
  return (
    <div className="sister-page">
      <h2>Happy Mother's Day, Sarah!</h2>
      <p>Hope you've had a great day! Love James</p>
      <img src={`${process.env.PUBLIC_URL}/photos/Sar1.JPG`} alt="Sar1" className="sister-image" />
      <img src={`${process.env.PUBLIC_URL}/photos/Sisters2.JPG`} alt="Sisters2" className="sister-image" />
    </div>
  );
}

export default SarahPage;
