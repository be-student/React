import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";
import Counter from "../components/Counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  //   {
  //     increase,
  //     decrease,
  //   }
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);
