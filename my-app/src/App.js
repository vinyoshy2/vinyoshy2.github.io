import React from 'react';
import logo from './logo.svg';
import Sidebar from "./components/sidebar/sidebar.js";
import MainContent from "./components/main-content/main-content.js";
import './App.css';

function App() {
  return (
    <div className="App">
        <Sidebar />
	<MainContent />
    </div>
  );
}

export default App;
