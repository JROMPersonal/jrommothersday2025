import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CarliePage.css';

const CarliePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="sister-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Happy Mother's Day, Carlie!</h2>
      <p>Hope you've had a great day! Love, James</p>
      <img src={`${process.env.PUBLIC_URL}/photos/Car1.JPG`} alt="Car1" className="sister-image" />
      <img src={`${process.env.PUBLIC_URL}/photos/Sisters2.JPG`} alt="Sisters2" className="sister-image" />
      
      <button className="back-button" onClick={() => navigate('/')}>← Back to Home</button>
    </motion.div>
  );
};

export default CarliePage;
