import React from 'react';
import './App.css';
import { getCategories } from './services/api';

function App() {
  return (
    <div className="App">
      {getCategories()}
    </div>
  );
}

export default App;
