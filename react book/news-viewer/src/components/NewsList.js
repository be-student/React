import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };
const NewsList = ({ category }) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);
  //여기다 useEffect앞 async를 안 쓰는 이유는
  //useEffect가 반환하는 것은 promise가 아닌 뒷정리 함수.
  //따라서 useEffect 내에 함수 만들 필요 있음
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === 'all' ? '' : `&category=${category}`;
  //       console.log(query);
  //       const response = await axios.get(
  //         `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=06dafe3ccd6548ea96b710560871ab83`,
  //       );
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [category]);
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=06dafe3ccd6548ea96b710560871ab83`,
    );
  }, [category]);
  if (!response) {
    return null;
  }
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  //아직 article이 없을 때 처리를 해줘야됨.
  //첫 시작때 article이 없기에 렌더링 오류가 남.
  // if (!articles) {
  //   return null;
  // }
  if (error) {
    return <NewsListBlock>에러 발생</NewsListBlock>;
  }
  //이거는 promise랑 엮임. promise가 아니면 다음줄 삭제
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
export default NewsList;
