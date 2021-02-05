import React from 'react';
import AddIcon from '@material-ui/icons/AddCircle';
import { IconButton } from '@material-ui/core';

function AddItem({ onAddItem }) {
  const [state, setState] = React.useState('');
  const onLabelChange = (event) => {
    setState(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onAddItem(state);
    setState('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onLabelChange}
        placeholder="What needs to be done?"
        value={state}
      />
      <IconButton onClick={onSubmit} size="medium">
        <AddIcon fontSize="large" color="secondary" />
      </IconButton>
    </form>
  );
}

export default AddItem;
