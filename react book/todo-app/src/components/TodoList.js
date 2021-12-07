// cd C:\Users\SongEunWoo\react\react book\todo-app
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
//받는 순서는 그냥 props의 순서와 동일함.
const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    /*<div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
    */
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={56}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};
export default React.memo(TodoList);
