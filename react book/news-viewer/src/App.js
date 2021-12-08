//import { useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
//import NewsList from './components/NewsList';
//import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';
const App = () => {
  //const [category, setCategory] = useState('all');
  //const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />;
      <Route path=":category" element={<NewsPage />} />;
    </Routes>
  );
};

export default App;
