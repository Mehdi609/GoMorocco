import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsList from './NewsList';
import NewsDetail from './NewsDetail';
import About from './About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
