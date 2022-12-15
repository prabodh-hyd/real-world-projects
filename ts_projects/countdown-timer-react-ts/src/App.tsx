import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountDownTimer from './components/CountDownTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CountDownTimer hours={1} minutes={20} seconds = {40} />
      </header>
    </div>
  );
}

export default App;
