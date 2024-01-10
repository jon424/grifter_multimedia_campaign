import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './components/Homepage';
import Review from './components/Review';
import TypingPage from './components/TypingPage';
import BoxAnimation from './components/BoxAnimation';
// import './App.css'; // Make sure to import your CSS file

const AppContent = () => {
  const location = useLocation();


  return (
    <div id="app-container" className={ location.pathname === '/typing' ? 'typing-page-background' : '' }>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/review" element={ <Review /> } />
        <Route path="/typing" element={ <TypingPage /> } />
        <Route path="/box" element={ <BoxAnimation /> } />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
