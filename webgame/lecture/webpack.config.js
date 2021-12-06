const path = require("path"); //노드에서 경로 조작하는 path라는 것 암기

module.exports = {
  name: "wordrelay-setting", //그냥 이름
  mode: "development", // 실서비스: production
  devtool: "eval", // 실서비스: hidden-source-map 그냥 빠르게
  resolve: {
    extensions: [".js", ".jsx"],
  },
  //entry가 입력, output이 출력 우리 목표는 2개 파일을 합쳐서
  //app.js라는 파일 하나 만들어서 html이 실행 가능하게 하는 것임.
  entry: {
    app: ["./client"],
  },
  //client.jsx가 wordrelay를 불러옴
  //웹팩이 알아서 워드 릴레이를 알아서 해줌. 따라서 빼도 됨.
  //확장자도 제거해도 됨. resolve에 확장자를 설정함
  //
  module: {
    rules: [
      {
        test: /\.jsx?/, //정규 표현식임 jsx파일에 룰 적용
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
//webpack : 'webpack' 용어가 cmdlet, 함수, 스크립트 파일 또는 실행할 수 있는 프로그램 이름으로 인
//식되지 않습니다. 이름이 정확한지 확인하고 경로가 포함된 경우 경로가 올바른지 검증한 다음 다시
//시도하십시오.
//이 이유는 명령어로 등록이 안 되어 있음. webpack이.
//그래서 해결 방안은 1. 명령어 등록, 2. script로 등록.
