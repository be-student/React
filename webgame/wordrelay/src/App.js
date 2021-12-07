import Template from "./component/Template.jsx";
import Word from "./component/Word.jsx";
import Comment from "./component/Comment";
import { useState } from "react";

const App = () => {
  return (
    <Template>
      <Word />
      <Comment />
    </Template>
  );
};

export default App;
