// cd C:\Users\SongEunWoo\react\react book\todo-app
import { useState, useRef, useCallback } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';

//todos 투두 리스트 아이템
//nextId 다음 생성시 아이디
//onInsert는 투두에 하나 추가 + nextId+1
//onRemove는 todo에 필터로 하나 제거 nextId는 건들지 않음
//onToggle todo에 체크 표시 처리
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      console.log(todos, nextId);
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(() => todos.concat(todo));
      //todos=todos.concat(todo);
      //이거 쓰기 싫어서 업데이터를 만드는 거다 라는 점.
      //밑에 코드가 가장 정확하게 나옴.업데이트를 쓰면 처리는 됨
      //링크 https://velog.io/@cada/React%EC%9D%98-setState%EA%B0%80-%EC%9E%98%EB%AA%BB%EB%90%9C-%EA%B0%92%EC%9D%84-%EC%A3%BC%EB%8A%94-%EC%9D%B4%EC%9C%A0
      //this.setState((state, props) => {
      //   return {count: state.count + 1}
      // });
      //이렇게 박아버리면 불변성도 깨고, 동기를 쓸 수 있음.
      nextId.current += 1;
      //모든 문제는 비동기라는 점에서 나옴. nextId는 동기화 됨.
      console.log(todos, todo, nextId);
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
//만약 useEffect에 등록한 함수에서 props로 받아온 값을 참조하거나 혹은 useState로 관리하고 있는 값을 참조할 때는 deps 배열에 꼭 넣어주어야 한다.
// 안 넣는다고 해서 오류가 나지는 않지만 넣어주어야 그 값이 최신의 값을 가질 수 있게 된다.
//지금 당장은 'useEffect를 사용할 때 내부에서 사용하고 있는 상태가 있다면 deps에 넣어주어야 한다.'라고 알아두자.
//'onToggle'과 같은 함수도 마찬가지로 deps에 넣어주어야 한다.
