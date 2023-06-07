import { Route , useLocation } from 'react-router-dom';
import './App.css';
import {Home,Landing,Detail,Form} from './views'
import Nav from './components/navBar/Nav';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3001/";



function App() {
  const location = useLocation()
  console.log(location)
  return (
    <div className="App">
        {/* {location.pathname !=='/' & <Nav/>} */}
        
        {location.pathname !== "/" && <Nav />}
        
        
      <Route exact path={'/'} component={Landing}/>
      <Route path={'/home'} render={()=><Home/>}/>
      <Route path={'/detail/:id'} render={()=><Detail/>}/>
      <Route path={'/create'} render={()=><Form/>}/>

    </div>
  );
}

export default App;
