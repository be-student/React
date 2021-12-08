import { useParams } from 'react-router';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
  const match = useParams();
  console.log(match.toString);
  console.log(match);
  console.log(match.category);
  const category = match.category || 'all';
  console.log(category);
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};
export default NewsPage;
