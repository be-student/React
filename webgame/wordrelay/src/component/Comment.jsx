import { useState } from "react";
import "./Comment.scss";
import classNames from "classnames";

const Comment = () => {
  const [value, setValue] = useState("");
  const [num, setNum] = useState(2);
  const [data, setData] = useState([
    {
      id: 1,
      dat: "1st",
    },
  ]);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const nextArr = data.concat({
      id: num,
      dat: value,
    });
    setData(nextArr);
    setValue("");
    setNum(num + 1);
  };
  const onClick = (e) => {
    const nextArr = data.filter((dat) => {
      if (dat.id === parseInt(e.target.id)) {
        return false;
      }
      return true;
    });
    setData(nextArr);
  };
  const onCheck = (e) => {};
  return (
    <div>
      <div>comment</div>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange}></input>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {data.map((dat) => {
          return (
            <li key={dat.id}>
              <button onClick={onCheck}>checked</button>
              <div className="unChecked">{dat.dat}</div>
              <button id={dat.id} onClick={onClick}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Comment;
