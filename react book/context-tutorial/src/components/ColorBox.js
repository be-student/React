import ColorContext from "../contexts/color.js";
import { ColorConsumer } from "../contexts/color";
import { useContext } from "react";

const ColorBox = () => {
  return (
    //이런 형태로 Consumer사이에 중괄호 안에 함수 를 function as a child
    //혹은 Render Props라고 함. children이 있을 자리에 JSX,문자열이 아닌
    //함수를 만들어 내는 것.

    <ColorConsumer>
      {/*(value) => (
        <div
          style={{ width: "64px", height: "64px", background: value.color }}
        />
      )*/}
      {/* 모르겠음
      {function (value) {
        return (
          <div>
            style={{ width: "64px", height: "64px", background: value.color }}
          </div>
        );
      }} */}

      {({ state }) => (
        <div>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor,
            }}
          />
        </div>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
