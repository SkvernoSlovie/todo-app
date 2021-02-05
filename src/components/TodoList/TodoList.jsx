import React from 'react';
import { makeStyles } from '@material-ui/core';

import AppHeader from '../AppHeader/AppHeader';
import TodoListItem from '../TodoListItem/TodoListItem';



const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '50%',
    border: '3px solid #3f51b5',
    borderRadius: '10px 10px 0 0',
  },

  listGroup: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
}));

const TodoList = ({
  todoData,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  onSearchChange,
  onFilter,
}) => {
  const doneCount = todoData && todoData.filter((item) => item.done).length;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <AppHeader
        countDoneItems={doneCount}
        todoItems={todoData && todoData.length}
        onSearchChange={onSearchChange}
        onFilter={onFilter}
      />
      <ul className={classes.listGroup}>
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
