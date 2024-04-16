import React from "react";
import { Typography } from "@mui/material";
import useStyles from "./menu-items-style";

export default function MenuItems() {
  const classes = useStyles();

  const menuItemsArray = ["Comics", "Characters", "Creators", "Stories"];

  return (
    <ul className={classes.container}>
      {menuItemsArray.map((item) => (
        <li key={menuItemsArray.indexOf(item)}>
          <Typography variant="a" className={classes.item}>
            {item}
          </Typography>
        </li>
      ))}
    </ul>
  );
}
