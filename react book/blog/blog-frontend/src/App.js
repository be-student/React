import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PostListPage />} path="/@:username" />
        <Route element={<PostListPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<PostPage />} path="/@:username/:postId" />
        <Route element={<WritePage />} path="/write" />
        <Route element={<RegisterPage />} path="/register" />
      </Routes>
    </>
  );
};
export default App;
