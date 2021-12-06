const React = require('react');
const ReactDom = require('react-dom');

//같은 폴더라서 쪼갰던 애들을 합쳐줌. 
const WordRelay = require('./WordRelay');
//구구단의 제일 밑 부분과 같음.
ReactDom.render(<WordRelay />, document.querySelector('#root'));