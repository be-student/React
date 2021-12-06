/*const MyComponent = () => {
  return <div>나의 새롭고 멋진 컴포넌트12</div>;
};

export default MyComponent;
*/
/*
import React from 'react';

const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

export default MyComponent;
*/

/* 기본값 적는 방법 이름.defaultProps={};
태그 사이 children, property 사용 기능도 있음.
props 값을 조회시마다 props.name과 같은 거를 붙히기 귀찮

const MyComponent = (props) => {
  return (
    <div>
      안녕하세요 제 이름은 {props.name}입니다.
      <br />
      children 값은 {props.children}
      입니다.
    </div>
  );
};
ES6의 비구조화 할당 문법을 이용하는 방법 
const MyComponent=props=>{
  const {name,chidren}=props;
  return(
    <div>
    안녕하세요 제 이름은 {name}입니다. <br/>
    children 값은 {children}
    입니다.
    </div>
  );
};
이 코드와 동일한 역할. 
const MyComponent=({name,children})=>{
  return(
    <div>
    안녕하세요 제 이름은 {name}입니다. <br/>
    children 값은 {children}
    입니다.
    </div>
  );
};
MyComponent.defaultProps = {
  name: '기본이름',
};

export default MyComponent;
*/

/*함수형 컴포넌트, prop types required
import PropTypes from 'prop-types';
import Component from 'react';
const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};
MyComponent.defaultProps = {
  name: '기본이름',
};
MyComponent.propTypes = {
  //name값을 문자열로 전달해야 한다.
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
*/
/*클래스형 컴포넌트로 변환, 위의 코드와 동일
import PropTypes from 'prop-types';
import { Component } from 'react';

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}
MyComponent.defaultProps = {
  name: '기본이름',
};
MyComponent.propTypes = {
  //name값을 문자열로 전달해야 한다.
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
*/
/*props에 관한 내용을 내부로 옮김.
import { Component } from 'react';
import { PropTypes } from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}
export default MyComponent;

*/
const MyComponent = (props) => {
  console.log(typeof props);
  return <div>안녕하세요, 제 이름은 {props.children}</div>;
};
export default MyComponent;
