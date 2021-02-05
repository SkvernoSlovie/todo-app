import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.css';

const TodoList = ({
  todoData,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  onSearchChange,
  onFilter,
}) => {
  const doneCount = todoData && todoData.filter((item) => item.done).length;

  return (
    <div className="container">
      <AppHeader
        countDoneItems={doneCount}
        todoItems={todoData && todoData.length}
        onSearchChange={onSearchChange}
        onFilter={onFilter}
      />
      <ul className="list-group">
        {todoData &&
          todoData.map((item) => {
            const { id, ...itemProps } = item;
            return (
              <TodoListItem
                key={id}
                {...itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}
                onToggleImportant={() => onToggleImportant(id)}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);
