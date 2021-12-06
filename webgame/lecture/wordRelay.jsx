//파일 분리시 쓰이는 애들을 다시 불러와야됨
const React=require('react');
//이게 없으면 extends React.Component로 해야됨
const {Component} = React;

class WordRelay extends Component{
    state={
        
    }
    render(){

    }
}
//파일 쪼갤시 제일 위에 const 설정, exports 세팅 해야되는 차이가 있음
module.exports=WordRelay;