import React from "react";
import { Box } from "@mui/material";
import useStyles from "./header-style";
import MenuItems from "../MenuItems";

export default function Header() {
  const classes = useStyles();

  const Logo = () => {
    return (
      <Box className={classes.innerContainer}>
        <img className={classes.logo} src="assets/logo.png" alt="Logo" />
      </Box>
    );
  };

  // we'll make the search icon color become red on hover later:
  // https://stackoverflow.com/questions/48703510/change-image-on-hover-in-jsx

  //   <img
  //   src="img1"
  //   onMouseOver={e => (e.currentTarget.src = "img2")}
  // />

  const Search = () => {
    return (
      <Box className={classes.innerContainer}>
        <img
          className={classes.searchIcon}
          src="/assets/search icon.png"
          alt="Search Icon"
        />
      </Box>
    );
  };

  return (
    <Box className={classes.container}>
      <Logo />
      <MenuItems />
      <Search />
    </Box>
  );
}
