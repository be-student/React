//node require, module.exports
//react import, export
//거의 호환이 되지만 살짝 다른 부분이 있음.
//webpack이 바꿔주기에 마음대로 써도 됨.
//
function getNumbers() {}
import React, { Component } from "react";
class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };
  onChangeInput = (e) => {
    //우리는 화살표를 무조건 써야됨. render같은 것 대신 쓰는 거라면
    //화살표 함수에서 중괄호는 무조건 return임. 중괄호랑 return같이 생략 가능
    e.preventDefault();
    this.setState({
        value:e.target.value;
    })
  };
  render() {
    <>
      <h1>{this.state.result}</h1>
      <form onSubmit={this.onSubmitForm}>
        <input
          maxLength={4}
          value={this.state.value}
          onChange={this.onChangeInput}
        />
      </form>
      <div>시도: {this.state.tries.length}</div>
      <ul>
        {this.state.tries.map((tri) => {
          return <li>{tri}</li>;
        })}
      </ul>
    </>;
  }
}
