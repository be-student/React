import { useState } from 'react';

const IterationSample = () => {
  /*
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
  e.target은 특정 이벤트가 발생하는 태그
  */
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };
  const onDoubleClick = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  const nameList = names.map((name) => (
    //<li onDoubleClick={onDoubleClick} key={name.id} id={name.id}>
    //  {name.text}

    //</li>
    //인자를 전달해서 호출 하는 방법은 화살표 함수를 만드는 것이다.
    <li onDoubleClick={() => onDoubleClick(name.id)} key={name.id}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>

      <ul>{nameList}</ul>
    </div>
  );
};
export default IterationSample;
