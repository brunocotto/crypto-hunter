import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    flex: 1,
    color: "#6833e4",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
});

export default function Header() {

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",   
    },
  });

    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography className={classes.title}><Link to={"/"}>Crypto Hunter</Link>
              </Typography>
              <Select 
              variant="outlined" 
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
              }}>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"BRL"}>BRL</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    )
  }