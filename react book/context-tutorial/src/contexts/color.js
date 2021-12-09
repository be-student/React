import { createContext, useState } from "react";

//새 context 만들 때 createContext함수를 이용함.
//createContext의 기본값은 provider의 value에 넣는 객체와 같게 만드는 것이 좋다

//const ColorContext=createContext({color:black});
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

//const ColorConsumer=ColorContext.Consumer과 같음.
const { Consumer: ColorConsumer } = ColorContext;
export { ColorProvider, ColorConsumer };

export default ColorContext;
