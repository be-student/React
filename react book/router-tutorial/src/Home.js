import { Route, Routes, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.</p>
      <Link to="info">소개</Link>
      <Link to="about">소개</Link>
      <Link to="/profile/velopert">velopert 프로필</Link>
      <Link to="/profile/gildong">gildong 프로필</Link>
      <
    </div>
  );
};

export default Home;
