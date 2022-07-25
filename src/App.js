import { BrowserRouter , Route} from "react-router-dom";
import Header from './Components/Header.js';
import HomePage from './Pages/HomePage.js';
import CoinPage from './Pages/CoinPage.js';
import CoinTable from "./Pages/CoinTable.js";
import { makeStyles } from '@material-ui/core/styles';
const useStyles=makeStyles(()=>({
  App:{
     backgroundColor:'#14161a',
     color:"white",
     minHeight:"100vh",
  }
}));

function App() {  
  const classes=useStyles();
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Route path="/" component={HomePage} exact />
      <Route path='/cointable' component={CoinTable}/>
      <Route path="/coins/:id" component={CoinPage}/>
    </div>
    </BrowserRouter>
  );
}
export default App;
