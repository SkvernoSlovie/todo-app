import React from 'react';
import produce from 'immer';
import { makeStyles } from '@material-ui/core';

import TodoList from '../TodoList/TodoList';
import AddItem from '../AddItem/AddItem';

const useStyles = makeStyles(() => ({
  wrapper: {
    color: '#ffff',
    fontFamily: 'Roboto, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const App = () => {
  const classes = useStyles();

  const todoData = [
    { id: 1, label: 'Drink Coffee', important: false, done: false },
    { id: 2, label: 'Make Awesome App', important: true, done: true },
    { id: 3, label: 'Have a lunch', important: false, done: false },
  ];
  const [stateData, setStateData] = React.useState(todoData);
  const [stateTerm, setStateTerm] = React.useState('');
  const [stateFilter, setStateFilter] = React.useState(0);

  const onDeleted = (id) => {
    setStateData(
      produce(stateData, (draftState) => {
        draftState.splice(
          draftState.findIndex((item) => item.id === id),
          1,
        );
      }),
    );
  };

  const onAddItem = (text) => {
    setStateData(
      produce(stateData, (draftState) => {
        const newId = draftState.reduce((res, item) => (item.id === res ? (res += 1) : res), 1);
        draftState.push({ id: newId, label: text, important: false });
      }),
    );
  };
  const toggleProp = (id, propName) => {
    return produce(stateData, (draftState) => {
      const arrIndex = draftState.findIndex((item) => item.id === id);
      draftState[arrIndex][propName] = !draftState[arrIndex][propName];
    });
  };
  const onToggleImportant = (id) => {
    setStateData(toggleProp(id, 'important'));
  };

  const onToggleDone = (id) => {
    setStateData(toggleProp(id, 'done'));
  };

  const onSearchChange = (term) => {
    setStateTerm(term);
  };
  const search = (items, term) => {
    if (term.length === 0) {
      return items;
    } else {
      return items.filter((item) => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }
  };

  const onFilterItem = (index) => {
    setStateFilter(index);
  };

  const filter = (index, items) => {
    if (index === 0) {
      return items;
    } else if (index === 1) {
      return items.filter((item) => !item.done);
    } else {
      return items.filter((item) => item.done);
    }
  };

  const visibleItems = search(stateData, stateTerm);
  const filtredItems = filter(stateFilter, visibleItems);
  return (
    <div className={classes.wrapper}>
      <TodoList
        todoData={filtredItems}
        onDeleted={onDeleted}
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
        onSearchChange={onSearchChange}
        onFilter={onFilterItem}
      />
      <AddItem onAddItem={onAddItem} />
    </div>
  );
};

export default App;
