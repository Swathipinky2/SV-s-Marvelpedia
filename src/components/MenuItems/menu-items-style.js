import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    listStyleType: "none",
  },
  item: {
    color: "white",
    fontSize: 32,
    fontWeight: 400,
    fontFamily: "Bebas Neue",
    "&:hover": {
      cursor: "pointer",
      color: "red",
    },
  },
}));

export default useStyles;
