import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  searchPanel: {
    '& input': {
      height: 16,
    },
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.8)',
      borderWidth: 2,
    },
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& label.Mui': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f50057',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 2,
      },
      '&:hover fieldset': {
        borderColor: '#f50057',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f50057',
      },
    },
  },
}));

const SearchPanel = ({ onSearchChange }) => {
  const searchText = 'Type here to search';
  const classes = useStyles();

  const onChange = (event) => {
    onSearchChange(event.target.value);
  };
  return (
    <TextField
      id="outlined-basic"
      label={searchText}
      variant="outlined"
      size="small"
      color="inherit"
      className={classes.searchPanel}
      onChange={onChange}
    />
  );
};

export default SearchPanel;
