/* 클래스형
import { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  /*밑의 코드와 동일
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }
  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }

  handleChange = (e) => {
    //이 코드가 중요함. 객체안의 key를 감싸면
    //레퍼런스가 가리키는 실제값이 key값이 됨

    this.setState({
      //message: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      message: '',
      username: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        {/*<input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => {
            //이름 oncha로 바뀌면 인식 못함.
            //e 객체는 SyntheticEvent, 웹 브라우저 네이티브 이벤트를 감싸는 객체
            //순수 JS에서 HTML이벤트를 다룰때와 동일하게 사용 가능.
            //네이티브 이벤트와 다른 점은 이벤트 종료시 이벤트 초기화
            //따라서 후에 참조 필요시 e.persist()함수 필요
            //console.log(e.target.value);
            this.setState({ message: e.target.value });
          }}
        />
        }
        <input
          type="text"
          name="username"
          placeholder="아무거나 입력해보세요"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        {/*
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          확인
        </button>
        }
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
*/
import { useState } from 'react';

const EventPractice = () => {
  /*
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  
  const onClick = () => {
    alert(username + ':' + message);
    setUsername('');
    setMessage('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  */
  const onClick = () => {
    alert(username + ':' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.value]: e.target.value,
    };
    setForm(nextForm);
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="username" value={username} onChange={onChange} />
      <input
        type="text"
        name="message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
