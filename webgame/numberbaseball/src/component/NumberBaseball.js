import { useState } from "react";
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
  const [val, setVal] = useState("");
  const [tries, setTries] = useState(0);
  const [ball, setBall] = useState([]);
  const [result, setResult] = useState("");
  const onChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/gi, "");
    setVal(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (tries === 9) {
      setTries(0);
      setResult("10회 실패하셨습니다. 재시도합니다.");
      setNum(gennum);
    } else {
      setBall((ba) => [...ba, val]);
      setResult("");
      setTries(tries + 1);
    }
    setVal("");
  };
  return (
    <div>
      <div>
        <div>{num.toString()}</div>
        <form onSubmit={onSubmit}>
          <input minLength="4" maxLength="4" onChange={onChange} value={val} />
        </form>
      </div>
      <h1>시도 : {tries}</h1>
      <h2>{result}</h2>
      <h2>시도한 내용</h2>
      <ul>
        {ball.map((b, index) => {
          return <li key={index}>{b}</li>;
        })}
      </ul>
    </div>
  );
};

export default NumberBaseball;
