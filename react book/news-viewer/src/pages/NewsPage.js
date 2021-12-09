import { useParams } from 'react-router';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
  const match = useParams();
  const category = match.category || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};
export default NewsPage;
