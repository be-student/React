// cd C:\Users\SongEunWoo\react\react book\todo-app
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import React from 'react';
//받는 순서는 그냥 props의 순서와 동일함.
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};
export default React.memo(TodoList);
