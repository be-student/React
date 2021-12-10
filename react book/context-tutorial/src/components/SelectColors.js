import { ColorConsumer } from "../contexts/color";
import { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// const SelectColors = () => {
//   //ColorContext.Consumer인 ColorConsumer에서
//   //바로 다음줄 인자 이름은 내부 값과 같다.
//   return (
//     <div>
//       <h2>색상을 선택하세요.</h2>
//       <ColorConsumer>
//         {({ actions }) => (
//           <div style={{ display: "flex" }}>
//             {colors.map((color) => (
//               <div
//                 key={color}
//                 style={{
//                   background: color,
//                   width: "24px",
//                   height: "24px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => actions.setColor(color)}
//                 onContextMenu={(e) => {
//                   e.preventDefault();
//                   actions.setSubcolor(color);
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </ColorConsumer>
//       <hr />
//     </div>
//   );
// };
class SelectColors extends Component {
  //this.context조회시 현재context의 value를 가리킴.
  //setColor호출 하고 싶다면 this.context.actions.setColor
  //static contextType 정의시 클래스 매서드에서 Context에 둔 함수 호출 가능
  //단점은 한 클래스 하나의 Context 뿐
  //useContext를 쓰자. 함수형 쪽으로 선언.
  static contextType = ColorContext;

  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };
  handleSetSubColor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };
  render() {
    return (
      <div>
        <h2>색상을 선택하세요</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubColor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}
export default SelectColors;
