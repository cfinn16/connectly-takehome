import React from 'react';
import LeftNav from './LeftNav';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <LeftNav />
      <div className="main">
        <Header />
      </div>
    </div>
  );
}

export default App;
