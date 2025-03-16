
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsList from './NewsList';
import NewsDetail from './NewsDetail';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/news" element={<NewsList />} />
      </Routes>
    </Router>
  );
};

export default App;