const loggerMiddleware = (store) => (next) => (action) => {
  //미들웨어 기본 구조
  console.group(action && action.type); //액션 타입으로 로그를 그룹화
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action); //다음 미들웨어에 전달
  console.log("다음 상태", store.getState()); //업데이트 된 상태
  console.groupEnd(); //그룹 끝
};
// const loggerMiddleware = function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {};
//   };
// }; 이것과 동일함.
//next 파라미터는 함수 형태, store.dispatch와 비슷한 역할을 함
//next(action)을 호출 하면 그 다음 처리해야할 미들웨어에게 액션을 넘겨두고
//없다면 리듀서에게 전달한다는 정도의 차이가 있음
//미들웨어 내부에서 store.dispatch를 사용하면 첫 번째 미들웨어부터 다시 시작

export default loggerMiddleware;
