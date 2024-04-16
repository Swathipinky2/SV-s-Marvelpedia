import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: 15,
  },
  innerContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  searchIcon: {
    height: 30,
    width: 30,
    "&:hover": {
      cursor: "pointer",
      color: "red",
    },
  },
}));

export default useStyles;
