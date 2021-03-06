// cd C:\Users\SongEunWoo\react\react book\todo-app
import './TodoTemplate.scss';
import React from 'react';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default React.memo(TodoTemplate);
