import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
function ItemStatusFilter({ onFilter }) {
  const [activeIndex, setStateActiveIndex] = React.useState(0);
  const items = ['ALL', 'Active', 'Done'];
  const classes = useStyles();
  const setActiveIndex = (index) => {
    setStateActiveIndex(index);
    onFilter(index);
  };

  return (
    <div>
      {items &&
        items.map((item, index) => (
          <Button
            key={index}
            className="headerBbutton"
            onClick={() => setActiveIndex(index)}
            color={activeIndex === index ? 'secondary' : 'inherit'}
            variant={activeIndex === index ? 'contained' : 'outlined'}>
            <Typography variant="button" className="button-text">
              {item}
            </Typography>
          </Button>
        ))}
    </div>
  );
}

export default ItemStatusFilter;
