import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import { useState, useRef } from "react";
const gennum = () => {
  let array = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; ; j++) {
      let temp = parseInt(Math.random() * 9);
      if (!array.includes(temp)) {
        array.push(temp);
        break;
      }
    }
  }
  return array;
};

const NumberBaseball = () => {
  const [num, setNum] = useState(gennum);
  const [input, setInput] = useState(""); //input
  const [tries, setTries] = useState(0);
  const [ball, setBall] = useState([]);
  const [result, setResult] = useState("");
  const strikes = useRef(0);
  const balls = useRef(0);
  const onChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/gi, "");
    setInput(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    strikes.current = 0;
    balls.current = 0;
    if (num.join("") === input) {
      setTries(0);
      setResult("성공하셨습니다.");
      setNum(gennum);
    } else if (tries === 9) {
      setTries(0);
      setResult("10회 실패하셨습니다. 재시도합니다.");
      setNum(gennum);
      setBall([]);
      strikes.current = 0;
      balls.current = 0;
    } else {
      calculateBS();
      console.log(strikes.current, balls.current);
      setBall((prev) => [
        ...prev,
        {
          inputs: input,
          strikess: strikes.current,
          ballss: balls.current,
        },
      ]);

      setResult("");
      setTries(tries + 1);
    }
    setInput("");
  };
  const calculateBS = () => {
    for (let i = 0; i < 4; i++) {
      const temp = parseInt(input[i]);
      if (temp === num[i]) {
        strikes.current += 1;
      } else {
        for (let j = 0; j < 4; j++) {
          if (temp === num[j]) {
            balls.current += 1;
          }
        }
      }
    }
  };
  return (
    <div>
      <div>
        <div>{num.toString()}</div>
        <form onSubmit={onSubmit}>
          <input
            minLength="4"
            maxLength="4"
            onChange={onChange}
            value={input}
          />
        </form>
      </div>
      <h1>시도 : {tries}</h1>
      <h2>{result}</h2>
      <h2>시도한 내용</h2>
      <ol>
        {ball.map((b, index) => {
          return (
            <li key={index}>
              {b.strikess}S {b.ballss}B {b.inputs}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default NumberBaseball;
