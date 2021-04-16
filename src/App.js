
import { useState } from 'react';
import './App.css';
import Home from "./Home";
import Login from './Login';
import Navbar from "./Navbar";
import Signup from './Signup';
import Search from "./Search";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import CakeDetails from './CakeDetails';


function App() {
  // var [user,SetUser] = useState()
  // var[loginstatus , Setloginstatus] = useState(false)
  // function  Logindone(data) {
  //   alert("Login component is called the parent(App)")
  //   SetUser(data)
  //   Setloginstatus(true)
  // }

  //Router will look for path into addressbar and load corresponding component  
  return (
    <div>
      
      <Router>
      <Navbar></Navbar>
        <div>
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}/>
          <Route path="/search" exact component={Search}></Route>
          <Route path="/Signup" exact component={Signup}/>
          <Route path="/cake/:cakeid" exact component={CakeDetails}/>
          <Route path="/*">
         <Redirect to="/"></Redirect>
         </Route>
         </Switch>   

         </div> 
      </Router>
      
    </div>
  );
}

export default App;

{/* Here : indicates a params(varaiable), and cakeid is dynamic */}
          {/* If we dont use exact keyword homepage will come beofore all the component */}
          {/* <Router path="/*" component={Pagenotfpound}/> */}

          {/* this is component when we enter invalid address   */}