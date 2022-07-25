import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
function CoinButton() {
  return (
    <Link to="/cointable">
    <Button style={{
        display:"flex",
        justifyContent:"center",
        width:240,
        flexDirection:"colomn",
        marginLeft:"40%",
        marginTop:"6%",
        borderRadius:20,
        backgroundColor:'#00ffe4',
        fontSize:19
        }}
    variant="contained" 
    disableElevation
    >
        
    Explore Coins
  </Button>
  </Link>
  )
}

export default CoinButton