import React from 'react';
import './App.css';
import Landing from './components/Landing';
import GoldenRetriever from './components/GoldenRetriever';
import MalibuRum from './components/MalibuRum';
import PalmBeach from './components/PalmBeach';
import FinalNote from './components/FinalNote';

function App() {
  return (
    <div className="App">
      <Landing />
      <GoldenRetriever />
      <MalibuRum />
      <PalmBeach />
      <FinalNote />
    </div>
  );
}

export default App;
