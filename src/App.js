import React from 'react';

/*밑의 코드와 동일
이게 JFX 코드
function App() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  );
}
*/
/*
function App() {
  return React.createElement(
    'div',
    null,
    'hello',
    React.createElement('b', null, 'react')
  );
}
*/
/*
function App() {
  const name = undefined;
  return <div>{name}</div>;
}
*/
/*이게 css적용하는 방법
function App() {
  const na = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };
  return <div style={style}>{na}</div>;
}
*/

/*
import './App.css';

function App() {
  const name = '리액트';
  return <div className="react">{name}</div>;
}
*/

/* 이 2개가 같은 코드, 함수 컴포넌트 선언 방법 화살표, function
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent />;
};
function App() {
  return <MyComponent />;
}
*/
/*tag 사이는 children 이라는 property 가 있음.
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent>리액트</MyComponent>;
};
*/

/*
import MyComponent from './MyComponent';

const App = () => {
  //숫자 전달시 {3} 같이 전달
  return (
    <MyComponent name="리액트" favoriteNumber={3}>
      리액트
    </MyComponent>
  );
};
export default App;
*/

import Counter from './Counter';

const App = () => {
  return <Counter />;
};

export default App;
