import { event } from "jquery";
import { Link } from "react-router-dom";


function Navbar(props){
  var count = 0;
let Search = function (event) {
  count++
  event.preventDefault()
  console.log("Search Happening", event);
  console.log("Count : ", count)
  
}

   return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
   <Link to = "/"> <a className="navbar-brand">My Cakeshop</a></Link>
    
    {/* printing the children property passed by the app.js recieving it in the props */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick= {Search} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        {props.loginstatus ? <div>
        <button className="btn btn-danger" >Logout</button>
        </div>
        : <div>
        <Link to="/login"><button className="btn btn-primary" >Login</button></Link>
         </div>
}
      </form>
    </div>
  </nav>
   ) 
}

export default Navbar