/*=import { Component } from 'react';


class Counter extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  state = {
    //이 코드가 위 삭제하면서 들어옴 렌더 밖에 있음
    number: 0,
    fixedNumber: 0,
  };
  render() {
    /*const { number, fixedNumber } = this.state;
    const { number, fixedNumber } = this.state; //이 코드가 새로 들어옴
    //항상 return 밖에 빠져나옴.
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        {/*<button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
        }
                <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
*/
/*
import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              //왜 여기는;가 안 붙을까? 함수 내부에는 붙고 안 붙고
              console.log('방금 setState가 호출되었습니다');
              console.log(this.state);
            });
          }}
        >
          1
        </button>
      </div>
    );
  }
}

export default Counter;
*/

import { useReducer } from 'react';

function changing(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(changing, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};
export default Counter;
