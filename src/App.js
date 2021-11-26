/*밑의 코드와 동일
이게 JFX 코드
function App() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  );
}
*/
/*
function App() {
  return React.deleteElement(
    'div',
    null,
    'hello',
    React.createElement('b', null, 'react')
  );
}
*/
/*
function App() {
  const name = undefined;
  return <div>{name}</div>;
}
*/
/*이게 css적용하는 방법
function App() {
  const na = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };
  return <div style={style}>{na}</div>;
}
*/

/*
import './App.css';

function App() {
  const name = '리액트';
  return <div className="react">{name}</div>;
}
*/

/* 이 2개가 같은 코드, 함수 컴포넌트 선언 방법 화살표, function
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent />;
};
function App() {
  return <MyComponent />;
}
*/
/*tag 사이는 children 이라는 property 가 있음.
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent>리액트</MyComponent>;
};
*/

/*
import MyComponent from './MyComponent';

const App = () => {
  //숫자 전달시 {3} 같이 전달
  return (
    <MyComponent name="리액트" favoriteNumber={3}>
      리액트
    </MyComponent>
  );
};
export default App;
*/

/*
import Counter from './Counter';

const App = () => {
  return <Counter />;
};

export default App;
*/
/*
import Say from './Say';

const App = () => {
  return <Say />;
};

export default App;
*/
/*
import React from 'react';

import EventPractice from './EventPractice';

const App = () => {
  return <EventPractice />;
};

export default App;
*/
import { Component } from "react";
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="#"
            onClick={function (ev) {
              ev.preventDefault();
              this.props.onClick();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}
class TOC extends Component {
  render() {
    let i = 0;
    let list = [];
    while (i < this.props.data.length) {
      let data = this.props.data[i];
      list.push(
        <li key={data.id}>
          {
            <a
              href="#!"
              onClick={function (id, e) {
                e.preventDefault();
                this.props.onSelect(id);
              }.bind(this, data.id)}
            >
              {data.title}
            </a>
          }
        </li>
      );
      i = i + 1;
    }
    /*let list = [
      <li>
        <a href="1.html">HTML</a>
      </li>,
      <li>
        <a href="2.html">Css</a>
      </li>,
      <li>
        <a href="3.html">Java Script</a>
      </li>,
    ];
    */
    return <ol>{list}</ol>;
  }
}

class Content extends Component {
  render() {
    return (
      <footer>
        <h1>{this.props.data.title}</h1>
        {this.props.data.desc}
      </footer>
    );
  }
}
class ContentCreate extends Component {
  state = {
    title: "",
    desc: "",
  };
  changeFormHandler(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  render() {
    return (
      <article>
        <form
          onSubmit={function (ev) {
            ev.preventDefault();
            //contentCreate라고 하는 컴포넌트 중에서on submit이라고 하는 props에 있는 함수 호출
            this.props.onSubmit(this.state);
          }.bind(this)}
        >
          <p>
            <input
              type="text"
              placeholder="title"
              name="title"
              value={this.state.title}
              onChange={this.changeFormHandler.bind(this)}
            />
            <textarea
              name="desc"
              placeholder="context"
              value={this.state.desc}
              onChange={this.changeFormHandler.bind(this)}
            />
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}
class App extends Component {
  state = {
    last_content_id: 3,
    mode: "read",
    selected_content_id: 2,
    contents: [
      { id: 1, title: "Html", desc: "HTML is for information" },
      { id: 2, title: "Css", desc: "Css is for design" },
      { id: 3, title: "Java Script", desc: "Java Script is for interaction" },
    ],
  };
  getSelectedContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (this.state.selected_content_id === data.id) {
        return data;
      }
      i = i + 1;
    }
  }
  getContentComponent() {
    if (this.state.mode === "read") {
      return <Content data={this.getSelectedContent()}></Content>;
    } else if (this.state.mode === "welcome") {
      return (
        <Content
          data={{
            title: "Welcome",
            desc: "Hello React!!!",
          }}
        ></Content>
      );
    } else if (this.state.mode === "create") {
      return (
        <ContentCreate
          onSubmit={function (formData) {
            console.log(this.state.last_content_id);
            this.state.last_content_id = this.state.last_content_id + 1;
            formData.id = this.state.last_content_id;
            console.log(formData);
            let newContents = Object.assign([], this.state.contents);
            newContents.push(formData);

            this.setState({
              contents: newContents,
              //selected_content_id: this.last_content_id,
              mode: "read",
            });
          }.bind(this)}
        ></ContentCreate>
      );
    }
  }
  getControlComponent() {
    return (
      <>
        <a
          href="/create"
          onClick={function (ev) {
            ev.preventDefault();
            this.setState({
              mode: "create",
            });
          }.bind(this)}
        >
          create
        </a>
        <a href="/update">update</a>
        <input
          type="button"
          value="delete"
          href="/delete"
          onClick={function () {
            let newContents = this.state.contents.filter(
              function (el) {
                if (el.id !== this.state.selected_content_id) {
                  return el;
                }
              }.bind(this)
            );
            this.setState({
              contents: newContents,
              mode: "welcome",
            });
          }.bind(this)}
        />
      </>
    );
  }
  render() {
    return (
      <div>
        <Subject
          onClick={function () {
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
          title="Web"
          sub="World wide web"
        ></Subject>
        <TOC
          /*onSelect={(id) => { 밑의 코드와 동일
            this.setState({
              selected_content_id: id,
            });
          }}
          */
          onSelect={function (id) {
            this.setState({
              selected_content_id: id,
              mode: "read",
            });
          }.bind(this)}
          //this.state.selected_content_id를 클릭한 값으로 바꿔라
          data={this.state.contents}
        ></TOC>

        {this.getControlComponent()}
        {this.getContentComponent()}
      </div>
    );
  }
}
export default App;
