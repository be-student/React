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
/*
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
  /*useEffect(() => {
    
    console.log('렌더링이 완료되었습니다.');
    console.log({
      name,
      nickName,
    });
    
  });
    
    console.log('마운트 될 때만 실행');
  }, []);
  /*componentDidUpdate(prevProps,prevState){
    if(prevProps.value!==this.props.value){
      doSomething();
    }
  }
  
  useEffect(() => {
    console.log('effect');
    console.log('name');
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]);
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
*/
/*
import { useReducer } from 'react';
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
export default Info;
*/
import useInputs from './useInputs';

const Info = () => {
  const [state, dispatch] = useInputs({
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
export default Info;
