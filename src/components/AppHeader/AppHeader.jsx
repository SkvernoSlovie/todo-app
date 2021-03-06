import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';


const useStyles = makeStyles((theme) => ({
  appHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    backgroundColor: '#3f51b5',
    borderRadius: '7px 7px 0 0',
    width: '100%',
  },
  headerTitle: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 20,
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0 10px 2px 10px',
  },
  searchPanel: {
    marginRight: 10,
  },
}));

const AppHeader = ({ countDoneItems, todoItems, onSearchChange, onFilter }) => {
  const classes = useStyles();

  return (
    <div className={classes.appHeader}>
      <div className={classes.headerTitle}>
        <Typography variant="h5" color="inherit">
          TODO LIST
        </Typography>
        <Typography variant="caption" color="inherit">
          {todoItems - countDoneItems} more to do, {countDoneItems} done
        </Typography>
      </div>
      <div className={classes.headerContent}>
        <div className={classes.searchPanel}>
          <SearchPanel onSearchChange={onSearchChange} />
        </div>
        <ItemStatusFilter onFilter={onFilter} />
      </div>
    </div>
  );
};

export default AppHeader;
