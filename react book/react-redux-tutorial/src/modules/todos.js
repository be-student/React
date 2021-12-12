import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });
let id = 3;
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });
// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });
//여기서 id=>id 는 생략해도 같은 결과를 보여줌
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);
const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 기초 배우기', done: true },
    { id: 2, text: '리액트와 리덕스', done: false },
  ],
};

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }
const todos = handleActions(
  {
    //이렇게 하는 것도 가능. 모두 다payload 이기에 헷갈림. 따라서 비구조화

    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    //[CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    // [INSERT]: (state, action) => ({
    //   ...state,
    //   todos: state.todos.concat(action.payload),
    // }),
    [TOGGLE]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    // [REMOVE]: (state, action) => ({
    //   ...state,
    //   todos: state.todos.filter((todo) => todo.id !== action.payload),
    // }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);
export default todos;
