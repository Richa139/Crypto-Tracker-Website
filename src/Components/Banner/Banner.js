import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Courasel from './Courasel';
import CoinButton from './CoinButton';
const useStyle=makeStyles(()=>({
    banner:{
      backgroundImage:"url(./Banner.jpeg)",  
      backgroundRepeat:"no-repeat",
      height:"760",
      backgroundSize:"cover",
    //   backgroundPosition:'fixed'
    },
    content:{
      height:760,
      display:"flex",
      flexDirection:"column",
      justifyContent:'center',
      paddingTop:25
    },
    tagline:{
      display:'flex',
      justifyContent:'center',
      fontSize:'5rem',
      fontWeight:'bold',
      marginTop:'100'
    }
}));

function Banner() {
   const classes=useStyle();
    return (
    <div className={classes.banner}>
    <Container className={classes.content}>
    <Typography className={classes.tagline}>
          CryptoHunter        
        </Typography>
        <Typography style={{
            variant:"subtitle2",
            justifyContent:'center',
            display:'flex',
            }}>
        Get All The Info Regarding Your Favorite Crypto Currency
        </Typography>
        
        <CoinButton/>
        <Courasel/>

    </Container>
    
    </div>
  )
}

export default Banner