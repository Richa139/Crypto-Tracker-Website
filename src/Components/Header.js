import { AppBar,Container, Select, Toolbar, Typography, MenuItem } from '@material-ui/core';
import React from 'react'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles=makeStyles(()=>({
        title:{
            color:"#00ffe4",
            cursor:"pointer",
            fontWeight:"bold",
            flex:1,
            fontSize:"30",
            fontFamily: 'Edu SA Beginner',
            fontFamily: 'Open Sans'
        },
    }));

    const darkTheme=createTheme({
        palette:{
            primary:{
                main: "#fff",
            },
            type:"dark",
        },
    });


function Header() {

    const classes = useStyles();
    
    const {currency, setcurrency} = CryptoState();
    console.log(currency);
    const history = useHistory();
    return (
        <ThemeProvider theme={darkTheme} >
            <AppBar color="transparent" position='static' >
                <Container>
                    <Toolbar>
                        <Typography onClick={() => history.push("/")}
                            className={classes.title}
                            variant="h6"
                        >
                            CryptoHunter
                        </Typography>
                        <Select
                            variant="outlined"
                            style={{
                                width: 100,
                                height: 40,
                                marginRight: 15,
                            }}
                            value={currency}
                            onChange={(e) => setcurrency(e.target.value)}
                        >
                            <MenuItem value={"INR"}>INR</MenuItem>
                            <MenuItem value={"USD"}>USD</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;