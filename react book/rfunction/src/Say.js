/*
import { useState } from 'react';

const Say = () => {
  const [Message, SETMessage] = useState(''); //앞에꺼에 뒤에꺼를 통해 저장
  const onClickEnter = () => SETMessage('안녕하세요');
  const onClickLeave = () => SETMessage('안녕히 가세요');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{Message}</h1>
    </div>
  );
};

export default Say;
*/

import { useState } from 'react';

const Say = () => {
  const [message, Setmessage] = useState('');
  const onClickEnter = () => Setmessage('안녕하세요');
  const onClickLeave = () => Setmessage('안녕히 가세요');

  const [color, setcolor] = useState('black');

  return (
    //주석의 범위는 tag를 기준으로 나뉘어진다. tag속에서는 주석이 안됨.
    //jsx 내에서 JS값을 사용하려면 중괄호로 감싸야 한다.
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setcolor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setcolor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setcolor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
