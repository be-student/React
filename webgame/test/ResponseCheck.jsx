import React, { useState, useRef } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작");
  const [result, setResult] = useState([]);

  let startTime = useRef(0);
  let timeout = useRef();
  const onReset = () => {
    setResult([]);
  };
  const getSum = () => {
    //console.log(result);
    let temp = 0;
    for (let i = 0; i < result.length; i++) {
      temp += result[i];
    }
    return temp;
  };
  const renderAverage = () => {
    //이렇게 분리보다는 새 컴포넌트가 좋긴 함

    // return result.length === 0 ? null : (
    //   <div>
    //     <div>
    //       평균 시간 :{getSum() / result.length}
    //       ms
    //     </div>
    //     <button onClick={onReset}>리셋</button>
    //   </div>
    // );
    return result.length === 0 ? null : (
      <div>
        <div>
          평균 시간 :{result.reduce((a, c) => a + c, 0) / result.length}
          ms
        </div>
        <button onClick={onReset}>리셋</button>
      </div>
    );
  };
  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요");
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("지금 클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      //성급하게 클릭
      setState("waiting");
      setMessage("이런 성급하셨군요 초록색이 된 후에 클릭하세요");
      clearTimeout(timeout.current);
    } else if (state === "now") {
      //반응속도 체크
      let endTime = new Date();
      setState("waiting");
      //setResult([...result, endTime - startTime.current]);
      setResult((prevResult) => [...prevResult, endTime - startTime.current]);
      setMessage("클릭해서 시작하세요");
    }
  };
  return (
    <div>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </div>
  );
};

export default ResponseCheck;
