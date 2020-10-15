import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0",
    maxWidth: "1200px",
    display: "flex",
    flexFlow: "row, nowrap",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    
  },
}));

const HeaderDesktop = memo(({ elements }) => {
  const style = useStyles();
  const list = elements.map((el) => {
    const name = Object.keys(el)[0];
    return (
      <ListItem key={name}>
        <ListItemText primary={name} />
      </ListItem>
    );
  });
  return (
    <List className={style.root}>
      {list}
    </List>
  );
});

HeaderDesktop.propTypes = {};

export default HeaderDesktop;
