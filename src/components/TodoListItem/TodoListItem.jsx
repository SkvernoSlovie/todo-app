import React, { Component } from 'react';
import { Typography, IconButton, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const useStyles = makeStyles((theme) => ({
  itemLi: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #c4c4c4',
  },
  liText: {
    marginLeft: 10,
  },
  done: {
    textDecoration: 'line-through',
  },
  important: {
    fontWeight: 600,
  },
}));

function TodoListItem({
  label,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  done = false,
  important = false,
}) {
  const classes = useStyles();

  let classNames = classes.liText;
  if (done) {
    classNames += ` ${classes.done}`;
  }
  if (important) {
    classNames += ` ${classes.important}`;
  }
  return (
    <li className={classes.itemLi}>
      <div onClick={onToggleDone}>
        <Typography variant="h6" color="primary" className={classNames}>
          {label}
        </Typography>
      </div>
      <div>
        <IconButton onClick={onDeleted} aria-label="delete" color="secondary">
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={onToggleImportant} aria-label="priotity" color="primary">
          <PriorityHighIcon />
        </IconButton>
      </div>
    </li>
  );
}

export default TodoListItem;
