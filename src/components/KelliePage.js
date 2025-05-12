import React from 'react';
import './KelliePage.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const KelliePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
        className="sister-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <h2>Happy Mother's Day, Kellie!</h2>
      <p>Hope you've had a great day! Love James</p>
      <img src={`${process.env.PUBLIC_URL}/photos/Mom1.jpg`} alt="Sar1" className="sister-image" />
      <img src={`${process.env.PUBLIC_URL}/photos/Mom2.PNG`} alt="Sisters2" className="sister-image" />
      <button className="back-button" onClick={() => navigate('/')}>← Back To Home</button>
      </motion.div>
  );
}

export default KelliePage;
