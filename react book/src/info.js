/*
import { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button
        onClick={() => {
          if (value > 0) setValue(value - 1);
        }}
      >
        -
      </button>
    </div>
  );
};
export default Counter;

*/
import { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  useEffect(() => {
    /*
    console.log('렌더링이 완료되었습니다.');
    console.log({
      name,
      nickName,
    });
    
  });
    */
    console.log('마운트 될 때만 실행');
  }, []);
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
