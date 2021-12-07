import "./Word.scss";
import { useState } from "react";
const Word = () => {
  const [word, setWord] = useState("시작");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("정답");
      setWord(value);
      setValue("");
    } else {
      setValue("");
      setResult("땡");
    }
  };
  return (
    <div>
      <div>Word</div>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="끝말 잇기"
        ></input>
        <button type="submit">Submit</button>
      </form>
      <div>결과 {result}</div>
    </div>
  );
};
export default Word;
