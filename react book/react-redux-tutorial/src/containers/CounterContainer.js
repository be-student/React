import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
//useSelector를 쓰면 conect대신 사용 가능함.
//useDispatch를 쓰면 컴포넌트 내부에서 스토어의 내장함수 dispatch를 사용 가능하게 함.

import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

//store의 상태값을 state로 받아오고, 이를 component의 props에 전달함
const mapStateToProps = (state) => ({
  number: state.counter.number,
});
//store의 dispatch를 받아오고, 이를 component에 props에 전달함.
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    console.log('increase');
    dispatch(increase());
  },
  decrease: () => {
    console.log('decrease');
    dispatch(decrease());
  },
});
//export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
//connect를 하면 component에서 store가 사용 가능하다.
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  // (dispatch) => ({
  //   increase: () => dispatch(increase()),
  //   decrease: () => dispatch(decrease()),
  // }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
// const CounterContainer = () => {
//   const number = useSelector((state) => state.counter.number);
//   const dispatch = useDispatch();
//   const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
//   const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
//   return (
//     <Counter
//       number={number}
//       // onIncrease={() => dispatch(increase())}
//       // onDecrease={() => dispatch(decrease())}
//       onIncrease={onIncrease}
//       onDecrease={onDecrease}
//     />
//   );
// };
// export default CounterContainer;
