import React from 'react';
import './FinalNote.css';

const FinalNote = () => {
  return (
    <div className="final-note">
      <h2>I Love You, Mom!</h2>
      <button onClick={() => alert('Happy Mother\'s Day!')} className="love-button">💖</button>
    </div>
  );
}

export default FinalNote;
