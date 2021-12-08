import { useParams } from "react-router";
const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};
const Profile = () => {
  const { match } = useParams();
  return <div>{match}</div>;
  const profile = data[match];
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <h3>
        {match}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};
export default Profile;
